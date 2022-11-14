import { fetchData } from "../../queries";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import ExploreArticles from "../../components/article/ExploreArticles";
import Moment from "react-moment";
import { connect } from "react-redux";
import { getItemById } from "../../helpers";
import SocialIcons from "../../components/commonComponents/CommonComponents";
import DarkSocialIcons from "../../components/commonComponents/DarkSocialIcons";

import { useRef, useState } from "react";
import styles from "../../styles/articles/Slug.module.scss";

export const getStaticPaths = async () => {
  const res = await fetchData("http://localhost:8080/api/articles");
  // const test = await fetchData("https://academy-admin.vercel.app/api/data/articles");

  let paths = [];

  if (res.data && res.data.results) {
    paths = res.data.results.map((items) => {
      return {
        params: { slug: items.slug },
      };
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug || undefined;
  const res = await fetchData(`http://localhost:8080/api/articles/${slug}`);

  return {
    props: { res },
  };
};

function Article({ levels, res }) {
  const router = useRouter();
  const data = res.data;
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  let level = null;
  if (levels && levels.data && data)
    level = getItemById(levels.data, data.level);

  return (
    <div>
      {data && (
        <div className={styles.articlePage}>
          <div className="container">
            <div className={styles.top}>
              <div className={styles.infoDiv}>
                <h1 className={styles.title}>{data.title}</h1>
                <div className={styles.info}>
                  {level && (
                    <div
                      className={`${
                        styles.item
                      } lev-item-simple ${level.title.toLowerCase()}`}
                    >
                      {level.title}
                    </div>
                  )}
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.1875 4.3125C5.88 4.3125 5.625 4.0575 5.625 3.75V1.5C5.625 1.1925 5.88 0.9375 6.1875 0.9375C6.495 0.9375 6.75 1.1925 6.75 1.5V3.75C6.75 4.0575 6.495 4.3125 6.1875 4.3125ZM11.8125 4.3125C11.505 4.3125 11.25 4.0575 11.25 3.75V1.5C11.25 1.1925 11.505 0.9375 11.8125 0.9375C12.12 0.9375 12.375 1.1925 12.375 1.5V3.75C12.375 4.0575 12.12 4.3125 11.8125 4.3125ZM8.9997 10.5675C9.3897 10.5675 9.6747 10.335 9.6747 9.9675C9.6747 9.5925 9.3897 9.375 8.9997 9.375C8.6097 9.375 8.3247 9.5925 8.3247 9.9675C8.3247 10.335 8.6097 10.5675 8.9997 10.5675ZM8.99955 12.7505C9.47175 12.7505 9.85455 12.4381 9.85455 12.0529C9.85455 11.6677 9.47175 11.3554 8.99955 11.3554C8.52735 11.3554 8.14455 11.6677 8.14455 12.0529C8.14455 12.4381 8.52735 12.7505 8.99955 12.7505Z"
                          fill="white"
                        />
                        <path
                          d="M14.6775 3.375C14.1825 3.0075 13.47 3.36 13.47 3.9825V4.0575C13.47 4.935 12.84 5.745 11.9625 5.835C10.95 5.94 10.095 5.145 10.095 4.155V3.375C10.095 2.9625 9.7575 2.625 9.345 2.625H8.655C8.2425 2.625 7.905 2.9625 7.905 3.375V4.155C7.905 4.7475 7.5975 5.2725 7.1325 5.565C7.065 5.61 6.99 5.6475 6.915 5.685C6.8475 5.7225 6.7725 5.7525 6.69 5.775C6.6 5.805 6.5025 5.8275 6.3975 5.835C6.2775 5.85 6.1575 5.85 6.0375 5.835C5.9325 5.8275 5.835 5.805 5.745 5.775C5.67 5.7525 5.595 5.7225 5.52 5.685C5.445 5.6475 5.37 5.61 5.3025 5.565C4.83 5.235 4.53 4.665 4.53 4.0575V3.9825C4.53 3.405 3.915 3.06 3.4275 3.3075C3.42 3.315 3.4125 3.315 3.405 3.3225C3.375 3.3375 3.3525 3.3525 3.3225 3.375C3.3 3.3975 3.27 3.4125 3.2475 3.435C3.0375 3.6 2.85 3.7875 2.6925 3.99C2.61 4.08 2.5425 4.1775 2.4825 4.275C2.475 4.2825 2.4675 4.29 2.46 4.305C2.3925 4.4025 2.3325 4.515 2.28 4.62C2.265 4.635 2.2575 4.6425 2.2575 4.6575C2.2125 4.7475 2.1675 4.8375 2.1375 4.935C2.115 4.9725 2.1075 5.0025 2.0925 5.04C2.0475 5.1525 2.0175 5.265 1.9875 5.3775C1.9575 5.4825 1.935 5.595 1.92 5.7075C1.905 5.79 1.8975 5.8725 1.89 5.9625C1.8825 6.0675 1.875 6.1725 1.875 6.2775V12.8475C1.875 14.865 3.51 16.5 5.5275 16.5H12.4725C14.49 16.5 16.125 14.865 16.125 12.8475V6.2775C16.125 5.085 15.555 4.0425 14.6775 3.375ZM9 13.6875C7.8375 13.6875 7.125 13.11 7.125 12.18C7.125 11.67 7.3875 11.2275 7.845 10.965C7.515 10.7325 7.2975 10.3875 7.2975 9.915C7.2975 8.94 8.0775 8.4375 9 8.4375C9.9225 8.4375 10.695 8.94 10.695 9.915C10.695 10.3875 10.485 10.7325 10.1475 10.965C10.6125 11.2275 10.875 11.67 10.875 12.18C10.875 13.11 10.155 13.6875 9 13.6875Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <Moment className={styles.value} format="Do/MMM/YYYY">
                      {data.created_at}
                    </Moment>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2990_938)">
                          <path
                            d="M10.9125 16.2525C14.13 15.405 16.5 12.48 16.5 9C16.5 4.86 13.17 1.5 9 1.5C3.9975 1.5 1.5 5.67 1.5 5.67M1.5 5.67V2.25M1.5 5.67H3.0075H4.83"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.5 9C1.5 13.14 4.86 16.5 9 16.5"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-dasharray="3 3"
                          />
                          <circle cx="9" cy="9" r="2" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2990_938">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <Moment className={styles.value} format="Do/MMM/YYYY">
                      {data.updated_at}
                    </Moment>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1.6875C4.9616 1.6875 1.6875 4.9616 1.6875 9C1.6875 13.0384 4.9616 16.3125 9 16.3125C13.0384 16.3125 16.3125 13.0384 16.3125 9C16.3125 4.9616 13.0384 1.6875 9 1.6875ZM12.375 10.125H9C8.85082 10.125 8.70774 10.0657 8.60225 9.96025C8.49676 9.85476 8.4375 9.71168 8.4375 9.5625V4.5C8.4375 4.35082 8.49676 4.20774 8.60225 4.10225C8.70774 3.99676 8.85082 3.9375 9 3.9375C9.14918 3.9375 9.29226 3.99676 9.39775 4.10225C9.50324 4.20774 9.5625 4.35082 9.5625 4.5V9H12.375C12.5242 9 12.6673 9.05926 12.7727 9.16475C12.8782 9.27024 12.9375 9.41332 12.9375 9.5625C12.9375 9.71168 12.8782 9.85476 12.7727 9.96025C12.6673 10.0657 12.5242 10.125 12.375 10.125Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span className={styles.value}>{data.duration} MIN</span>
                  </div>
                </div>
                <div className={styles.bottomSocialIcons}>
                  <div className={styles.lightIcons}>
                    <DarkSocialIcons />
                  </div>
                  <div className={styles.darkIcons}>
                    <SocialIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgBox}>
            <img className={styles.imgBoxImg} src="/img/article.png" alt="" />
          </div>
          <div className="container">
            <div className={styles.top}>
              <div className={styles.backBtn} onClick={() => router.back()}>
                <svg
                  className={styles.backSvg}
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-2.18557e-07 5.5C-2.28619e-07 5.26981 0.0914429 5.04905 0.254213 4.88628L4.38628 0.754214C4.72523 0.415263 5.27477 0.415263 5.61372 0.754214C5.95267 1.09316 5.95267 1.64271 5.61372 1.98166L2.09539 5.5L5.61372 9.01834C5.95268 9.35729 5.95268 9.90684 5.61372 10.2458C5.27477 10.5847 4.72523 10.5847 4.38628 10.2458L0.254213 6.11372C0.091443 5.95095 -2.08495e-07 5.73019 -2.18557e-07 5.5Z"
                    fill="#FF7152"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.113281 5.49925C0.113281 5.0199 0.50187 4.63131 0.981219 4.63131L12.438 4.63131C12.9173 4.63131 13.3059 5.0199 13.3059 5.49925C13.3059 5.9786 12.9173 6.36719 12.438 6.36719L0.981219 6.36719C0.50187 6.36719 0.113281 5.9786 0.113281 5.49925Z"
                    fill="#FF7152"
                  />
                </svg>
                Back Topics
              </div>
            </div>
          </div>
          <div className={`${styles.content} textStyles container`}>
            {parse(data.description)}
          </div>
          <div className={styles.bottomMenu}>
            <div className={styles.bottomSocialIcons}>
              <div className={styles.lightIcons}>
                <DarkSocialIcons />
              </div>
              <div className={styles.darkIcons}>
                <SocialIcons />
              </div>
            </div>
            <div className={styles.categories}>
              <div className="dark-grey-btn">
                <span>History</span>
              </div>
              <div className="dark-grey-btn">
                <span>Mining</span>
              </div>
              <div className="dark-grey-btn">
                <span>Trading</span>
              </div>
            </div>
          </div>
          <div className={styles.carouselContainer}>
            <ExploreArticles category={data.category} id={data.id} />
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    levels: state.commonDataState.levels,
  };
};

export default connect(mapStateToProps, null)(Article);
