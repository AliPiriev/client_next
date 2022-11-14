import Form from "../../components/contact/Form";
import BgImage from '../../components/UI/BgImage';
import styles from '../../styles/contact/Form.module.scss';



const Contact = () => { 
    return (
        <div className='contact conttaiiner'>
            <div className="darkLogo">
            <BgImage id={10} />
            <Form />
            </div>
            <div className={`lightLogo ${styles.darkImg}`}
            >
             <Form />
            </div>
       </div>
    )
};
 
export default Contact;