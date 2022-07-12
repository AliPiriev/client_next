import BgImage from "../components/UI/BgImage";
import Style from "../styles/notfound.module.scss"
import Link from "next/link"
import {useEffect} from "react"

function NotFound() {

   useEffect(() => {
      console.log("use effect run")
   }, [])
   
   return (
      <div className="not-found">
         <BgImage id={3} />
         <div className={Style.inner}>
            <div className="container">
               <h1 className={Style.title}>
                  Ooops! 404.
                  Page not found
               </h1>
               <p className={Style.teaser}>
                  The requested page does not exist.
                  You may have typed the wrong address.
               </p>
               <Link href='/'>
                  <a className={`blue-btn ${Style.btn}`}>
                     <span>Return to the main page</span>
                  </a>
               </Link>

               <div className={Style.svg}>
                  <img src="/svg/notfound.svg" alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default NotFound;