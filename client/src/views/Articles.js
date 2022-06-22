import { useContext, useEffect, useState, useRef } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import AnimatedPage from "../components/animated/AnimatedPage";
import BgImage from '../components/BgImage';
import { CommonDataContext } from "../contexts/CommonDataContect";
import { fetchData } from '../queries'
import Article from "../components/Article";
import Pagination from "../components/Pagination";
import NotResult from "../components/NotResult";

function Articles() {
   const [articles, setArticles] = useState(null);
   const { categories, levels, tags } = useContext(CommonDataContext);
   const [searchParams, setSearchParams] = useSearchParams();
   const [params, setParams] = useState({
      category: [],
      tag: [],
      level: [],
      page: 1,
      limit: 15
   })
   const didMount = useRef(true);

   const hanldeChange = (definition, value) => {
      if (definition !== 'page' && definition !== 'limit') {
         let result = params[definition];
         const index = result.indexOf(value.toString());
         if (index === -1) {
            result.push(value.toString());
         } else {
            result.splice(index, 1);
         }
         setSearchParams({ ...params, [definition]: result });
         setParams({ ...params, [definition]: result })
      } else {
         setSearchParams({ ...params, [definition]: value });
         setParams({ ...params, [definition]: value })
      }
   }

   const getData = async () => {
      const res = await fetchData(`http://localhost:8080/api/articles?${searchParams.toString()}`);
      setArticles(res.data);
   }


   useEffect(() => {
      if (didMount.current) {
         const category = searchParams.getAll('category');
         const tag = searchParams.getAll('tag');
         const level = searchParams.getAll('level');
         const page = searchParams.get('page') || 1;
         const limit = searchParams.get('limit') || 15;
         setSearchParams({ category, tag, level, page, limit });
         setParams({ category, tag, level, page, limit });
         didMount.current = false;
      } else {
         getData();
      }
   }, [params])

   return (
      <AnimatedPage>
         <BgImage id={2} />
         <div className="articles-page">
            <div className="container">
               <div className="top">
                  <h2 className="title">Articles</h2>
                  <div className="filter-by">
                     {(categories.data && categories.data.length) && (
                        <div className="wrap">
                           <span className="ttl">Categories:</span>
                           <div className="list">
                              {categories.data.map((cat) => {
                                 return (
                                    <div className="item cat-item"
                                       key={cat.id} onClick={() => hanldeChange('category', cat.id)}>{cat.name}</div>
                                 )
                              })}

                           </div>
                        </div>
                     )}

                     {(levels.data && levels.data.length) && (
                        <div className="wrap">
                           <span className="ttl">Difficulty:</span>
                           <div className="list">
                              {levels.data.map((lev) => {
                                 return (<div className={`item lev-item ${lev.title.toLowerCase()}`}
                                    key={lev.id} onClick={() => hanldeChange('level', lev.id)}>{lev.title}</div>)
                              })}
                           </div>
                        </div>
                     )}

                     {(tags.data && tags.data.length) && (
                        <div className="wrap">
                           <span className="ttl">Tags:</span>
                           <div className="list">
                              {tags.data.map((tag) => {
                                 return (<div className="item tag-item" key={tag.id}>{tag.name}</div>)
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
                     limit: Number(params.limit),
                     page: Number(params.page),
                     hanldeChange
                  }} />
               ) : ''}
            </div>
         </div>
      </AnimatedPage>
   )
}

export default Articles;