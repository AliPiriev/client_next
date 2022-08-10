import Link from 'next/link';
import { connect } from 'react-redux';
import { getItemById } from '../../helpers';
import CornerDecor from '../courses/border/CornerDecor';
import ArticleImgs from './ArticleImgs';

function Article({ data, levels, tags, categories }) {
   let level = null;
   if (levels && levels.data) level = getItemById(levels.data, data.level);

   return (
      <Link href={`/articles/${data.slug}`}>
         <a  className="article">
         <div className='cornerBorderDiv'>
            <CornerDecor />
            <div className='cornerBorder'>
            <div className="img-box">
               {categories && categories.data ? (<ArticleImgs />) : ` return (
               <div>
                     {ArtiImgs.map((item) => (
                        <img key={item.id} src={item.img} alt="articleImage" className="img-absolute" />
                     )
                     )}
               </div>
            )`}
               <ArticleImgs />
              <div className="pins">
                  {(data.tags && JSON.parse(data.tags).length && tags.data) ? (
                     JSON.parse(data.tags).map((tag) => {
                        return (
                           <div className="white-cat-item" key={tag}>
                              {getItemById(tags.data, tag).name}
                           </div>
                        )
                     })
                  ) : ''}
                  <div className="white-cat-item">
                     {categories && categories.data ? getItemById(categories.data, data.category).name : ''}
                  </div>
               </div>
            </div>

            <div className="bottom">
               <div className='bottomTtl'>
                  <h3 className="ttl">{data.title}</h3>
               </div>
               <div className='bottomLevel'>
                {level && <div className={`level ${level.title.toLowerCase()}`}><br/>{level.title}</div>}
                {/* <br/><div className='dot'>English</div><div className='dot'>8 min</div> */}
               </div>
            </div>
            </div>
            </div>
         </a>
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