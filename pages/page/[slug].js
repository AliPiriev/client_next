import parse from 'html-react-parser';
import { fetchData } from '../../queries';



export const getStaticPaths = async () => {
   try {
      const res = await fetchData('http://localhost:8080/api/pages');
      const paths = [];
      if(){
         paths = res.data.map(items => {
            return {
               params: { slug: items.slug }
            }
         })
      }

      

      return {
         paths,
         fallback: false
      }
   } catch (e) {
      return { paths: [], fallback: false }
   }

}

export const getStaticProps = async (context) => {
   try {
      const slug = context.params.slug || undefined;
      const res = await fetchData(`http://localhost:8080/api/pages/${slug}`);

      return {
         props: { data: res.data }
      }
   } catch (e) {
      return {
         props: { data: null }
      }
   }

}

function SimplePage({ data }) {
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
