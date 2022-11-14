import styles from "../../styles/introductionScss/Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles.getStarted}>
      <div className="textStyles">
        <div className="container">
          <h1>Intoduction</h1>
        </div>
        <div className={styles.Div}>
          <div>
            <p>
              Our goal is to educate the masses on the exciting potential of
              blockchain and cryptocurrency technology. Here, you'll find
              several multilingual articles covering every aspect of blockchain
              and cryptocurrency technology - ranging from computer security to
              economics.
            </p>
            <p>
              {" "}
              We know that it can be daunting to learn something new. So, this
              guide will give you a gentle introduction to some of the key
              concepts that will help you kick-start your journey into the
              revolutionary world of blockchain technology.
            </p>
          </div>
        </div>
        <div className="container">
          <div className={styles.gradient}>
            <div className="aligning"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
