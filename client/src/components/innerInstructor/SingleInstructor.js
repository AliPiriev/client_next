import styles from "./Instructors.module.scss"; 

function SingleInstructor({item}) {
   return (
      <div className={styles.instructor_list}>
         <img className={styles.images} src={item.img} alt="" />
         <div className={styles.text}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.Names}>{item.name}</p>
         </div>
      </div>
   )
}

export default SingleInstructor;