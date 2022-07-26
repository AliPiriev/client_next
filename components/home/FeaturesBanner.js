
function FeaturesBanner({ data }) {
   return (
      <div className="features-banner">
         <div className="container">
            <div className="inner">

               <div className="item">
                  <div className="icon">
                     <img src='/svg/feature-icon-1.svg' alt="feature" />
                  </div>
                  <div className="content">
                     <h3 className="ttl">{data.key_feature_title1}</h3>
                     <p className="teaser">{data.key_feature_subtitle1}</p>
                  </div>
               </div>

               <div className="item">
                  <div className="icon">
                     <img src='/svg/feature-icon-2.svg' alt="feature" />
                  </div>
                  <div className="content">
                     <h3 className="ttl">{data.key_feature_title2}</h3>
                     <p className="teaser">{data.key_feature_subtitle2}</p>
                  </div>
               </div>

               <div className="item">
                  <div className="icon">
                     <img src='/svg/feature-icon-3.svg' alt="feature" />
                  </div>
                  <div className="content">
                     <h3 className="ttl">{data.key_feature_title3}</h3>
                     <p className="teaser">{data.key_feature_subtitle3}</p>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default FeaturesBanner;