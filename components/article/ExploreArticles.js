import useFetch from "../../hooks/useFetch";
import Article from "./Article";
import styles from "../../styles/articles/ExploreArticles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ExploreArticles({ id, category }) {
  // const [slideCount, setSlideCount] = usestate(3);
  // const [spaceBetween, setSpaceBetween] = usestate("30px");

  const { data } = useFetch(
    `http://localhost:8080/api/articles?id_not=${id}&category=${category}&limit=3`
  );
  // console.log(data);
  return (
    <div className={styles.exploreArticles}>
      <div className="container">
        <h2 className={styles.title}>Explore more</h2>
      </div>

      <div>
        {data && data.results.length ? (
          <Swiper
            // key={id + "hash"}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1023: {
                slidesPerView: 3,
              },
            }}
          >
            {data.results.map((itemData) => {
              return (
                <SwiperSlide key={itemData.id}>
                  <div className={styles.item}>
                    <Article data={itemData} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
}

export default ExploreArticles;
