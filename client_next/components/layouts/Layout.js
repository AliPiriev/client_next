import { useEffect } from 'react';
import { connect } from 'react-redux';
import useFetch from '../../hooks/useFetch';

function Layout({children, setSettings, setCommonData}) {
   const { data } = useFetch(`http://localhost:8080/api/settings`);
   const categories = useFetch('http://localhost:8080/api/categories');
   const levels = useFetch('http://localhost:8080/api/levels');
   const tags = useFetch('http://localhost:8080/api/tags');

   useEffect(() => {
      if (data) setSettings(data);
      setCommonData({ categories, levels, tags });
   }, [data, categories, levels, tags])

   return (
      <>
         {children}
      </>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      setSettings: (payload) => dispatch({ type: 'SET_SETTINGS', payload }),
      setCommonData: (payload) => dispatch({ type: 'SET_COMMON_DATA', payload }),
   }
}

export default connect(null, mapDispatchToProps)(Layout);