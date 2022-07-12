

const fetchData = async (url) => {
   let data = null;
   let isPending = true;
   let error = null;


   return fetch(url)
      .then(res => {
         if (!res.ok) {
            throw Error('could not fetch the data for that resource');
         }
         return res.json();
      })
      .then(res => {
         isPending = false;
         data = res;
         error = null;
         return { data, isPending, error };
      })
      .catch(err => {
         if (err.name === 'AbortError') {
            console.log('fetch aborted')
         } else {
            isPending = false;
            error = err.message;
         }
         return { data, isPending, error };
      })
}



export { fetchData }; 