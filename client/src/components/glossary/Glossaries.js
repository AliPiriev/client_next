import Glossary from "./Glossary";
import {Link} from 'react-router-dom'

function Glossaries({data, title}){
   return (
      <div className="glossaries">
         <div className="top">
            <h2 className="title">{title}</h2>
            <Link to="/glossaries" className="grey-btn">
               <span>Explore All</span>
            </Link>
         </div>

         <div className="list">
            {
               data.map((dataItem) => {
                  return (
                     <div className="item" key={dataItem.id}>
                        <Glossary data={dataItem}/>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Glossaries;