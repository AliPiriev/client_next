import { ContactContent } from "../../components/contact/ContactContent";
import CourseHeader from "../../components/contact/CourseHeader";
import Speakers from "../../components/contact/Speakers";
const Contact = () => { 
    return (
        <div className='contact'>
            <ContactContent />
            <CourseHeader />
            <Speakers />
        </div>
    )
};

export default Contact;