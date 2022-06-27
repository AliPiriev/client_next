import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItemById } from '../helpers'


function Article({ data, levels, tags, categories }) {
   let level = null;
   if (levels && levels.data) level = getItemById(levels.data, data.level);
   // console.log(JSON.parse(data.tags))
   return (
      <Link to={`/articles/${data.slug}`} className="article">
         <div className="img-box">
            <img src={require('../assets/img/article.png').default} alt="" className="img-absolute" />
            <div className="pins">
               {(data.tags && JSON.parse(data.tags).length && tags.data) ? (
                  JSON.parse(data.tags).map((tag) => {
                     return (
                        <div className="tag-item" key={tag}>
                           {getItemById(tags.data, tag).name}
                        </div>
                     )
                  })
               ) : ''}
               <div className="cat-item">
                  {categories.data ? getItemById(categories.data, data.category).name : ''}
               </div>
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
   return {
      levels: state.commonDataState.levels,
      tags: state.commonDataState.tags,
      categories: state.commonDataState.categories
   }
}

export default connect(mapStateToProps, null)(Article);