import { fetchData } from '../../queries';
import InstructorHead from '../../components/becomeAnInstructor/InstructorHead';
import HowToBegin from '../../components/becomeAnInstructor/HowToBegin';
import Learn from '../../components/becomeAnInstructor/Learn';
import Ending from '../../components/becomeAnInstructor/Ending';

export const getStaticProps = async () => {
    const res = await fetchData('https://academy-admin.vercel.app/api/data/become-instructor');
  
    return {
       props: {  res: res.data.result }
    }
}

const BecomeAnInstructor = ({res}) => { 
    console.log(res)
    return (
        <>
            <InstructorHead />
            <Learn />
            <HowToBegin />
            <Ending />
        </>
    )
};
 
export default BecomeAnInstructor;