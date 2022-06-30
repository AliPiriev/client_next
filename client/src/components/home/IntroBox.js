import parse from 'html-react-parser';

function IntroBox({ data }) {
   return (
      <div className="intro-box">
         <div className="left">
            <h1 className="title">{parse(data.slider_title)}</h1>
         </div>
         <div className="right">
            <p className="teaser">{data.slider_text}</p>
         </div>
      </div>
   )
}

export default IntroBox;