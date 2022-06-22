import { useContext, useState } from 'react';
import { AuthContect } from '../../contexts/AuthContext';
import Logo from '../../assets/svg/logo.svg'
import WalletConnectModal from '../walletConnect/WalletConnectModal';
import WalletInfoBox from '../walletConnect/WalletInfoBox';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import { Link } from 'react-router-dom';


function Header() {
   const [modal, setModal] = useState(false);
   const [infoBox, setInfoBox] = useState(false)
   const { isLogged } = useContext(AuthContect);

   const handleConnectClick = () => {
      isLogged ? setInfoBox(!infoBox) : setModal(!modal);
   }

   const closeModal = () => {
      setModal(false);
   }

   const closeInfoBox = () => {
      setInfoBox(false);
      setModal(false);
   }

   return (
      <header className="header">
         <div className="container">
            <div className="header-inner">
               <div className="left">
                  <Link to="/" className="logo">
                     <img src={Logo} alt="logo" />
                  </Link>
               </div>

               <div className="right">
                  <nav className="navigation">
                     <ul>
                        <li>
                           <Link to="pages/introduction" className='item'>Get Started</Link>
                        </li>
                        <li>
                           <a href="/" className='item'>Topics</a>
                        </li>
                        <li>
                           <a href="/" className='item'>Glossaries</a>
                        </li>
                     </ul>
                  </nav>

                  <div className="connect-btn-wrap">
                     <button className={`connect-btn ${isLogged ? 'connected' : ''}`}
                        onClick={handleConnectClick}>
                        {isLogged ? (
                           <>
                              <span>Connect Wallet</span>
                              <span className="arrow">
                                 <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.234315 0.533143C0.546734 0.220723 1.05327 0.220723 1.36569 0.533143L4 3.16746L6.63432 0.533143C6.94673 0.220723 7.45327 0.220723 7.76569 0.533143C8.0781 0.845562 8.0781 1.35209 7.76569 1.66451L5.13134 4.29886C4.50781 4.92239 3.49219 4.92239 2.86866 4.29886L0.234315 1.66451C-0.0781049 1.35209 -0.0781049 0.845562 0.234315 0.533143Z" fill="white" />
                                 </svg>

                              </span>
                           </>
                        ) : (
                           <span>Connect Wallet</span>
                        )}
                     </button>
                     <AnimatePresence>
                        {(infoBox && isLogged) && <WalletInfoBox closeInfoBox={closeInfoBox} key="info-box" />}
                     </AnimatePresence>
                  </div>
               </div>
            </div>
         </div>
         <AnimatePresence>
            {(modal && !isLogged) && <WalletConnectModal closeModal={closeModal} />}
         </AnimatePresence>
      </header>
   )
}

export default Header;