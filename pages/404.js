import styles from "../styles/notfound.module.scss";
import Link from "next/link";

function NotFound() {
  return (
    <div className="not-found">
      <div className={styles.outer}>
        <img className={styles.background} src="img/notFound/background1.png" />
        <div className={styles.inner}>
            <p className={styles.title}>Error 404</p>
            <p className={styles.teaser}>Your browser sent a request that this server could not understand</p>
            <Link href='/'>
               <div className={styles.btn}>Go Back To Main Page</div>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
