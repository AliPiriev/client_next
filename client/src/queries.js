

const fetchData = async (url) => {
   let data = null;
   let isPending = true;
   let error = null;
   let total = '';
   let links = false;


   return fetch(url)
      .then(res => {
         if (!res.ok) {
            throw Error('could not fetch the data for that resource');
         }
         total = res.headers.get("X-Total-Count");
         links = res.headers.get("Link");
         return res.json();
      })
      .then(res => {
         isPending = false;
         data = res;
         error = null;
         return { data, isPending, error, total, links };
      })
      .catch(err => {
         if (err.name === 'AbortError') {
            console.log('fetch aborted')
         } else {
            isPending = false;
            error = err.message;
            links = false;
            total = '';
         }
         return { data, isPending, error, total, links };
      })
}


export { fetchData };