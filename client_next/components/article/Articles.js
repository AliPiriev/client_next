import Article from './Article'
import Link from 'next/link';

function Articles({ data, title }) {
   return (
      <div className="articles">
         <div className="top">
            <h2 className="title">{title}</h2>
            <Link href={`articles?category=${data.results[0].category}`} className="grey-btn">
               <a>
                  <span>Explore All</span>
               </a>
            </Link>
         </div>
         <div className="list">
            {
               data.results.map((itemData) => {
                  return (
                     <div className="item" key={itemData.id}>
                        <Article data={itemData} />
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Articles; 