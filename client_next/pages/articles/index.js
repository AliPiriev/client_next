import { useEffect, useState } from "react";
import BgImage from '../../components/UI/BgImage';
import { fetchData } from '../../queries'
import Article from "../../components/article/Article";
import Pagination from "../../components/UI/Pagination";
import NotResult from "../../components/UI/NotResult";
import { connect } from 'react-redux';
import { useRouter } from 'next/router'

function Articles({ commonData }) {
   const [articles, setArticles] = useState(null);
   const { categories, levels, tags } = commonData;
   const router = useRouter();

   const hanldeChange = (definition, value) => {
      if (definition !== 'page' && definition !== 'limit') {

         //if query not exist
         if (!router.query[definition]) {
            router.push({
               query: { ...router.query, [definition]: String(value) }
            })
            return true
         }

         // if query exist but it single one
         if (!Array.isArray(router.query[definition]) && router.query[definition] === String(value)) {
            const params = router.query;
            delete params[definition];
            router.push({
               query: { ...params }
            })
            return true;
         } else if (!Array.isArray(router.query[definition]) && router.query[definition] != String(value)) {
            const params = [];
            params.push(router.query[definition]);
            params.push(String(value));

            router.push({
               query: { ...router.query, [definition]: params }
            })
            return true;
         }

         //if query is an array
         if (Array.isArray(router.query[definition])) {

            let params = router.query[definition];
            const index = params.indexOf(value.toString());
            if (index === -1) {
               params.push(value.toString());
            } else {
               params.splice(index, 1);
            }
           
            router.push({
               query: { ...router.query, [definition]: params }
            })

            return true;
         }
      } else {
         router.push({
            query: { ...router.query, [definition]: value }
         })
      }
   }

   const isActive = (definition, id) => {

      if (!router.query[definition]) return false;

      if (Array.isArray(router.query[definition]) && router.query[definition].includes(String(id))) {
         return true;
      } else if (router.query[definition] === String(id)) {
         return true;
      }

      return false;
   }

   const getData = async () => {
      if(!router.query.page)  router.push({query: { ...router.query, page: 1 }})
      if(!router.query.limit)  router.push({query: { ...router.query, limit: 15 }})
      const res = await fetchData(`http://localhost:8080/api${router.asPath}`);
      setArticles(res.data);
   }

   useEffect(() => {
      if (router.isReady) {
         getData();
      }
   }, [router])

   return (
      <div>
         <BgImage id={2} />
         <div className="articles-page">
            <div className="container">
               <div className="top">
                  <h2 className="title">Articles</h2>
                  <div className="filter-by">
                     {(categories && categories.data) ? (
                        <div className="wrap xer">
                           <span className="ttl">Categories:</span>
                           <div className="list">
                              {categories.data.map((cat) => {
                                 return (
                                    <div className={`item cat-item ${isActive('category', cat.id) ? 'active' : ''}`}
                                       key={cat.id} onClick={() => hanldeChange('category', cat.id)}>{cat.name}</div>
                                 )
                              })}
                           </div>
                        </div>
                     ) : ''}

                     {(levels && levels.data) && (
                        <div className="wrap">
                           <span className="ttl">Difficulty:</span>
                           <div className="list">
                              {levels.data.map((lev) => {
                                 return (
                                    <div
                                       className={`item lev-item ${lev.title.toLowerCase()} 
                                       ${isActive('level', lev.id) ? 'active' : ''}`}
                                       key={lev.id} onClick={() => hanldeChange('level', lev.id)}>{lev.title}</div>
                                 )
                              })}
                           </div>
                        </div>
                     )}

                     {(tags && tags.data) && (
                        <div className="wrap">
                           <span className="ttl">Tags:</span>
                           <div className="list">
                              {tags.data.map((tag) => {
                                 return (<div
                                    className={`item tag-item ${isActive('tag', tag.id) ? 'active' : ''}`}
                                    key={tag.id} onClick={() => hanldeChange('tag', tag.id)}>{tag.name}</div>)
                              })}
                           </div>
                        </div>
                     )}

                  </div>
               </div>
               <div className="article-list">
                  {
                     articles && articles.results.length ? articles.results.map((itemData) => {
                        return (
                           <div className="item" key={itemData.id}>
                              <Article data={itemData} />
                           </div>
                        )
                     }) : (
                        <NotResult title={'Oops! Nothing yet'} teaser={'No articles purchased yet.'} />
                     )
                  }
               </div>
               {articles && articles.total ? (
                  <Pagination data={{
                     total: articles.total,
                     limit: Number(router.query.limit),
                     page: Number(router.query.page),
                     hanldeChange
                  }} />
               ) : ''}
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      commonData: state.commonDataState
   }
}

export default connect(mapStateToProps, null)(Articles);