import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import parse from 'html-react-parser';
import AnimatedPage from '../../components/animated/AnimatedPage';


function SimplePage() {
   let { slug } = useParams();
   const { data } = useFetch(`http://localhost:8080/api/pages/${slug}`);

   return (
      <AnimatedPage>
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
      </AnimatedPage>
   )
}

export default SimplePage;  