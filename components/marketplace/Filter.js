import { useState, useEffect } from "react";
import styles from "../../styles/marketplace/Filter.module.scss";
import { useSelector } from "react-redux";
import Vector from "../../public/img/marketplace/Vector.svg";
import StrokeSvg from "../../public/img/marketplace/Vector (Stroke).svg";
import CornerDecor from "../UI/cornerDecor/CornerDecor";

const Filter = (props) => {
  const filterArr = useSelector((state) => state.utilsState.filterArr);

  const [filter, setFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const showFIlter = () => {
    setFilter(!filter);
  };
  const handleResize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setFilter(false)
      setIsMobile(false);
    }
  };
  
  useEffect(() => {
    if (window.innerWidth < 767) {
      setIsMobile(true); 
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.filterMainWrapp} style={{minHeight: isMobile && filter ? '1060px' : '80px'}}>
      <CornerDecor />
      <div className={styles.FilterButton} onClick={showFIlter}>
        <Vector />
        <p>Filter</p>
        <div className={styles.svgWrapp} style={{transform: filter ? 'rotate(180deg)': 'rotate(0)'}}>
          <StrokeSvg fill={{fill: filter ? '#FF7152' : 'white'}}/>
        </div>
      </div>
      <div className={styles.filterWrapp} >
        <div
          className={styles.filter}>
          {filterArr.map((item) => {
            return (
              <div key={item.id} className={styles.item}>
                <h4>{item.title}</h4>
                {item.items.map((subItem) => {
                  return (
                    <div key={subItem.id + "hash"} className={styles.checkBox}>
                      <button type="button">
                        <label className={styles.checkBox__inner}>
                          <p className={styles.label}>
                            {subItem.title}
                            <span>{subItem.amount}</span>
                          </p>
                          <input type="checkbox" />
                          <span className={styles.mark}></span>
                        </label>
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className={styles.resetBtn}>
            <p className={styles.btnTxt}>Reset Filter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
