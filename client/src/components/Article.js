import { useContext } from 'react';
import { CommonDataContext } from '../contexts/CommonDataContect';
import { Link } from 'react-router-dom';


function Article({ data }) {
   const { getLevel } = useContext(CommonDataContext);
   let level = getLevel(data.level);
   return (
      <Link to={`/articles/${data.slug}`} className="article">
         <div className="img-box">
            <img src={require('../assets/img/article.png').default} alt="" className="img-absolute" />
            <div className="pins">

            </div>
         </div>
         <div className="bottom">
            <h3 className="ttl">{data.title}</h3>
            {level && <div className={`level ${level.title.toLowerCase()}`}>{level.title}</div>}
         </div>
      </Link>
   )
}
 
export default Article;