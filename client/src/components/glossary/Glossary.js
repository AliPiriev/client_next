import { Link } from 'react-router-dom';

function Glossary({data}){
   return (
      <div className="glossary">
         <h3 className="title">{data.title}</h3>
         <p className="teaser">{data.teaser}</p>
         <Link to={`/glossaries/${data.slug}`}className="grey-btn">
            <span>Full definition</span>
         </Link>
      </div>
   )
}

export default Glossary; 