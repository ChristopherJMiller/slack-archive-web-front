import { combineReducers } from 'redux'

import { UPDATE_CHANNELS } from '../actions/pages'
import { CHANGE_PAGE } from '../actions/nav'
import { CHANGE_THEME, CHANGE_SHADE } from '../actions/theme'

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
    themeID: 1,
    dark: false,
    checkedCookie: false,
    themes: {
      'Protanopia & Deuteranopia': 0,
      'Work Hard': 1
    }
  },
  action
) {
  switch(action.type) {
    case CHANGE_THEME:
      return Object.assign({}, state, {
        themeID: action.id,
        checkedCookie: true
      })
      case CHANGE_SHADE:
        return Object.assign({}, state, {
          dark: action.dark,
        })
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