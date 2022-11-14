
import styles from "../../styles/home/FeaturesBanner.module.scss";
import CornerDecor from "../courses/border/CornerDecor";

function FeaturesBanner({ data }) {
  
  return (
    <div className={styles.itemsBanner}>
      <div className="textStyles">
        <div className={`${styles.item__wrap}`}>
          <CornerDecor />
          <div className={styles.item}>
            <svg
              className={styles.svg__dark}
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.6668 34.6654C58.6668 44.1587 56.2935 45.9187 46.8268 45.9187H17.1735C7.70683 45.9187 5.3335 43.5454 5.3335 34.0787V17.172C5.3335 7.70536 7.70683 5.33203 17.1735 5.33203H32.0002"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 45.9199V58.6666"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.3335 34.668H58.6668"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 58.668H44"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M47.1481 5.91647L40.5255 10.2399C38.4023 11.626 38.4023 14.7283 40.5255 16.1144L47.1481 20.4378C48.3362 21.2189 50.2944 21.2189 51.4825 20.4378L58.0722 16.1144C60.1844 14.7283 60.1844 11.637 58.0722 10.2509L51.4825 5.92747C50.2944 5.13539 48.3362 5.13539 47.1481 5.91647Z"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.2854 17.5234L42.2744 22.6829C42.2744 24.0801 43.3525 25.5762 44.6726 26.0162L48.182 27.1824C48.787 27.3804 49.7881 27.3804 50.4042 27.1824L53.9135 26.0162C55.2336 25.5762 56.3117 24.0801 56.3117 22.6829V17.5784"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M59.6343 19.6338V13.0332"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={styles.svg__light}
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.6668 34.6654C58.6668 44.1587 56.2935 45.9187 46.8268 45.9187H17.1735C7.70683 45.9187 5.3335 43.5454 5.3335 34.0787V17.172C5.3335 7.70536 7.70683 5.33203 17.1735 5.33203H32.0002"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 45.9219V58.6685"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.3335 34.668H58.6668"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 58.668H44"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M47.1481 5.91647L40.5255 10.2399C38.4023 11.626 38.4023 14.7283 40.5255 16.1144L47.1481 20.4378C48.3362 21.2189 50.2944 21.2189 51.4825 20.4378L58.0722 16.1144C60.1844 14.7283 60.1844 11.637 58.0722 10.2509L51.4825 5.92747C50.2944 5.13539 48.3362 5.13539 47.1481 5.91647Z"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.2854 17.5234L42.2744 22.6829C42.2744 24.0801 43.3525 25.5762 44.6726 26.0162L48.182 27.1824C48.787 27.3804 49.7881 27.3804 50.4042 27.1824L53.9135 26.0162C55.2336 25.5762 56.3117 24.0801 56.3117 22.6829V17.5784"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M59.6343 19.6319V13.0312"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.text}>
              <h4 className={styles.title}>50K+ Online Courses</h4>
              <h5 className={styles.teaser}>
                Enjoy lifetime access to courses
              </h5>
            </div>
          </div>
          <div className={styles.item}>
            <svg
              className={styles.svg__dark}
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.6666 24.0006C50.6666 27.8673 49.5199 31.414 47.5466 34.374C44.6666 38.6407 40.1066 41.654 34.7999 42.4273C33.8933 42.5873 32.9599 42.6673 31.9999 42.6673C31.0399 42.6673 30.1066 42.5873 29.1999 42.4273C23.8933 41.654 19.3333 38.6407 16.4533 34.374C14.4799 31.414 13.3333 27.8673 13.3333 24.0006C13.3333 13.6807 21.6799 5.33398 31.9999 5.33398C42.3199 5.33398 50.6666 13.6807 50.6666 24.0006Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M56.6666 49.2537L52.2666 50.2937C51.2799 50.5337 50.5066 51.2804 50.2932 52.2671L49.3599 56.1871C48.8532 58.3204 46.1332 58.9604 44.7199 57.2804L31.9999 42.6671L19.2799 57.307C17.8666 58.987 15.1466 58.347 14.6399 56.2137L13.7066 52.2937C13.4666 51.307 12.6932 50.5337 11.7332 50.3204L7.33322 49.2804C5.30655 48.8004 4.58655 46.267 6.05322 44.8004L16.4532 34.4004C19.3332 38.6671 23.8932 41.6804 29.1999 42.4538C30.1066 42.6138 31.0399 42.6938 31.9999 42.6938C32.9599 42.6938 33.8932 42.6138 34.7999 42.4538C40.1066 41.6804 44.6666 38.6671 47.5466 34.4004L57.9466 44.8004C59.4132 46.2404 58.6932 48.7737 56.6666 49.2537Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.5468 15.946L35.1201 19.0927C35.3334 19.5193 35.8934 19.946 36.4001 20.026L39.2534 20.506C41.0668 20.7993 41.4934 22.1327 40.1868 23.4393L37.9734 25.6526C37.6001 26.026 37.3868 26.746 37.5201 27.2793L38.1601 30.026C38.6668 32.186 37.5201 33.0393 35.6001 31.8926L32.9334 30.3193C32.4534 30.026 31.6534 30.026 31.1734 30.3193L28.5068 31.8926C26.5868 33.0126 25.4401 32.186 25.9468 30.026L26.5868 27.2793C26.6934 26.7727 26.5068 26.026 26.1334 25.6526L23.9201 23.4393C22.6134 22.1327 23.0401 20.826 24.8534 20.506L27.7068 20.026C28.1868 19.946 28.7468 19.5193 28.9601 19.0927L30.5334 15.946C31.3068 14.2393 32.6934 14.2393 33.5468 15.946Z"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={styles.svg__light}
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.6666 23.9987C50.6666 27.8654 49.5199 31.4121 47.5466 34.3721C44.6666 38.6387 40.1066 41.652 34.7999 42.4254C33.8933 42.5854 32.9599 42.6654 31.9999 42.6654C31.0399 42.6654 30.1066 42.5854 29.1999 42.4254C23.8933 41.652 19.3333 38.6387 16.4533 34.3721C14.4799 31.4121 13.3333 27.8654 13.3333 23.9987C13.3333 13.6787 21.6799 5.33203 31.9999 5.33203C42.3199 5.33203 50.6666 13.6787 50.6666 23.9987Z"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M56.6666 49.2518L52.2666 50.2917C51.2799 50.5317 50.5066 51.2785 50.2932 52.2651L49.3599 56.1851C48.8532 58.3185 46.1332 58.9585 44.7199 57.2785L31.9999 42.6651L19.2799 57.3051C17.8666 58.9851 15.1466 58.3451 14.6399 56.2118L13.7066 52.2917C13.4666 51.3051 12.6932 50.5318 11.7332 50.3184L7.33322 49.2785C5.30655 48.7985 4.58655 46.2651 6.05322 44.7984L16.4532 34.3984C19.3332 38.6651 23.8932 41.6785 29.1999 42.4518C30.1066 42.6118 31.0399 42.6918 31.9999 42.6918C32.9599 42.6918 33.8932 42.6118 34.7999 42.4518C40.1066 41.6785 44.6666 38.6651 47.5466 34.3984L57.9466 44.7984C59.4132 46.2384 58.6932 48.7718 56.6666 49.2518Z"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.5468 15.948L35.1201 19.0946C35.3334 19.5213 35.8934 19.948 36.4001 20.028L39.2534 20.5079C41.0668 20.8013 41.4934 22.1346 40.1868 23.4413L37.9734 25.6546C37.6001 26.0279 37.3868 26.748 37.5201 27.2813L38.1601 30.028C38.6668 32.188 37.5201 33.0412 35.6001 31.8946L32.9334 30.3213C32.4534 30.0279 31.6534 30.0279 31.1734 30.3213L28.5068 31.8946C26.5868 33.0146 25.4401 32.188 25.9468 30.028L26.5868 27.2813C26.6934 26.7746 26.5068 26.0279 26.1334 25.6546L23.9201 23.4413C22.6134 22.1346 23.0401 20.8279 24.8534 20.5079L27.7068 20.028C28.1868 19.948 28.7468 19.5213 28.9601 19.0946L30.5334 15.948C31.3068 14.2413 32.6934 14.2413 33.5468 15.948Z"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.text}>
              <h4 className={styles.title}>Teacher directory</h4>
              <h5 className={styles.teaser}>Learn from industry experts</h5>
            </div>
          </div>
          <div className={styles.item}>
            <svg
              className={styles.svg__dark}
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3333 5.33398V13.334"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.6667 5.33398V13.334"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.3335 24.2402H54.6668"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M58.6666 50.6667C58.6666 52.6667 58.1066 54.56 57.1199 56.16C55.2799 59.2533 51.8933 61.3333 47.9999 61.3333C45.3066 61.3333 42.8533 60.3467 40.9866 58.6667C40.1599 57.9733 39.4399 57.12 38.8799 56.16C37.8933 54.56 37.3333 52.6667 37.3333 50.6667C37.3333 44.7733 42.1066 40 47.9999 40C51.1999 40 54.0533 41.4133 55.9999 43.6266C57.6533 45.52 58.6666 47.9733 58.6666 50.6667Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M43.8398 50.6661L46.4798 53.3061L52.1598 48.0527"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M56 22.6673V43.6273C54.0533 41.4139 51.2 40.0006 48 40.0006C42.1067 40.0006 37.3333 44.774 37.3333 50.6673C37.3333 52.6673 37.8933 54.5606 38.88 56.1606C39.44 57.1206 40.16 57.974 40.9867 58.6673H21.3333C12 58.6673 8 53.334 8 45.334V22.6673C8 14.6673 12 9.33398 21.3333 9.33398H42.6667C52 9.33398 56 14.6673 56 22.6673Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.9879 36.5326H32.0118"
                stroke="#FF7152"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.1182 36.5326H22.1422"
                stroke="#FF7152"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.1182 44.5326H22.1422"
                stroke="#FF7152"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={styles.svg__light}
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3333 5.33203V13.332"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.6667 5.33203V13.332"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.3335 24.2422H54.6668"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M58.6666 50.6667C58.6666 52.6667 58.1066 54.56 57.1199 56.16C55.2799 59.2533 51.8933 61.3333 47.9999 61.3333C45.3066 61.3333 42.8533 60.3467 40.9866 58.6667C40.1599 57.9733 39.4399 57.12 38.8799 56.16C37.8933 54.56 37.3333 52.6667 37.3333 50.6667C37.3333 44.7733 42.1066 40 47.9999 40C51.1999 40 54.0533 41.4133 55.9999 43.6266C57.6533 45.52 58.6666 47.9733 58.6666 50.6667Z"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M43.8398 50.668L46.4798 53.308L52.1598 48.0547"
                stroke="#FF7152"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M56 22.6654V43.6253C54.0533 41.412 51.2 39.9987 48 39.9987C42.1067 39.9987 37.3333 44.772 37.3333 50.6654C37.3333 52.6654 37.8933 54.5587 38.88 56.1587C39.44 57.1187 40.16 57.972 40.9867 58.6654H21.3333C12 58.6654 8 53.332 8 45.332V22.6654C8 14.6654 12 9.33203 21.3333 9.33203H42.6667C52 9.33203 56 14.6654 56 22.6654Z"
                stroke="#00050F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.9879 36.5326H32.0118"
                stroke="#FF7152"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.1182 36.5326H22.1422"
                stroke="#FF7152"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.1182 44.5326H22.1422"
                stroke="#FF7152"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.text}>
              <h4 className={styles.title}>50K+ Online Courses</h4>
              <h5 className={styles.teaser}>
                Enjoy lifetime access to courses
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesBanner;
