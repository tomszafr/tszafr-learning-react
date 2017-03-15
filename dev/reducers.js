import { combineReducers } from 'redux'
import { LOAD_TEXT } from './actions'

function textContent (state = '', action) {
  switch (action.type) {
    case LOAD_TEXT:
      return action.textContent
    default:
      return state
  }
}
const todoApp = combineReducers({
  textContent
})

export default todoApp
