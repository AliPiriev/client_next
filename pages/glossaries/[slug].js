import { fetchData } from "../../queries";
import { useRouter } from 'next/router'
import styles from "../../styles/Glossaries/GlossariesInner.module.scss";
import Moment from "react-moment";
import CornerDecor from "../../components/courses/border/CornerDecor";


export const getStaticPaths = async () => {
  const res = await fetchData("https://academy-admin.vercel.app/api/data/glossaries");
  
  let paths = [];

  if (res.data.result) {
    paths = res.data.result.map((item) => {
      console.log(item)
      return {
        params: {
          slug: item.slug,
        },
      };
    });
  }

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async ({ params }) => {
  console.log(params);

  const slug = params.slug || undefined;
  const res = await fetchData(
    `https://academy-admin.vercel.app/api/data/glossaries/${slug}`
  );
  const featured = await fetchData(
    `https://academy-admin.vercel.app/api/data/glossaries`
  )


  return {
    props: {
      res,
      featured
    },
  };
};

function Glossary({ res, featured }) {
  const data = res.data.result || null;
  const featuredData = featured.data.result
  const router = useRouter();
  
  let chunk = featuredData.splice(0, 3);

  return (
    <div className={styles.glossary__page}>
      <img
        className={`${styles.background} ${styles.bg}`}
        src="/img/glossaries/innerbg1.png"
        alt="background"
      />
      <img
        className={`${styles.background} ${styles.bgL}`}
        src="/img/glossaries/innerbg1Light.png"
        alt="background"
      />
      {data ? (
        <div key={data._id} className="container textStyles">
          <div className={styles.backBtn} onClick={() => router.back()}>
            <svg
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
                d="M0.113281 5.50023C0.113281 5.02088 0.50187 4.63229 0.981219 4.63229L12.438 4.63229C12.9173 4.63229 13.3059 5.02088 13.3059 5.50023C13.3059 5.97957 12.9173 6.36816 12.438 6.36816L0.981219 6.36816C0.50187 6.36816 0.113281 5.97958 0.113281 5.50023Z"
                fill="#FF7152"
              />
            </svg>
            <p>Back to Glossaries</p>
          </div>
          <div className={styles.inner}>
            <h3 className={styles.title}>{data.title}</h3>
            <div className={styles.item__outer}>
              <div className={styles.item}>
                <div className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 2V5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.5 9.08984H20.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.6937 13.7002H15.7027" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.6937 16.7002H15.7027" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.9945 13.7002H12.0035" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.9945 16.7002H12.0035" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.29529 13.7002H8.30427" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.29529 16.7002H8.30427" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <Moment className={styles.value} format="Do/MMM/YYYY">
                  {data.createdAt}
                </Moment>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <Moment className={styles.value} format="Do/MMM/YYYY">
                  {data.updatedAt}
                </Moment>
              </div>
            </div>
          </div>
          <div className={`${styles.content} ${styles.text}`}>
            {data.teaser}
          </div>
          <div className={styles.explore__more}>
            <h3>Explore More</h3>
            <div className={styles.item__wrap}>
              {chunk.map((item) => {
                return (
                  <div key={item._id} className={styles.itemB}>
                    <CornerDecor />
                    <div className={styles.innerB}>
                      <div className={styles.item__text}>
                        <h4>{item?.title}</h4>
                        <p>{item?.teaser}</p>
                        <div className={styles.fullBtn}>Full Defination</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Glossary;
