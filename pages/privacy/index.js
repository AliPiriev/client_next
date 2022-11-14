import Privacy from "../../components/privacy/Privacy";
import BgImage from "../../components/UI/BgImage";

function TermsIndex() {
  return (
    <div>
      <div className="darkImg">
        <BgImage id={7} />
      </div>
      <div className="lightImg">
        <BgImage id={71} />
      </div>

      <div>
        <Privacy />
      </div>
    </div>
  );
}
export default TermsIndex;
