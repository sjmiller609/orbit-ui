import { BrowserRouter } from 'react-router-dom'
import { shape } from 'prop-types'
import { mount } from 'enzyme'

// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {},
  },
}

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) },
})

// wrap with router context - to mount RR links correctly
export function mountWrap(node) {
  return mount(node, createContext())
}
