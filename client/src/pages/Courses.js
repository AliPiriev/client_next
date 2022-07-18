import React from "react";
import SmallBannerBox from "../components/home/SmallBannerBox";
import Accordion from "../components/courses/Accordion";
import Tabs from "../components/courses/Tabs";
import VideoContent from "../components/courses/VideoContent";
import Instructors from "../components/courses/Instructors";
import Banner from "../components/courses/Banner";
import img1 from "../assets/img/boxImages/blue.png"
import img2 from '../assets/img/boxImages/green.png';


const bannerData = [{
    id: 1,
    title: 'Lost in all the crypto slang?',
    paragraph: "Take a closer look at our blockchain & crypto glossary",
    img: img1,
    button_link: "https://www.google.com/",
    button_text: "Go to the Glossary"
 },
 {
    id: 2,
    title: 'Up for an adventure?',
    paragraph: "Learn while you test your knowledge with a range of quizzes.",
    img: img2,
    button_link: "https://www.google.com/",
    button_text: "Take a Crypto Quiz"
 }]

function Courses() {
    return (
       <div className="our projects">
        <div className="container">
          <div className='small-banner-box-wrap'>
                     {bannerData.map((item) => {
                        return(
                           <SmallBannerBox data={item} key={item.id}/>  
                        )
                     })}
               </div>   
               <VideoContent />
               <Banner />
               <Instructors />
               <Accordion/>
               <Tabs />
            </div>
       </div>
    )
 }
 
 export default Courses;
