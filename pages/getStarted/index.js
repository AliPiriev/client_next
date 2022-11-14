import GetStarted from "../../components/getStarted/GetStarted";
import BgImage from "../../components/UI/BgImage";
const GetStartedIndex = () => {
  return (
    <div className="getStartedBackground">
      <div className="darkImg">
        <BgImage id={8} />
      </div>
      <div className="lightImg">
        <BgImage id={81} />
      </div>
      <GetStarted />
    </div>
  );
};

export default GetStartedIndex;
