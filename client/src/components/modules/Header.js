import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContect } from '../../contexts/AuthContext';
import Logo from '../../assets/svg/logo.svg'
import WalletConnectModal from '../walletConnect/WalletConnectModal';
import WalletInfoBox from '../walletConnect/WalletInfoBox';
import { AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import TopicsBox from '../TopicsBox';


function Header() {
   const ref = useRef()
   const topicsWrap = useRef()
   const [modal, setModal] = useState(false);
   const [infoBox, setInfoBox] = useState(false);
   const [topicsBox, setTopicsBox] = useState(false);
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

   useEffect(() => {
      const checkIfClickedOutside = e => {
         if (infoBox && ref.current && !ref.current.contains(e.target)) {
            setInfoBox(false)
         }

         if (topicsBox && topicsWrap.current && !topicsWrap.current.contains(e.target)) {
            setTopicsBox(false)
         }
      }

      document.addEventListener("mousedown", checkIfClickedOutside)

      return () => {
         document.removeEventListener("mousedown", checkIfClickedOutside)
      }
   }, [infoBox, topicsBox])

   return (
      <header className="header">
         <div className="container">
            <div className="header-inner">
               <div className="left">
                  <NavLink to="/" className="logo">
                     <img src={Logo} alt="logo" />
                  </NavLink>
               </div>

               <div className="right">
                  <nav className="navigation"  >
                     <ul>
                        <li>
                           <NavLink to="pages/introduction" className='item'>Get Started</NavLink>
                        </li>
                        <li ref={topicsWrap} className={`topics ${topicsBox ? 'active' : ''}`}>
                           <button className='item' onClick={() => setTopicsBox(!topicsBox)}>Topics</button>
                           <svg className='arrow' width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.44588 0.281726L5.5 4.2276L1.55412 0.281724L0.500001 1.33585L4.44588 5.28172C4.72548 5.56124 5.10465 5.71826 5.5 5.71826C5.89535 5.71826 6.27452 5.56124 6.55412 5.28172L10.5 1.33585L9.44588 0.281726Z" fill="white"></path> </svg>
                           <div ref={topicsWrap} className='toppics-wrap'>
                              <AnimatePresence>
                                 {topicsBox && <TopicsBox />}
                              </AnimatePresence>
                           </div>
                        </li>
                        <li>
                           <NavLink to="/glossaries" className='item'>Glossaries</NavLink>
                        </li>
                     </ul>
                  </nav>

                  <div className="connect-btn-wrap" ref={ref}>
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
                     <div ref={ref}>
                        <AnimatePresence>
                           {(infoBox && isLogged) && <WalletInfoBox closeInfoBox={closeInfoBox} key="info-box" />}
                        </AnimatePresence>
                     </div>
                  </div>

                  <button className="burger">
                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="2" y1="8" x2="30" y2="8" stroke="white" stroke-width="2"></line> <line x1="2" y1="16" x2="30" y2="16" stroke="white" stroke-width="2"></line> <line x1="2" y1="24" x2="30" y2="24" stroke="white" stroke-width="2"></line> </svg>
                  </button>

                  <div className="mob-navigation">
                     <div className="top">
                        <span className='ttl'>Menu</span>
                        <button className='close'>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23 1L1 23" stroke="white" stroke-width="2"></path> <path d="M1 1L23 23" stroke="white" stroke-width="2"></path> </svg>
                        </button>
                     </div>

                     <ul className='list'>
                        <li>
                           <NavLink to="pages/introduction" className='item'>Get Started</NavLink>
                        </li>
                        <li>
                           <NavLink to="/articles" className='item'>Topics</NavLink>
                        </li>
                        <li>
                           <NavLink to="/glossaries" className='item'>Glossaries</NavLink>
                        </li>
                     </ul>

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