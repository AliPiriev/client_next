import Accordion from "../components/courses/Accordion";
import Tabs from "../components/courses/Tabs";
import VideoContent from "../components/courses/VideoContent";
import Instructors from "../components/courses/Instructors";
import Banner from "../components/courses/Banner";
import CourseHeader from '../components/courses/CourseHeader';

function Courses() {
    return (
       <div className="our projects">
         <div className="container">  
            <CourseHeader />
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
