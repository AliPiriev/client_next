import { useContext, useState, useEffect, useRef } from "react";
import { AuthContect } from "../../contexts/AuthContext";
import WalletConnectModal from "../walletConnect/WalletConnectModal";
import WalletInfoBox from "../walletConnect/WalletInfoBox";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import TopicsBox from "../UI/TopicsBox";
import SideNavigation from "./SideNavigation";
// import ReactSwitch from 'react-switch';
import styles from "../../styles/headerScss/Header.module.scss";

function Header() {
  const ref = useRef();
  const topicsWrap = useRef();
  const [modal, setModal] = useState(false);
  const [infoBox, setInfoBox] = useState(false);
  const [topicsBox, setTopicsBox] = useState(false);
  const { isLogged } = useContext(AuthContect);
  const [burger, setBurger] = useState(false);

  const handleConnectClick = () => {
    isLogged ? setInfoBox(!infoBox) : setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };

  const closeInfoBox = () => {
    setInfoBox(false);
    setModal(false);
  };

  useEffect(() => {
    if (burger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const checkIfClickedOutside = (e) => {
      if (infoBox && ref.current && !ref.current.contains(e.target)) {
        setInfoBox(false);
      }

      if (
        topicsBox &&
        topicsWrap.current &&
        !topicsWrap.current.contains(e.target)
      ) {
        setTopicsBox(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [infoBox, topicsBox, burger]);

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (theme != null) {
      const body = document.getElementsByTagName("body")[0];
      if (theme) {
        body.classList.add("light");
        localStorage.setItem('mode', 'true')
      } else {
        body.classList.remove("light");
        localStorage.setItem('mode', 'false')
      }
    }
  }, [theme]);

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    !mode || mode === 'false' ? setTheme(false) : setTheme(true);
  }, [])

  return (
    <header className={styles.header} id={styles[theme]}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.right}>
            <Link href="/">
              <a className={styles.logo}>
                <div className={styles.lightImg}>
                  <img src="/svg/lightLogo.svg" alt="logo" />
                </div>
                <div className={styles.darkImg}>
                  <img src="/svg/logo.svg" alt="logo" />
                </div>
              </a>
            </Link>

            <nav className={styles.navigation}>
              <ul>
                <li>
                  <Link href="/">
                    <a className={styles.item}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page/introduction">
                    <a className={styles.item}>Get Started</a>
                  </Link>
                </li>
                <li
                  ref={topicsWrap}
                  className={`topics ${topicsBox ? "active" : ""}`}
                >
                  <button
                    className={styles.item}
                    onClick={() => setTopicsBox(!topicsBox)}
                  >
                    Topics
                  </button>
                  <svg
                    className={styles.arrow}
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M9.44588 0.281726L5.5 4.2276L1.55412 0.281724L0.500001 1.33585L4.44588 5.28172C4.72548 5.56124 5.10465 5.71826 5.5 5.71826C5.89535 5.71826 6.27452 5.56124 6.55412 5.28172L10.5 1.33585L9.44588 0.281726Z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                  <div ref={topicsWrap} className={styles.toppicsWrap}>
                    <AnimatePresence>
                      {topicsBox && <TopicsBox />}
                    </AnimatePresence>
                  </div>
                </li>
              </ul>
            </nav>
            <div className={styles.endOfHeader}>
              <div className={styles.switch}>
                <label className={styles.switcher}>
                  <input
                    className={styles.input}
                    type="checkbox"
                    checked={theme}
                    onChange={(event) => setTheme(event.target.checked)}
                  />
                  <div className={styles.marker}>
                    <div className={styles.marker}>
                      <div className="lightLogo">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.2352 1.63082C10.8577 2.21617 10.7142 3.10965 10.4178 3.79041L10.4173 3.79157C9.96799 4.81849 9.72097 5.94434 9.73013 7.13519L9.73015 7.13786C9.74844 11.5573 13.422 15.3276 17.9208 15.5116C18.585 15.5393 19.2205 15.4932 19.837 15.3829C20.2418 15.3091 20.6358 15.2967 20.9885 15.379C21.3479 15.4628 21.7051 15.6578 21.9264 16.0199C22.1467 16.3805 22.1582 16.7855 22.0737 17.1409C21.9905 17.4911 21.8069 17.8367 21.5646 18.165C19.4404 21.0712 15.9042 22.9114 11.9577 22.7403C6.35695 22.494 1.66975 18.0139 1.28204 12.4741C0.927802 7.56338 3.8423 3.28647 8.07872 1.4999C8.75853 1.21196 9.63602 1.06744 10.2352 1.63082ZM9.17031 2.74633C9.07022 2.74909 8.90207 2.78006 8.66292 2.88146L8.66158 2.88202C4.97825 4.43535 2.47284 8.13805 2.7782 12.3669L2.77833 12.3687C3.11104 17.1283 7.16385 21.0278 12.0226 21.2417M9.17031 2.74633C9.16436 2.83426 9.13423 2.98076 9.04281 3.19085C8.51239 4.40342 8.21952 5.73693 8.23016 7.1454C8.25259 12.3854 12.5787 16.7944 17.8595 17.0103C18.6347 17.0426 19.3793 16.9887 20.1024 16.8592L20.1048 16.8588C20.3442 16.8151 20.5064 16.8171 20.604 16.8316C20.574 16.9277 20.5034 17.077 20.3569 17.2753L20.3546 17.2785C18.5187 19.7913 15.4552 21.3903 12.0226 21.2417M20.6954 16.855C20.6954 16.855 20.6949 16.8547 20.6941 16.8543L20.6954 16.855Z"
                            fill="#00050F"
                          />
                        </svg>
                      </div>
                      <div className="darkLogo">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0002 6.25293C8.82461 6.25293 6.25024 8.82729 6.25024 12.0029C6.25024 15.1786 8.82461 17.7529 12.0002 17.7529C15.1759 17.7529 17.7502 15.1786 17.7502 12.0029C17.7502 8.82729 15.1759 6.25293 12.0002 6.25293ZM4.75024 12.0029C4.75024 7.99886 7.99618 4.75293 12.0002 4.75293C16.0043 4.75293 19.2502 7.99886 19.2502 12.0029C19.2502 16.007 16.0043 19.2529 12.0002 19.2529C7.99618 19.2529 4.75024 16.007 4.75024 12.0029Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0002 1.00293C12.5525 1.00293 13.0002 1.45064 13.0002 2.00293V2.08293C13.0002 2.63521 12.5525 3.08293 12.0002 3.08293C11.448 3.08293 11.0002 2.63521 11.0002 2.08293V2.00293C11.0002 1.45064 11.448 1.00293 12.0002 1.00293ZM4.15314 4.15582C4.54366 3.7653 5.17683 3.7653 5.56735 4.15582L5.69735 4.28582C6.08787 4.67635 6.08787 5.30951 5.69735 5.70004C5.30683 6.09056 4.67366 6.09056 4.28314 5.70004L4.15314 5.57004C3.76261 5.17951 3.76261 4.54635 4.15314 4.15582ZM19.8473 4.15582C20.2379 4.54635 20.2379 5.17951 19.8474 5.57003L19.7174 5.70004C19.3268 6.09056 18.6937 6.09056 18.3031 5.70004C17.9126 5.30951 17.9126 4.67635 18.3031 4.28582L18.4331 4.15582C18.8237 3.7653 19.4568 3.7653 19.8473 4.15582ZM1.00024 12.0029C1.00024 11.4506 1.44796 11.0029 2.00024 11.0029H2.08024C2.63253 11.0029 3.08024 11.4506 3.08024 12.0029C3.08024 12.5552 2.63253 13.0029 2.08024 13.0029H2.00024C1.44796 13.0029 1.00024 12.5552 1.00024 12.0029ZM20.9202 12.0029C20.9202 11.4506 21.368 11.0029 21.9202 11.0029H22.0002C22.5525 11.0029 23.0002 11.4506 23.0002 12.0029C23.0002 12.5552 22.5525 13.0029 22.0002 13.0029H21.9202C21.368 13.0029 20.9202 12.5552 20.9202 12.0029ZM5.69735 18.3058C6.08788 18.6964 6.08787 19.3295 5.69735 19.72L5.56735 19.85C5.17682 20.2406 4.54366 20.2406 4.15314 19.85C3.76261 19.4595 3.76261 18.8263 4.15314 18.4358L4.28314 18.3058C4.67366 17.9153 5.30683 17.9153 5.69735 18.3058ZM18.3031 18.3058C18.6937 17.9153 19.3268 17.9153 19.7174 18.3058L19.8474 18.4358C20.2379 18.8263 20.2379 19.4595 19.8474 19.85C19.4568 20.2406 18.8237 20.2406 18.4331 19.85L18.3031 19.72C17.9126 19.3295 17.9126 18.6963 18.3031 18.3058ZM12.0002 20.9229C12.5525 20.9229 13.0002 21.3706 13.0002 21.9229V22.0029C13.0002 22.5552 12.5525 23.0029 12.0002 23.0029C11.448 23.0029 11.0002 22.5552 11.0002 22.0029V21.9229C11.0002 21.3706 11.448 20.9229 12.0002 20.9229Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className={styles.connectBtnWrap} ref={ref}>
                <button
                  className={`${styles.connectBtn} ${
                    isLogged ? styles.connected : ""
                  }`}
                  onClick={handleConnectClick}
                >
                  {isLogged ? (
                    <>
                      <span>Connect Wallet</span>
                      <span className={styles.arrow}>
                        <svg
                          width="8"
                          height="5"
                          viewBox="0 0 8 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.234315 0.533143C0.546734 0.220723 1.05327 0.220723 1.36569 0.533143L4 3.16746L6.63432 0.533143C6.94673 0.220723 7.45327 0.220723 7.76569 0.533143C8.0781 0.845562 8.0781 1.35209 7.76569 1.66451L5.13134 4.29886C4.50781 4.92239 3.49219 4.92239 2.86866 4.29886L0.234315 1.66451C-0.0781049 1.35209 -0.0781049 0.845562 0.234315 0.533143Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </>
                  ) : (
                    <span>Connect Wallet</span>
                  )}
                </button>
                <button
                  className={`${styles.connectBtn} ${styles.connectBtnTwo} ${
                    isLogged ? styles.connected : ""
                  }`}
                  onClick={handleConnectClick}
                >
                  {isLogged ? (
                    <>
                      <span>Connect Wallet</span>
                      <span className={styles.arrow}>
                        <svg
                          width="8"
                          height="5"
                          viewBox="0 0 8 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.234315 0.533143C0.546734 0.220723 1.05327 0.220723 1.36569 0.533143L4 3.16746L6.63432 0.533143C6.94673 0.220723 7.45327 0.220723 7.76569 0.533143C8.0781 0.845562 8.0781 1.35209 7.76569 1.66451L5.13134 4.29886C4.50781 4.92239 3.49219 4.92239 2.86866 4.29886L0.234315 1.66451C-0.0781049 1.35209 -0.0781049 0.845562 0.234315 0.533143Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </>
                  ) : (
                    <span>Wallet</span>
                  )}
                </button>
                <div ref={ref}>
                  <AnimatePresence>
                    {infoBox && isLogged && (
                      <WalletInfoBox
                        closeInfoBox={closeInfoBox}
                        key="info-box"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <button
              className={styles.burger}
              onClick={() => setBurger(!burger)}
            >
              <div className="lightLogo">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <line
                    x1="2"
                    y1="8"
                    x2="30"
                    y2="8"
                    stroke="#00050F"
                  ></line>{" "}
                  <line x1="2" y1="16" x2="30" y2="16" stroke="#00050F"></line>{" "}
                  <line x1="2" y1="24" x2="30" y2="24" stroke="#00050F"></line>{" "}
                </svg>
              </div>
              <div className="darkLogo">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <line x1="2" y1="8" x2="30" y2="8" stroke="white"></line>{" "}
                  <line x1="2" y1="16" x2="30" y2="16" stroke="white"></line>{" "}
                  <line x1="2" y1="24" x2="30" y2="24" stroke="white"></line>{" "}
                </svg>
              </div>
              {/* {theme === true ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <line
                    x1="2"
                    y1="8"
                    x2="30"
                    y2="8"
                    stroke="#00050F"
                  ></line>{" "}
                  <line x1="2" y1="16" x2="30" y2="16" stroke="#00050F"></line>{" "}
                  <line x1="2" y1="24" x2="30" y2="24" stroke="#00050F"></line>{" "}
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <line x1="2" y1="8" x2="30" y2="8" stroke="white"></line>{" "}
                  <line x1="2" y1="16" x2="30" y2="16" stroke="white"></line>{" "}
                  <line x1="2" y1="24" x2="30" y2="24" stroke="white"></line>{" "}
                </svg>
              )} */}
            </button>

            <AnimatePresence>
              {burger && <SideNavigation setBurger={setBurger} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {modal && !isLogged && <WalletConnectModal closeModal={closeModal} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;
