import useFetch from '../useFetch';
import Articles from "../components/article/Articles";
import BgImage from "../components/UI/BgImage";
import IntroBox from "../components/home/IntroBox";
import Glossaries from '../components/glossary/Glossaries';
import AnimatedPage from '../components/animated/AnimatedPage';
import FeaturesBanner from '../components/home/FeaturesBanner';
import SmallBannerBox from '../components/home/SmallBannerBox';
import Accordion from '../components/courses/Accordion';
import Tabs from '../components/courses/Tabs';

import VideoContent from '../components/courses/VideoContent';



import Banner from '../components/courses/Banner';
import img1 from '../assets/img/boxImages/blue.png';
import img2 from '../assets/img/boxImages/green.png';



function Home() {
   const intro = {
      title: 'World-class education for everyone. <span>Together we learn.</span>',
      teaser: "Build and develop your skills with online educational content from the world's top institutions and organizations."
   }

   const bannerData = [{

      title: 'Lost in all the crypto slang?',
      paragraph: "Take a closer look at our blockchain & crypto glossary",
      img: img1,
      button_link: "https://www.google.com/",
      button_text: "Go to the Glossary"
   },
   {
      title: 'Up for an adventure?',
      paragraph: "Learn while you test your knowledge with a range of quizzes.",
      img: img2,
      button_link: "https://www.google.com/",
      button_text: "Take a Crypto Quiz"
   }]

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
               <div className='small-banner-box-wrap'>
                  {bannerData.map((item, index) => {
                     return (
                        <SmallBannerBox data={item} key={index} />
                     )
                  })}
               </div>
               <VideoContent />
               <Banner />
               <Accordion />
               <Tabs />
            </div>
         </div>
      </AnimatedPage>
   )
}

export default Home;