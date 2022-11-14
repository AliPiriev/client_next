import styles from '../../styles/pagination/Pagination.module.scss';
function PaginationLight({ data }) {
    const { total, limit, page, hanldeChange } = data;
    const count =  Math.ceil(Number(total) / limit);
    let buttons = [];
    for (let i = 1; i <= count; i++) {
       buttons.push(
          <button className={`${styles.item} ${page == i ? styles.active : ''}`} key={i}
             onClick={() => hanldeChange('page', i)}>{i}</button>
       )
    }
 
    return (
       <div className={styles.pagination}>
          <button className={`${styles.item} ${styles.prev} ${page === 1 ? styles.disabled : ''}`}
                disabled={page === 1}
                onClick={() => hanldeChange('page', page - 1)}></button>
          { buttons }
          <button className={`${styles.item} ${styles.next} ${count === page ? styles.disabled : ''}`}
                disabled={count === page }
                onClick={() => hanldeChange('page', page + 1)}></button>
       </div>
    );
 }
 
 export default PaginationLight;