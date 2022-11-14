

function SmallBannerBox({data}){

   return (
      <div className="small-banner-box">
         <img src={data.img} alt="" />
         <h2 className="title">{data.title}</h2>
         <p className="teaser">{data.teaser}</p>
         <a href={data.button_link}>{data.butten_tex}</a>
      </div>
   )
}

export default SmallBannerBox;
