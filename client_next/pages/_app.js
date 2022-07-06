import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
import AuthContectProvider from '../contexts/AuthContext';

import '../styles/index.scss'
import Layout from '../components/layouts/Layout';

// import ReactDOM from 'react-dom/client';
// import { Buffer } from 'buffer';
// window.Buffer = window.Buffer || Buffer;
// const root = ReactDOM.createRoot(document.getElementById('root'));


function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <AuthContectProvider>
          <Component {...pageProps} />
        </AuthContectProvider>
      </Layout>
    </Provider>
  )
}




export default MyApp;