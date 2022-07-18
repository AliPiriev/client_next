import useFetch from '../useFetch';
import Articles from "../components/article/Articles";
import BgImage from "../components/UI/BgImage";
import IntroBox from "../components/home/IntroBox";
import Glossaries from '../components/glossary/Glossaries';
import AnimatedPage from '../components/animated/AnimatedPage';
import FeaturesBanner from '../components/home/FeaturesBanner';


function Home() {
   const intro = {
      title: 'World-class education for everyone. <span>Together we learn.</span>',
      teaser: "Build and develop your skills with online educational content from the world's top institutions and organizations."
   }


   const { data: home_contents } = useFetch('http://localhost:8080/api/home-content');
   const { data: glossaries } = useFetch('http://localhost:8080/api/glossaries?limit=3');
   const { data: glossariesTotal } = useFetch('http://localhost:8080/api/glossaries-total');
   const { data: releases } = useFetch('http://localhost:8080/api/articles?category=4&limit=3');
   const { data: blockchain } = useFetch('http://localhost:8080/api/articles?category=6&limit=3');


   return (
      <AnimatedPage>
         <div className="home-page">
            <BgImage id={1} />
            <div className="container">
               {home_contents && <IntroBox data={home_contents} />}
               {home_contents && <FeaturesBanner data={home_contents} />}
               {releases && releases.results.length ? <Articles data={releases} title='releases' /> : ''}
               {blockchain && blockchain.results.length ? <Articles data={blockchain} title='blockchain' /> : ''}
               {glossaries && glossaries.length ? <Glossaries data={glossaries}
                  title={`${glossariesTotal ? glossariesTotal[0]['count(*)'] : ''} Terms in our Glossary`} /> : ''}
            </div>
         </div>
      </AnimatedPage>
   )
}

export default Home;