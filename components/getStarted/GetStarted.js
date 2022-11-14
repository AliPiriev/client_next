import Link from "next/link";
import styles from "../../styles/getStartedScss/GetStarted.module.scss";
import CornerDecor from "../courses/border/CornerDecor";

const GetStarted = () => {
 
  return (
    <div className={styles.getStarted}>
      <div className="container">
        <div className="container textStyles">
          <h1>Intoduction</h1>
          <div className={styles.borderDiv}>
            <div className="cornerBorderDiv">
              <CornerDecor />
              <div className="cornerBorder">
                <div className="textStyles">
                  <p>
                    Our goal is to educate the masses on the exciting potential
                    of blockchain and cryptocurrency technology. Here, you'll
                    find several multilingual articles covering every aspect of
                    blockchain and cryptocurrency technology - ranging from
                    computer security to economics.
                  </p>
                  <p>
                    {" "}
                    We know that it can be daunting to learn something new. So,
                    this guide will give you a gentle introduction to some of
                    the key concepts that will help you kick-start your journey
                    into the revolutionary world of blockchain technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aligning">
            <b>Let’s get started</b>
            <h3>What is a cryptocurrency?</h3>
            <p>
              A cryptocurrency is basically like a sort of digital cash. You can
              use it to pay for that new T-shirt you've been eyeing, pay for a
              night out with your friends, or even pay for your travel and
              accommodation when you go on holiday. Since a cryptocurrency is
              digital, it can be sent to friends and family across the globe.
            </p>
            <p>
              However, the way cryptocurrency is transferred worldwide is not
              like any of the traditional methods we know, like PayPal. It's a
              lot more interesting!
            </p>
            <p>
              What separates cryptocurrency from traditional payment gateways is
              that no single organization owns the cryptocurrency payment
              gateway. So, when you want to spend funds or send money, you don't
              need to ask an organization to transfer it for you on your behalf.
              Instead, you, your friends, and thousands of others can act as
              your own bank by running some free software. When you run this
              software, your computer connects directly with other people's
              computers. So, the need for a middleman is completely removed.
            </p>
            <p>
              You don't need to sign up on a website or open an account to get
              started using a cryptocurrency. Instead, you can just download one
              of the many applications available on your smartphone. You can
              then start sending and receiving cryptocurrency almost
              immediately.
            </p>
            <h3>Why is it called a cryptocurrency?</h3>
            <p>
              A cryptocurrency is a combination of cryptography and currency.
              This is why it is called a cryptocurrency. It's a revolutionary
              new form of digital cash that uses advanced math to secure your
              funds so that nobody else can spend them.
            </p>
            <p>
              It isn't really necessary to understand all of this since the
              applications that you download will handle all of the complexities
              in the background. You won't even know what is happening in the
              underlying layer of these applications.
            </p>
            <p>
              If you do want to learn more about the cryptography side of
              cryptocurrency, then take a look at some of our articles:
            </p>
            <Link href="/articles">
              <a className={styles.getLink}>Articles</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
