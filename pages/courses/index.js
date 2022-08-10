import Accordion from "../../components/courses/Accordion";
import Tabs from "../../components/courses/Tabs";
import styles from "../../styles/clientScss/index.module.scss";

function Courses () {
    return (
      <div className={styles.courses}>
        <div className={styles.container}>
            <Accordion />
            <Tabs />
        </div>
      </div>
    );
  }
  export default Courses;