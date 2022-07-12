import React from "react";
import "../../assets/css/temprKeta.scss";

function SmallBannerBox({data}) {
   return (
      <div className="BannerBox">
         <img src={data.img} alt='' />
         <h2 className="title">{data.title}</h2>
         <p className="teaser">{data.paragraph}</p>
         <button href={data.button_link}>{data.button_text}</button>
      </div>
   )
}

export default SmallBannerBox;
