import Link from "next/link";
import NotResult from "../../components/UI/NotResult";
import { Link as ScrollLink, Element } from "react-scroll";
import styles from "../../styles/Glossaries/GlossariesIndex.module.scss";
import CornerDecor from "../courses/border/CornerDecor";

const Glossaries = ({ res }) => {
  const glossaries = res?.data?.result || null;
  const isPending = res?.isPending;
  const alphabet = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let group = null;

  if (!isPending && glossaries && glossaries?.length) {
    group = alphabet.map((character) => {
      const groupedByLetter = glossaries.filter(
        (item) => item.character === character
      );

      if (groupedByLetter.length) {
        return (
          <Element
            className={`${styles.item} ${"textStyles"}`}
            key={character}
            name={character}
          >
            <div className={styles.value}>{character}</div>
            <div className={styles.contentList}>
              {groupedByLetter.map((groupedItem, index) => {
                return (
                  <Link
                    href={"glossaries/" + groupedItem.slug}
                    key={groupedItem._id}
                  >
                    <div className={styles.listItem}>
                      <a className={styles.content}>
                        <h3>{groupedItem.title}</h3>
                        <p>{groupedItem.teaser}</p>
                      </a>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Element>
        );
      }
    });
  }

  return (
    <div className={styles.glossariesPage}>
      {!isPending && glossaries?.length ? (
        <div className={styles.inner}>
          <div style={{ position: "relative" }}>
            <img
              className={styles.background}
              src="img/glossaries/background1.png"
              alt="background"
            />
            <img
              className={styles.backgroundL}
              src="img/glossaries/background1Light.png"
              alt="background"
            />
            <div className="container textStyles">
              <div className={styles.top}>
                <h1 className={styles.title}>The Words of Crypto</h1>
                <h4 className={styles.teaser}>
                  Time to understand the language
                </h4>
              </div>
            </div>
            <div className={styles.search}>
              <div className={styles.cornerDecor}>
                <CornerDecor />
              </div>
              <div className={styles.letters}>
                {alphabet.map((character) => {
                  return (
                    <ScrollLink
                      to={character}
                      spy={true}
                      smooth={true}
                      duration={300}
                      className={styles.item}
                      key={character}
                    >
                      {character}
                    </ScrollLink>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`${styles.glossaryList} ${"container"}`}>{group}</div>
        </div>
      ) : isPending ? (
        <div className={styles.loading}>Loading ...</div>
      ) : (
        <NotResult
          title={"Oops! Nothing yet"}
          teaser={"No glossaries purchased yet."}
        />
      )}
    </div>
  );
};

export default Glossaries;
