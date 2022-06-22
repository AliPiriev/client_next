import {motion} from 'framer-motion/dist/framer-motion'
import { useContext } from "react";
import { AuthContect } from "../../contexts/AuthContext";


function WalletInfoBox({closeInfoBox}) {
   const {currentAccount, SignOut} = useContext(AuthContect)
   const shortAddr = `${currentAccount.substr(0, 4)}...${currentAccount.substring(currentAccount.length - 4, currentAccount.length)}`;
   
   const handleClick = () => {
      SignOut();
      closeInfoBox();
   }

   const copyText = () => {
      let copyText = document.getElementById("wallet-adress");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
   }

   return (
      <motion.div className="wallet-info-box"
         initial={{y: 20, opacity: 0}}
         animate={{y: 0, opacity: 1}}
         exit={{y: 20, opacity: 0, pointerEvents: 'none'}}>
         <span className="ttl">Wallet Adress</span>
         <button className="address" onClick={copyText}>
            <span className="value">
               {shortAddr}
            </span>
            <input 
               type="text" value={currentAccount} 
               id="wallet-adress"  readOnly />
            <div className="icon">
               <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33023 16.0486H4.20465C1.29488 16.0486 0 14.7537 0 11.8439V8.71832C0 5.80856 1.29488 4.51367 4.20465 4.51367H7.33023C10.24 4.51367 11.5349 5.80856 11.5349 8.71832V11.8439C11.5349 14.7537 10.24 16.0486 7.33023 16.0486ZM4.20465 5.62995C1.89767 5.62995 1.11628 6.41135 1.11628 8.71832V11.8439C1.11628 14.1509 1.89767 14.9323 4.20465 14.9323H7.33023C9.63721 14.9323 10.4186 14.1509 10.4186 11.8439V8.71832C10.4186 6.41135 9.63721 5.62995 7.33023 5.62995H4.20465Z" fill="white" />
                  <path d="M11.7956 11.5837H10.977C10.6718 11.5837 10.4188 11.3307 10.4188 11.0256V8.7186C10.4188 6.41162 9.63743 5.63022 7.33045 5.63022H5.02347C4.71836 5.63022 4.46533 5.3772 4.46533 5.07208V4.25348C4.46533 1.34371 5.76022 0.0488281 8.66998 0.0488281H11.7956C14.7053 0.0488281 16.0002 1.34371 16.0002 4.25348V7.37906C16.0002 10.2888 14.7053 11.5837 11.7956 11.5837ZM11.5351 10.4674H11.7956C14.1025 10.4674 14.8839 9.68604 14.8839 7.37906V4.25348C14.8839 1.9465 14.1025 1.16511 11.7956 1.16511H8.66998C6.36301 1.16511 5.58161 1.9465 5.58161 4.25348V4.51394H7.33045C10.2402 4.51394 11.5351 5.80883 11.5351 8.7186V10.4674Z" fill="white" />
               </svg>
            </div>
         </button>
         <div className="type">
            {localStorage.getItem('isConnectedToWallet')}
         </div>
         <div className="line"></div>
         <button className="border-gery-btn" onClick={handleClick}>
            <span>Dissconect Wallet</span>
         </button>
      </motion.div>
   )
}

export default WalletInfoBox;