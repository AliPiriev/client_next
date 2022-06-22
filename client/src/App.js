import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import AuthContectProvider from './contexts/AuthContext';
import CommonDataProvider from './contexts/CommonDataContect';
import { connect } from 'react-redux';
import useFetch from './useFetch';

import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import AnimatedRoutes from './components/animated/AnimatedRoutes';


function App({setSettings}) {
   const { data } = useFetch(`http://localhost:8080/api/settings`);
   
   useEffect(() => {
      if(data) setSettings(data);
   }, [data])

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
   }
}

export default connect(null, mapDispatchToProps)(App);
