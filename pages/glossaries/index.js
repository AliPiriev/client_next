import { fetchData } from '../../queries';

import Glossaries from '../../components/glossary/Glossaries';

export const getStaticProps = async () => {
   const res = await fetchData("https://academy-admin.vercel.app/api/data/glossaries");

   return {
      props: { res }
   }
}

function index({ res }) {
   return (
      <Glossaries res={res} />
   )
}

export default index;
