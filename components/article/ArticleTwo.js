import Link from "next/link";
import { connect } from "react-redux";
import { getItemById } from "../../helpers";
import CornerDecor from "../courses/border/CornerDecor";
import styles from "../../styles/articles/Article.module.scss";

function ArticleTwo({ data }) {
  return (
    <Link href={`/articles/${data.slug}`}>
      <a className={styles.article}>
        <div className={styles.cornerBorderDiv}>
          <CornerDecor />
          <div className={styles.cornerBorder}>
            <div className={styles.imgBoxTwo}>
              <img
                src="/img/article/article1.png"
                alt="articleImage"
                className={styles.imgAbsolute}
              />
              <div className={styles.pins}>
                {data.tag?.length
                  ? data.tag.map((tag) => {
                      return (
                        <div className="white-cat-item" key={tag._id + "hash"}>
                          {tag.title}
                        </div>
                      );
                    })
                  : ""}
                <div className="white-cat-item">
                  {data.category._id ? data.category.title : ""}
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomTtl}>
                <h3 className={styles.ttlTwo}>{data.title}</h3>
              </div>
              <div className="bottomLevel">
                {data.level._id ? (
                  <div
                    className={`itemDot level ${data.level.title.toLowerCase()}`}
                  >
                    {data.level.title}
                  </div>
                ) : (
                  ""
                )}
                <div className="itemDot">English</div>
                <div className="itemDot">8 min</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    levels: state.commonDataState.levels,
    tags: state.commonDataState.tags,
    categories: state.commonDataState.categories,
  };
};

export default connect(mapStateToProps, null)(ArticleTwo);
