'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { jsonEqual } from 'helpers/compare'
import { unpack, pack, packChild, removeChild } from './helpers'
import UnsavedChangesAlert from '../UnsavedChangesAlert'
import s from './styles.scss'

const errorField = name => '__error_' + name

const Form = FormComponent => {
  class Form extends React.Component {
    onSubmit = this.onSubmit.bind(this)
    update = this.update.bind(this)
    updateErrors = this.updateErrors.bind(this)
    checkSave = this.checkSave.bind(this)
    checkErrors = this.checkErrors.bind(this)
    field = this.field.bind(this)
    unpack = this.unpack.bind(this)
    getValue = this.getValue.bind(this)
    registerOnSubmit = this.registerOnSubmit.bind(this)
    callOnSubmit = this.callOnSubmit.bind(this)

    data = this.unpack(this.props.data)
    fieldId = 'field_'
    // TODO: Namespace params so never any conflict with field names
    state = {
      data: this.data,
      save: false,
      submitted: false,
      onSubmitFuncs: {}, // functions to be called on data before submit, registered to field name
    }

    componentWillReceiveProps({ data, error }) {
      if (!jsonEqual(data, this.props.data)) {
        this.data = this.unpack(data)
        this.setState({ data: this.data })
        this.checkSave({ data: this.data, save: this.state.save })
      }
      if (!jsonEqual(error, this.props.error) && error) {
        this.updateErrors(error.name, error.error)
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      // Refetch the parent data and update the payload as needed
      if (this.props.refetch) this.props.refetch()

      if (!jsonEqual(this.state, nextState)) return true
      if (!jsonEqual(this.props, nextProps)) return true

      return false
    }

    // turn all objects into keys with string names with dot notation
    unpack(data) {
      if (!data || typeof data !== 'object') return data
      return unpack(data)
    }

    getValue(name) {
      const { data } = this.state
      //console.log(name, data[name] || packChild({ name, obj: data }))
      // otherwise, it's a parent object, need to roll it up
      if (data[name]) return data[name]
      return packChild({ name, obj: data })
    }

    update(key, value, updateDefaults) {
      const { data } = this.state
      const set = {
        submitted: false,
        save: updateDefaults,
      }

      if (typeof value !== 'object') {
        set.data = {
          ...data,
          [key]: value,
        }
      } else {
        // first remove the object
        set.data = {
          ...removeChild({ name: key, obj: data }),
        }
        // need to unpack and update the children
        const children = this.unpack(value)
        Object.keys(children).forEach(
          k => (set.data[key + '.' + k] = children[k])
        )
      }
      // when default values update form data, must also update original
      if (updateDefaults) this.data = set.data

      this.setState(set)
    }

    // updates all validation checks
    updateErrors(name, error) {
      // NOTE: have to namespace this way because state is updated simulatenously by all fields, so they get overwriten
      const set = {}
      if (error !== this.state[errorField(name)]) set[errorField(name)] = error
      // check save after validation check
      const save = this.checkSave({ ...this.state, ...set })
      if (typeof save === 'boolean') set.save = save
      if (this.state.submitted && !this.state.scrolled) {
        set.scrolled = true
        const el = document.getElementById(this.fieldId + name)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top < 0 || rect.bottom > window.innerHeight)
            el.scrollIntoView()
        }
      }

      this.setState(set)
    }

    checkSave(state) {
      const { saveOnLoad } = this.props
      const save = state.save

      // changes made
      const equal = saveOnLoad
        ? false
        : jsonEqual(this.callOnSubmit(state.data), this.data)
      // has errors
      if (!this.checkErrors(state)) return false

      if (save && equal) return false
      if (!save && !equal) return true
      return
    }

    // return true if all required fields have data and are valid
    // and if isn't required but has data and is valid
    checkErrors(state) {
      const keys = Object.keys(state)
      return !keys.some(field => {
        if (field.indexOf(errorField('')) !== 0) return
        if (state[field]) return true
      })
    }

    onSubmit(e) {
      e.preventDefault()
      const { saveOnLoad, onSubmit } = this.props
      const { save, data } = this.state
      if (!save) return
      if (!saveOnLoad)
        this.setState({ save: false, submitted: true, scrolled: false })

      onSubmit(pack(this.callOnSubmit(data)))
    }

    registerOnSubmit({ name, onSubmit }) {
      if (!name || !onSubmit) return
      const onSubmitFuncs = {
        ...this.state.onSubmitFuncs,
        [name]: onSubmit,
      }
      this.setState({ onSubmitFuncs })
    }

    // NOTE: this gets called in checkSave, so there should be no side effects. Just transform data
    callOnSubmit(data) {
      const { onSubmitFuncs } = this.state
      const keys = Object.keys(onSubmitFuncs)
      if (!keys.length) return data

      const d = keys.reduce((obj, k) => {
        const clean = onSubmitFuncs[k]
        if (!clean) return obj
        const value = packChild({ name: k, obj })
        const obj2 = {
          ...removeChild({ name: k, obj }),
          ...unpack(clean(value), k),
        }
        return obj2
      }, data)
      return d
    }

    // If a field is named with dot notation, will convert into object / array
    field(name) {
      return {
        name,
        value: this.getValue(name),
        error: this.state[errorField(name)],
        updateErrors: this.updateErrors,
        onChange: this.update,
        submitted: this.state.submitted,
        fieldId: this.fieldId + name,
        registerOnSubmit: this.registerOnSubmit,
      }
    }

    render() {
      const { save } = this.state
      /* eslint-disable no-unused-vars  */
      // don't pass down some props
      const { data, onSubmit, alert, ...otherProps } = this.props

      const newProps = {
        ...otherProps,
        form: {
          save,
          // return an object with props for that field
          field: this.field,
        },
      }

      return (
        <form onSubmit={this.onSubmit} className={s.form}>
          <FormComponent {...newProps} />
          {alert && <UnsavedChangesAlert alert={save} />}
        </form>
      )
    }
  }

  Form.propTypes = {
    error: PropTypes.object,
    data: PropTypes.object,
    onSubmit: PropTypes.func,
    children: PropTypes.element,
    saveOnLoad: PropTypes.bool, // if true, will enable saving preloaded data
    alert: PropTypes.bool, // if true, will enable saving preloaded data
    refetch: PropTypes.func,
  }

  Form.defaultProps = {
    data: {},
    alert: true,
  }

  return Form
}

export default Form
