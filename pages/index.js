import { fetchData } from "../queries";
import Articles from "../components/article/Articles";
import ArticlesColumn from "../components/article/ArticlesColumn";
import IntroBox from "../components/home/IntroBox";
import FeaturesBanner from "../components/home/FeaturesBanner";
import ChallangeBanner from "../components/home/ChallangeBanner";
import Marquee from "../components/home/Marquee";
import EmailBanner from "../components/home/EmailBanner";
import GlossaryInner from "../components/glossary/GlossaryInner";

// ***
// import BgImage from "../components/UI/BgImage";
// import Glossaries from "../components/glossary/Glossaries";
// import ItemsBanner from "../components/page-header-beta/ItemsBanner";
// ***
export const getStaticProps = async () => {
  // glossaries
  const { data: glossaries } = await fetchData(
    "https://academy-admin.vercel.app/api/data/glossaries?limit=3"
  );

  let glossaryShort = glossaries.result.splice(0, 2);
   //chunk data for my glossery that is mapped on mainpage\\

  // end glossaries
  // start articles
  const { data: releases } = await fetchData(
    "https://academy-admin.vercel.app/api/data/articles?category=62fb6be2ab723fa8b038fce7&limit=3"
  );
  const { data: blockchain } = await fetchData(
    "https://academy-admin.vercel.app/api/data/articles?category=62fb6bf2ab723fa8b038fcef&limit=3"
  );

  const { data: featured } = await fetchData(
    "https://academy-admin.vercel.app/api/data/articles?category=62fb6bd0ab723fa8b038fcdf&limit=3"
  );

  const { data: security } = await fetchData(
    "https://academy-admin.vercel.app/api/data/articles?category=62fb6bb4ab723fa8b038fcdb&limit=3"
  );

  const { data: essentials } = await fetchData(
    "https://academy-admin.vercel.app/api/data/articles?category=62fb6bf9ab723fa8b038fcf3&limit=3"
  );
  // end articles

  // mtavari routi
  ("https://academy-admin.vercel.app/api/data/");

  //kategoriit articlebis wamogeba
  const { data: test } = await fetchData(
    "https://academy-admin.vercel.app/api/data/category"
  );

  //yvela kategoriis wamogeba
  const { data: category } = await fetchData(
    "https://academy-admin.vercel.app/api/data/category"
  );

  // erti artikli
  const { data: single } = await fetchData(
    "https://academy-admin.vercel.app/api/data/articles/632053eadb0f9fe68fc5a029"
  );

  const { data: glossary } = await fetchData(
    "https://academy-admin.vercel.app/api/data/glossaries"
  );

  return {
    props: {
      // home_contents,
      glossaries,
      // glossariesTotal,
      releases,
      blockchain,
      featured,
      // test,
      category,
      // single,
      security,
      glossaryShort,
      essentials,
    },
  };
};

function Home({
  glossaries,
  releases,
  blockchain,
  category,
  featured,
  security,
  essentials,
  glossaryShort,
}) {
  // console.log(essentials)
  // console.log(security)
  // console.log(releases)
  // console.log(featured)
  // console.log(home_contents)
  // console.log(blockchain);
  // console.log(category);
  // console.log(single);
  // console.log(glossaryShort)
  // console.log(chunk)
  // console.log(glossaries)
  // console.log(glossary)

  return (
    <div className="home-page">
      <img
        className="main-bg-img default-bg"
        src="img/mainPage/background.png"
        alt="background"
      />
      <div className="container">
        <IntroBox />
        <FeaturesBanner />
        {featured && featured.docs.length ? (
          <ArticlesColumn type={"column"} data={featured} title="Featured" />
        ) : (
          ""
        )}
      </div>
      <div className="carouselContainer">
        {releases && releases.docs.length ? (
          <Articles type={"row"} data={releases} title="Latest Releases" />
        ) : (
          ""
        )}
      </div>

      {glossaries && glossaries.result?.length ? (
        <GlossaryInner data={glossaryShort} />
      ) : (
        "GAMOAJVI SHENI DEDA MOVTYAN"
      )}
      <div className="carouselContainer">
        {blockchain && blockchain.docs.length ? (
          <Articles type={"column"} data={blockchain} title="Blockchain" />
        ) : (
          ""
        )}
      </div>
      <ChallangeBanner />
      <div className="container">
        {essentials && essentials.docs.length ? (
          <ArticlesColumn
            type={"column"}
            data={essentials}
            title="Essentials"
          />
        ) : (
          ""
        )}
      </div>
      <div className="carouselContainer">
        {security && security.docs.length ? (
          <Articles type={"row"} data={security} title="Security" />
        ) : (
          ""
        )}
      </div>
      <Marquee />
      <EmailBanner />
    </div>
  );
}

export default Home;
