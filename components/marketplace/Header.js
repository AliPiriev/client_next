import styles from "../../styles/marketplace/Header.module.scss";

const Header = (props) => {

  return (
    <div id={styles} className={styles.header}>
    <img
        className={`${styles.background} ${styles.bg}`}
        src="img/marketplace/background1.png"
        />
        <img
        className={`${styles.background} ${styles.bgL}`}
        src="img/marketplace/background2.png"
        />
        <div className="container textStyles">
          <div className={styles.content}>
            <h1>Join the Millions for better learning</h1>
          </div>
        </div>
      
    </div>
  );
};

export default Header;
