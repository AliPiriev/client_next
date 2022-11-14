import Terms from "../../components/terms/Terms";
import BgImage from "../../components/UI/BgImage";

function TermsIndex() {
  return (
    <div className="terms">
      <div className="darkImg">
        <BgImage id={6} />
      </div>
      <div className="lightImg">
        <BgImage id={61} />
      </div>
      <div className="container">
        <div className="aligning">
          <Terms />
        </div>
      </div>
    </div>
  );
}
export default TermsIndex;
