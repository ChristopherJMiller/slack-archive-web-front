import { combineReducers } from 'redux'

import { UPDATE_CHANNELS } from '../actions/pages'
import { CHANGE_PAGE } from '../actions/nav'

function nav(
  state = {
    page: 'announcements'
  },
  action
) {
  switch(action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.page
      })
    default:
      return state
  }
}

function pages(
  state = {
    messages: [],
    channels: [],
    channelsSet: false
  },
  action
) {
  switch(action.type) {
    case UPDATE_CHANNELS:
      return Object.assign({}, state, {
        channels: action.channels,
        channelsSet: true
      })
    default:
      return state
  }
}

function theme(
  state = {
    themeID: 0
  },
  action
) {
  switch(action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  nav,
  pages,
  theme
})

export default rootReducer