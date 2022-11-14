import Introduction from "../../components/introduction/Introduction";
import styles from '../../styles/instructorScss/Instructors.module.scss';
// const { data: introduction } = await fetchData(
//   "https://academy-admin.vercel.app/api/data/introduction"
// );

const IntroductionIndex = () => {
  return (
    <div className="container">
      <Introduction />
    </div>
  );
};

export default IntroductionIndex;
