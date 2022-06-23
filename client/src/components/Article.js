import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItemById } from '../helpers'

 
function Article({ data , levels}) {
   let level = null;
   if(levels && levels.data) level = getItemById(levels.data, data.level);
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

const mapStateToProps = (state) => {
   return{
      levels: state.commonDataState.levels
   }
}

export default connect(mapStateToProps, null)(Article);