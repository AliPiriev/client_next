import parse from 'html-react-parser';

function IntroBox({ data }) {
   return (
      <div className="intro-box">
         <div className="left">
            <h1 className="title">{parse(data.title)}</h1>
         </div>
         <div className="right">
            <p className="teaser">{data.teaser}</p>
         </div>
      </div>
   )
}

export default IntroBox;