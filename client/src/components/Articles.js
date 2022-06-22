import Article from './Article'
import {Link} from 'react-router-dom'

function Articles({data, title}) {
   return (
      <div className="articles">
         <div className="top">
            <h2 className="title">{title}</h2>
            <Link to={`articles?category=${data.results[0].category}`} className="grey-btn">
               <span>Explore All</span>
            </Link>
         </div>
         <div className="list">
            {
               data.results.map((itemData) => {
                  return (
                     <div className="item" key={itemData.id}>
                        <Article data={itemData}/>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Articles; 