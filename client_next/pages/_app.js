import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
import AuthContectProvider from '../contexts/AuthContext';

import '../styles/index.scss'
import Layout from '../components/layouts/Layout';
import MainLayout from '../components/layouts/MainLayout';

import { motion } from "framer-motion";

// import ReactDOM from 'react-dom/client';
// import { Buffer } from 'buffer';
// window.Buffer = window.Buffer || Buffer;
// const root = ReactDOM.createRoot(document.getElementById('root'));


function MyApp({ Component, pageProps, router }) {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  }

  return (
    <Provider store={store}>
      <Layout>
        <AuthContectProvider>
          <motion.div
            key={router.route}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 1 }}
          >
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </motion.div>
        </AuthContectProvider>
      </Layout>
    </Provider>
  )
}




export default MyApp;