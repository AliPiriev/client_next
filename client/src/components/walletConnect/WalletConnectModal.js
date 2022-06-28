import { useContext } from "react";
import {motion} from 'framer-motion'
import MetamMaskConnectBox from "./MetaMaskConnectBox";
import WalletConnectBox from "./WalletConnectBox";
import { AuthContect } from '../../contexts/AuthContext';

function WalletConnectModal({closeModal}) {
   const { message } = useContext(AuthContect)
   return (
      <motion.div className="connect-modal"
         initial={{scale: 0.8 , opacity: 0}}
         animate={{scale: 1, opacity: 1}}
         exit={{scale: 0.8 , opacity: 0, pointerEvents: 'none'}}>
         <div className="inner">
            <div className="top">
               <h2 className="title">Connect to wallet</h2>
               <button className="close" onClick={closeModal}>
                  <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="17" cy="17.0488" r="16" stroke="#E5E5E5"  />
                     <path d="M21.5342 12.5156L12.4675 21.5823" stroke="#00050F"  />
                     <path d="M12.4658 12.5156L21.5325 21.5823" stroke="#00050F"  />
                  </svg>
               </button>
            </div>
            <div className="list">
               <MetamMaskConnectBox />
               <WalletConnectBox/>
            </div>
            <span className="message">{message}</span>
         </div>
      </motion.div>
   )
}

export default WalletConnectModal;