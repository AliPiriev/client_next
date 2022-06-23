import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import AuthContectProvider from './contexts/AuthContext';
import CommonDataProvider from './contexts/CommonDataContect';
import { connect } from 'react-redux';
import useFetch from './useFetch';

import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import AnimatedRoutes from './components/animated/AnimatedRoutes';


function App({setSettings, setCommonData}) {
   const { data } = useFetch(`http://localhost:8080/api/settings`);
   const categories = useFetch('http://localhost:8080/api/categories');
   const levels = useFetch('http://localhost:8080/api/levels');
   const tags = useFetch('http://localhost:8080/api/tags');
   
   useEffect(() => {
      if(data) setSettings(data);
      setCommonData({categories, levels, tags});
   }, [data, categories, levels, tags])

   return (
      <Router>
         <div className="App">
            <AuthContectProvider>
               <CommonDataProvider>
                  <Header />
                  <AnimatedRoutes />
                  <Footer />
               </CommonDataProvider>
            </AuthContectProvider>
         </div>
      </Router>
   );
}


const mapDispatchToProps = (dispatch) => {
   return {
      setSettings: (payload) => dispatch({ type: 'SET_SETTINGS', payload }),
      setCommonData: (payload) => dispatch({type: 'SET_COMMON_DATA', payload}),
   }
}

export default connect(null, mapDispatchToProps)(App);
