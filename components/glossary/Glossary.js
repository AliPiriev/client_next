import Link from 'next/link';

function Glossary({ data }) {
   return (
      <div className="glossary">
         <h3 className="title">{data.title}</h3>
         <p className="teaser">{data.teaser}</p>
         <Link href={`/glossaries/${data.slug}`} className="grey-btn">
            <a>
               <span>Full definition</span>
            </a>
         </Link>
      </div>
   )
}

export default Glossary; 