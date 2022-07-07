import useFetch from '../hooks/useFetch';
import Articles from "../components/article/Articles";
import BgImage from "../components/UI/BgImage";
import IntroBox from "../components/home/IntroBox";
import Glossaries from '../components/glossary/Glossaries';
import FeaturesBanner from '../components/home/FeaturesBanner';
import SmallBannerBox from '../components/home/SmallBannerBox';

function Home() {
   const intro = {
      title: 'World-class education for everyone. <span>Together we learn.</span>',
      teaser: "Build and develop your skills with online educational content from the world's top institutions and organizations."
   }


   const bannerData = [{
      title: 'title 1',
      teaser: "teaser 1",
      img: 'jsdhkjads',
      button_link: 'www.rekjre.com',
      butten_tex: 'msdhajsda'
   },
   {
      title: 'title 222',
      teaser: "teaser 222222",
      img: 'jsdhkjads',
      button_link: 'www.rekjre.com',
      butten_tex: 'msdhajsda'
   },
   {
      title: 'title 222',
      teaser: "teaser 222222",
      img: 'jsdhkjads',
      button_link: 'www.rekjre.com',
      butten_tex: 'msdhajsda'
   }]




   const { data: home_contents } = useFetch('http://localhost:8080/api/home-content');
   const { data: glossaries } = useFetch('http://localhost:8080/api/glossaries?limit=3');
   const { data: glossariesTotal } = useFetch('http://localhost:8080/api/glossaries-total');
   const { data: releases } = useFetch('http://localhost:8080/api/articles?category=4&limit=3');
   const { data: blockchain } = useFetch('http://localhost:8080/api/articles?category=6&limit=3');


   return (
      <div className="home-page">
         <BgImage id={1} />
         <div className="container">
            {home_contents && <IntroBox data={home_contents} />}
            {home_contents && <FeaturesBanner data={home_contents} />}
            {releases && releases.results.length ? <Articles data={releases} title='releases' /> : ''}
            {blockchain && blockchain.results.length ? <Articles data={blockchain} title='blockchain' /> : ''}
            {glossaries && glossaries.length ? <Glossaries data={glossaries}
               title={`${glossariesTotal ? glossariesTotal[0]['count(*)'] : ''} Terms in our Glossary`} /> : ''}
            <div className="small-banner-box-wrap">

               {bannerData.legth ? (
                  <>
                     {bannerData.map((item) => {
                        return (
                           <SmallBannerBox data={item} />
                        )
                     })}
                  </>
               ) : ""}

            </div>
         </div>
      </div>
   )
}

export default Home;