import React from "react";
import "../../assets/css/temprNino.scss";
import { getItemById } from "../../helpers";

function SmallBannerBox({data}){
   return (
     <div className="small-banner-box">
      <img className="banner_img" src={data.img} alt="" />
      <h2 className="title">{data.title}</h2>
      <p className="teaser">{data.paragraph}</p>
      <button className="btn" href={data.button_link}>{data.button_text}</button>
      </div>

   )
}

export default SmallBannerBox;