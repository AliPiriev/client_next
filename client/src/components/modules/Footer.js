import FooterLogo from '../../assets/svg/footer-logo.svg'
import DarkLogo from '../../assets/svg/dark-logo.svg'
import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { animateScroll } from 'react-scroll'

function Footer({ settings_data }) {
   const { data } = useFetch(`http://localhost:8080/api/footer`);
   const scroll = animateScroll;
   return (
      <footer className="footer">
         {data && (
            <div className="container">
               <div className="footer-inner">
                  <div className="top">
                     <div className="info">
                        <Link to="/" className="logo">
                           <img src={DarkLogo} alt="logo" />
                        </Link>
                        <p className="copyright">
                           {settings_data ? settings_data.footer_copy_right : ''}
                        </p>
                     </div>
                     <div className="links">
                        <nav>
                           {
                              data.filter(item => item.section === '1').map((link) => {
                                 let result;
                                 !link.is_static ? result = (<Link to={'/pages/' + link.slug} className="link xer" key={link.id}>{link.name}</Link>) :
                                    result = (<Link to={link.slug} className="link per" key={link.id}>{link.name}</Link>)
                                 return result;
                              })
                           }
                        </nav>
                        <nav>
                           {
                              data.filter(item => item.section === '2').map((link) => {
                                 let result;
                                 !link.is_static ? result = (<Link to={'/pages/' + link.slug} className="link" key={link.id}>{link.name}</Link>) :
                                    result = (<Link to={link.slug} className="link" key={link.id}>{link.name}</Link>)
                                 return result;
                              })
                           }
                        </nav>
                        <nav>
                           {
                              data.filter(item => item.section === '3').map((link) => {
                                 let result;
                                 !link.is_static ? result = (<Link to={'/pages/' + link.slug} className="link" key={link.id}>{link.name}</Link>) :
                                    result = (<Link to={link.slug} className="link" key={link.id}>{link.name}</Link>)
                                 return result;
                              })
                           }
                        </nav>
                     </div>
                     <button className='up-btn' onClick={() => scroll.scrollToTop()}>
                        up
                     </button>
                  </div>
                  <div className="bottom">
                     <p className="txt">
                        {settings_data ? settings_data.footer_about_description : ''}
                     </p>
                     <div className="logo">
                        <img src={FooterLogo} alt="logo" />
                     </div>
                  </div>
               </div>
            </div>
         )}
      </footer>
   )
}

const mapStateToProps = (state) => {
   return {
      settings_data: state.settingsState.settings,
   }
}

export default connect(mapStateToProps, null)(Footer);