
import { Provider } from 'react-redux'
import Home from './home'

import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers";

import { CookiesProvider } from 'react-cookie';

function Index() {
  const store = createStore(rootReducer, composeWithDevTools())
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Home />
      </Provider>
    </CookiesProvider>
  )
}

export default Index

