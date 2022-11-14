import { fetchData } from "../../queries";
import GreenBanner from "../../components/instructor/GreenBanner";
import Instructors from "../../components/instructor/Instructors";


function instructor() {
    return (
        <div>
            <Instructors />
            <GreenBanner />
        </div>
       
    )
}

export default instructor;