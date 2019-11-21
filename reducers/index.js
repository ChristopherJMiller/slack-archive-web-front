import { combineReducers } from 'redux'

function nav(
  state = {
    page: '',
    isPageChannel: true
  },
  action
) {
  switch(action.type) {
    default:
      return state
  }
}

function pages(
  state = {
    messages: [],
    channels: []
  },
  action
) {
  switch(action.type) {
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