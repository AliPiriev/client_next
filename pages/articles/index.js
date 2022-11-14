import { useEffect, useState } from "react";
import BgImage from "../../components/UI/BgImage";
import { fetchData } from "../../queries";
import Article from "../../components/article/Article";
import Pagination from "../../components/UI/Pagination";
import PaginationLight from "../../components/UI/PaginationLight";
import NotResult from "../../components/UI/NotResult";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import styles from "../../styles/articles/ArticleIndex.module.scss";

function Articles({ commonData }) {
  let [activeFilterTab, setActiveFilterTab] = useState(null);
  const [articles, setArticles] = useState(null);
  const { categories, levels, tags } = commonData;
  const router = useRouter();
  const [activeContent, setActiveContent] = useState(0);
  const activeTab = (index) => {
    setActiveContent(index);
  };
  console.log(router);
  // use effeectshi shevamowmo kategoriit ...
  const hanldeChange = (definition, value) => {
    if (definition !== "page" && definition !== "limit") {
      //if query not exist
      if (!router.query[definition]) {
        router.push({
          query: { ...router.query, [definition]: String(value) },
        });
        return true;
      }

      // if query exist but it single one
      if (
        !Array.isArray(router.query[definition]) &&
        router.query[definition] === String(value)
      ) {
        const params = router.query;
        delete params[definition];
        router.push({
          query: { ...params },
        });
        return true;
      } else if (
        !Array.isArray(router.query[definition]) &&
        router.query[definition] != String(value)
      ) {
        const params = [];
        params.push(router.query[definition]);
        params.push(String(value));

        router.push({
          query: { ...router.query, [definition]: params },
        });
        return true;
      }

      //if query is an array
      if (Array.isArray(router.query[definition])) {
        let params = router.query[definition];
        const index = params.indexOf(value.toString());
        3;
        if (index === -1) {
          params.push(value.toString());
        } else {
          params.splice(index, 1);
        }

        router.push({
          query: { ...router.query, [definition]: params },
        });

        return true;
      }
    } else {
      router.push({
        query: { ...router.query, [definition]: value },
      });
    }
  };

  const isActive = (definition, id) => {
    if (!router.query[definition]) return false;

    if (
      Array.isArray(router.query[definition]) &&
      router.query[definition].includes(String(id))
    ) {
      return true;
    } else if (router.query[definition] === String(id)) {
      return true;
    }

    return false;
  };

  const getData = async () => {
    if (!router.query.page)
      router.push({ query: { ...router.query, page: 1 } });
    if (!router.query.limit)
      router.push({ query: { ...router.query, limit: 15 } });
    const res = await fetchData(`http://localhost:8080/api${router.asPath}`);
    setArticles(res.data);
  };

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router]);


  return (
    <div>
      <div className={styles.lightImg}>
        <BgImage id={51} />
      </div>
      <div className={styles.darkImg}>
        <BgImage id={5} />
      </div>
      <div className={styles.articlesPage}>
        <div className="container">
          <div className={styles.top}>
            <h2 className={styles.title}>Articles</h2>
            <div className={styles.filterBy}>
              <div className={styles.filterSvg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H18C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V8C18.9999 8.26519 18.8946 8.51951 18.707 8.707L14 13.414V17C13.9999 17.2652 13.8945 17.5195 13.707 17.707L11.707 19.707C11.5671 19.8468 11.389 19.942 11.195 19.9806C11.0011 20.0192 10.8 19.9993 10.6173 19.9237C10.4346 19.848 10.2785 19.7199 10.1686 19.5555C10.0587 19.391 10 19.1978 10 19V13.414L5.293 8.707C5.10545 8.51951 5.00006 8.26519 5 8V5Z"
                    fill="white"
                  />
                </svg>
                <span className={styles.filterSpan}>Filter by</span>
              </div>
              <div className={styles.tabsContainer}>
                {categories && categories.data ? (
                  <div>
                    <div className={`${styles.wrap} ${styles.xer}`}>
                      <span
                        className={
                          activeContent === 1
                            ? `${styles.ttl}, ${styles.activeTtl}`
                            : styles.ttl
                        }
                        onClick={() => activeTab(1)}
                      >
                        Categories<span className={styles.slush}>/</span>
                      </span>
                    </div>
                    <div
                      className={
                        activeContent === 1
                          ? `${styles.list}, ${styles.activeList}`
                          : styles.list
                      }
                    >
                      {categories.data.map((cat) => {
                        return (
                          <div
                            className={`${styles.item}, cornered-cat-item ${
                              isActive("category", cat.id) ? styles.active : ""
                            }`}
                            key={cat.id}
                            onClick={() => hanldeChange("category", cat.id)}
                          >
                            {cat.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {levels && levels.data && (
                  <div>
                    <div className={styles.wrap}>
                      <span
                        className={
                          activeContent === 2
                            ? `${styles.ttl}, ${styles.activeTtl}`
                            : styles.ttl
                        }
                        onClick={() => activeTab(2)}
                      >
                        Difficulty<span className={styles.slush}>/</span>
                      </span>
                    </div>
                    <div
                      className={
                        activeContent === 2
                          ? `${styles.list}, ${styles.activeList}`
                          : styles.list
                      }
                    >
                      {levels.data.map((lev) => {
                        return (
                          <div
                            className={`${
                              styles.item
                            }, lev-item ${lev.title.toLowerCase()} 
                                       ${
                                         isActive("level", lev.id)
                                           ? styles.active
                                           : ""
                                       }`}
                            key={lev.id}
                            onClick={() => hanldeChange("level", lev.id)}
                          >
                            {lev.title}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {tags && tags.data && (
                  <div>
                    <div className={styles.wrap}>
                      <span
                        className={
                          activeContent === 3
                            ? `${styles.ttl}, ${styles.activeTtl}`
                            : styles.ttl
                        }
                        onClick={() => activeTab(3)}
                      >
                        Tags
                      </span>
                    </div>

                    <div
                      className={
                        activeContent === 3
                          ? `${styles.list}, ${styles.activeList}`
                          : styles.list
                      }
                    >
                      {tags.data.map((tag) => {
                        return (
                          <div
                            className={`${styles.item}, tag-item ${
                              isActive("tag", tag.id) ? styles.active : ""
                            }`}
                            key={tag.id}
                            onClick={() => hanldeChange("tag", tag.id)}
                          >
                            {tag.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              {/* <div>
                     {commonData && Object.keys(commonData).map((key) => {
                        return (
                           <button onClick={activeFilterTab = key}>{key}</button>
                        )
                     })}
                  </div> */}
            </div>
          </div>
          <div className={styles.articleList}>
            {articles && articles.results.length ? (
              articles.results.map((itemData) => {
                return (
                  <div className={styles.item} key={itemData.id}>
                    <Article data={itemData} />
                  </div>
                );
              })
            ) : (
              <NotResult
                title={"Oops! Nothing yet"}
                teaser={"No articles purchased yet."}
              />
            )}
          </div>
          <div className={styles.paginarion}>
            {articles && articles.total ? (
              <Pagination
                data={{
                  total: articles.total,
                  limit: Number(router.query.limit),
                  page: Number(router.query.page),
                  hanldeChange,
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    commonData: state.commonDataState,
  };
};

export default connect(mapStateToProps, null)(Articles);
