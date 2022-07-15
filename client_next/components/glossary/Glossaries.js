import Glossary from "./Glossary";
import Link from 'next/link';

function Glossaries({ data, title }) {
   return (
      <div className="glossaries">
         <div className="top">
            <h2 className="title">{title}</h2>
            <Link href="/glossaries" className="grey-btn">
               <a >
                  <span>Explore All</span>
               </a>
            </Link>
         </div>
 
         <div className="list">
            {
               data.map((dataItem) => {
                  return (
                     <div className="item" key={dataItem.id}>
                        <Glossary data={dataItem} />
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Glossaries;