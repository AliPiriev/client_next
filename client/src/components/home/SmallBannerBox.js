import React from "react";
import "../../assets/css/temprKeta.scss";

function SmallBannerBox({data}){
   return (
     <div className="small-banner-box">
      <div className="img"><img src={data.img}  /></div>
      <div className="bannerDiv">
      <h2 className="title">{data.title}</h2>
      <p className="teaser">{data.paragraph}</p>
      <button className="btn" href={data.button_link}>{data.button_text}</button>
      </div>
     </div>

   )
}

export default SmallBannerBox;