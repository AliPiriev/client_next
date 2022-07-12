import { useRouter } from 'next/router'
import useFetch from '../../hooks/useFetch';
import parse from 'html-react-parser';



function SimplePage() {
   const router = useRouter();
   const { slug } = router.query; 
   const { data } = useFetch(`http://localhost:8080/api/pages/${slug}`);
   
   return (
      <div className="simple-page">
         {data ? (
            <div className="container">
               <h1 className="title">{data.title}</h1>
               {data.sub_title && (
                  <span className="subtitle">{data.sub_title}</span>
               )}
               <div className="content text">
                  {parse(data.details)}
               </div>
            </div>
         ) : (
            <div className="container">
               <div className="not-found">Page Not found</div>
            </div>
         )}
      </div>
   )
}

export default SimplePage;  