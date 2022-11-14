import parse from 'html-react-parser';
import { fetchData } from '../../queries';




   
export const getStaticPaths = async () => {

   const res = await fetchData('https://academy-admin.vercel.app/api/data/pages');
   let paths = [];
   if (res.data && res.data.result) {
      paths = res.data.result.map(items => {
         return {
            params: { slug: items.slug }
         }
      })
   }


   return {
      paths,
      fallback: false
   }

}

export const getStaticProps = async (context) => {
   const slug = context.params.slug || undefined;
   const res = await fetchData(`https://academy-admin.vercel.app/api/data/pages/${slug}`);

   return {
      props: {  res: res.data.result }
   }
}

function SimplePage({ res }) {
   const data = res || null;
   return (
      <div className="simple-page">
         {data ? (
            <div className="container">
               <h1 className="title">{data.title}</h1>
               {data.sub_title && (
                  <span className="subtitle">{data.sub_title}</span>
               )}
               <div className="content text">
                  {parse(data.editor)}
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