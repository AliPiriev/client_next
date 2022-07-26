import Link from 'next/link';
import NotResult from "../../components/UI/NotResult";
import BgImage from '../../components/UI/BgImage';
import { Link as ScrollLink, Element } from 'react-scroll'
import { fetchData } from '../../queries';


export const getStaticProps = async () => {
   try{
      const res = await fetchData('http://localhost:8080/api/glossaries?limit=500');

      return {
         props: { res }
      }
   }catch(e){
      return {
         props: { res: {
            glossaries: null,
            isPending: true
         } }
      }
   }
  
}


function Glossaries({res}) {
   console.log(res)
   const { data: glossaries, isPending } = res;
   const alphabet = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

   let group = null;
   if (!isPending && glossaries.length) {
      group = alphabet.map((letter) => {
         const groupedByLetter = glossaries.filter((item) => item.letter.toUpperCase() === letter);

         if (groupedByLetter.length) {
            return (
               <Element className="item" key={letter} name={letter}>
                  <span className="value">{letter}</span>
                  <div className="content-list">
                     {groupedByLetter.map((groupedItem) => {
                        return (
                           <Link href={'glossaries/' + groupedItem.slug} key={groupedItem.id}>
                              <a className="content">
                                 <h3>{groupedItem.title}</h3>
                                 <p>{groupedItem.teaser}</p>
                              </a>
                           </Link>
                        )
                     })}
                  </div>
               </Element>
            )
         }
      })
   }

   return (
      <div className="glossaries-page">
         <BgImage id={2} />
         <div className="container">
            {!isPending && glossaries.length ? (
               <div className="inner">
                  <div className="top">
                     <h1 className="title">The Words of Crypto</h1>
                     <p className="teaser">Time to understand the language</p>
                  </div>
                  <div className="search">
                     <div className="letters">
                        {alphabet.map((letter) => {
                           return <ScrollLink to={letter} spy={true} smooth={true} duration={300}
                              className="item" key={letter}>{letter}</ScrollLink>
                        })}
                     </div>
                  </div>
                  <div className="glossary-list">
                     {
                        group
                     }
                     {/* {glossaries.map((glossary) => {
                           return (
                              <div className="item">
                                 <span className="value">{glossary.letter}</span>
                                 <div className="content-list">
                                    <a className="content">
                                       <h3>{glossary.title}</h3>
                                       <p>{glossary.teaser}</p>
                                    </a>
                                 </div>
                              </div>
                           )
                        })} */}
                  </div>
               </div>
            ) : isPending ? (
               <div className="loading">Loading ...</div>
            ) : (
               <NotResult title={'Oops! Nothing yet'} teaser={'No glossaries purchased yet.'} />
            )}
         </div>
      </div>
   )
}

export default Glossaries;