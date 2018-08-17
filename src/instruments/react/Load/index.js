import Async from 'react-imported-component'
import { Loading, ErrorPage } from 'instruments'

const Load = component => {
  if (!component) return
  return Async(
    Object.assign(component, {
      LoadingComponent: Loading,
      ErrorComponent: ErrorPage,
    })
  )
}

export default Load
