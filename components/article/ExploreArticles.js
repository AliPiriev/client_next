import useFetch from '../../hooks/useFetch';
import Article from './Article';
import styles from "../../styles/articles/Slug.module.scss";

function ExploreArticles({ id, category }) {
   const { data } = useFetch(`http://localhost:8080/api/articles?id_not=${id}&category=${category}&limit=3`);

   return (
      <div className="explore-articles">
         <div className="container">
            <h2 className="title">Explore more</h2>
         </div>

         <div className="list">
            {
               data && data.results.map((itemData) => {
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

export default ExploreArticles;