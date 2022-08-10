import Instructors from "../../components/instructor/Instructors";
import GreenBanner from "../../components/instructor/GreenBanner";
import styles from "../../styles/instructorScss/index.module.scss";
import Banner from "../../components/instructor/Banner";
import VideoContent from "../../components/instructor/VideoContent";


function instructor() {
    return (
        <div className={styles.container}>
            <Instructors />
            <GreenBanner />
            <Banner />
            <VideoContent />
        </div>
    )
}

export default instructor;