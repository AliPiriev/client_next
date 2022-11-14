import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
import AuthContectProvider from '../contexts/AuthContext';
import { useRouter } from 'next/router';

import '../styles/index.scss'
import Layout from '../components/layouts/Layout';
import MainLayout from '../components/layouts/MainLayout';

import { motion } from "framer-motion";
import { fetchData } from '../queries';

  

function MyApp({ Component, pageProps }) {
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
  const router = useRouter();

  return (
    <Provider store={store}>
      <Layout>
        <AuthContectProvider>
          <motion.div
            key={router.asPath}
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