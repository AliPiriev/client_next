import styles from "../../styles/marketplace/Product.module.scss";
import CornerDecor from "../UI/cornerDecor/CornerDecor";
import { useSelector } from "react-redux";


const Product = () => {
  const filterData = useSelector((state) => state.utilsState.filterData);
  
  return (
  <div className={styles.products}>
    {filterData.map((item) => {
      return (
        <div key={item.id} className={styles.product}>
          <CornerDecor />
          <div className={styles.img}>
            <img src={item.img} />
          </div>
          <div className={styles.text}>
            <p>{item.title}</p>
            <h4>{item.price}</h4>
          </div>
          <div className={styles.info}>
            <div className={styles.info__item}>
              <div className={styles.div1}></div>
              <p>{item.level}</p>
            </div>
            <div className={styles.info__item}>
            <div className={styles.div2}></div>
              <p>{item.lang}</p>
            </div>
            <div className={styles.info__item}>
            <div className={styles.div2}></div>
              <p>{item.time}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  );
};

export default Product;
