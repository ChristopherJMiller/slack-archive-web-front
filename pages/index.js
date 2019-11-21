
import { Provider } from 'react-redux'
import Home from './home'

import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers";


function Index() {
  const store = createStore(rootReducer, composeWithDevTools())
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default Index

