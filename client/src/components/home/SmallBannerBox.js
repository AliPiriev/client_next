import React from "react";
import "../../assets/css/temprGio.scss";

function SmallBannerBox({data}) {
   return ( 
     <div className="box">
        <img src={data.img} alt />
        <h2 className="title">{data.title}</h2>
        <p className="teaser">{data.teaser}</p>
        <button href={data.button_link}>{data.button_text}</button>
      </div>
   )
};

export default SmallBannerBox;