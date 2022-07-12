import { fetchData } from '../queries'
import Articles from "../components/article/Articles";
import BgImage from "../components/UI/BgImage";
import IntroBox from "../components/home/IntroBox";
import Glossaries from '../components/glossary/Glossaries';
import FeaturesBanner from '../components/home/FeaturesBanner';
 
export const getStaticProps = async () => {
   const { data: home_contents } = await fetchData('http://localhost:8080/api/home-content');
   const { data: glossaries } = await fetchData('http://localhost:8080/api/glossaries?limit=3');
   const { data: glossariesTotal } = await fetchData('http://localhost:8080/api/glossaries-total');
   const { data: releases } = await fetchData('http://localhost:8080/api/articles?category=4&limit=3');
   const { data: blockchain } = await fetchData('http://localhost:8080/api/articles?category=6&limit=3');


   return {
      props: { home_contents, glossaries, glossariesTotal, releases, blockchain }
   }
}

function Home( { home_contents, glossaries, glossariesTotal, releases, blockchain }) {
   console.log(home_contents)
   console.log(glossaries)
   console.log(releases)
   return (
      <div className="home-page">
         <BgImage id={1} />
         <div className="container">
            {home_contents && <IntroBox data={home_contents} />}
            {home_contents && <FeaturesBanner data={home_contents} />}
            {releases.results.length ? <Articles data={releases} title='releases' /> : ''}
            {blockchain.results.length ? <Articles data={blockchain} title='blockchain' /> : ''}
            {glossaries.length ? <Glossaries data={glossaries}
               title={`${glossariesTotal ? glossariesTotal[0]['count(*)'] : ''} Terms in our Glossary`} /> : ''}
         </div>
      </div>
   )
}

export default Home;