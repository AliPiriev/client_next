import FooterComponent from "../../components/footerComponent/Footer";

export const getStaticProps = async () => {
  const res = await fetchData("https://academy-admin.vercel.app/api/data/glossaries");
  // aq limiti schirdeba tu ara? 
  // const test = await fetchData("https://academy-admin.vercel.app/api/data/glossaries");
  // console.log(test)

  return {
    props: { res }
  }
}

function FooterIndex() {
  return (
    <div>
      <FooterComponent />
    </div>
  );
}
export default FooterIndex;
