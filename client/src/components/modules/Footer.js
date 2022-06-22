import FooterLogo from '../../assets/svg/footer-logo.svg'
import DarkLogo from '../../assets/svg/dark-logo.svg'
import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { animateScroll  } from 'react-scroll'

function Footer({description, copyright}) {
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
                           {copyright}
                        </p>
                     </div>
                     <div className="links">
                        <nav>
                           {
                              data.filter(item => item.section === '1').map((link) => {
                                 let result;
                                 !link.is_static ? result = (<Link to={'/pages/' + link.slug} className="link" key={link.id}>{link.name}</Link>) :
                                    result = (<a href={link.slug} className="link" key={link.id}>{link.name}</a>)
                                 return result;
                              })
                           }
                        </nav>
                        <nav>
                           {
                              data.filter(item => item.section === '2').map((link) => {
                                 let result;
                                 !link.is_static ? result = (<Link to={'/pages/' + link.slug} className="link" key={link.id}>{link.name}</Link>) :
                                    result = (<a href={link.slug} className="link" key={link.id}>{link.name}</a>)
                                 return result;
                              })
                           }
                        </nav>
                        <nav>
                           {
                              data.filter(item => item.section === '3').map((link) => {
                                 let result;
                                 !link.is_static ? result = (<Link to={'/pages/' + link.slug} className="link" key={link.id}>{link.name}</Link>) :
                                    result = (<a href={link.slug} className="link" key={link.id}>{link.name}</a>)
                                 return result;
                              })
                           }
                        </nav>
                     </div>
                     <button className='up-btn' onClick={() => scroll.scrollToTop() }>
                        up
                     </button>
                  </div>
                  <div className="bottom">
                     <p className="txt">{description}</p>
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
      description: state.settingsState.settings.footer_about_description,
      copyright: state.settingsState.settings.copyright_text,
   }
}

export default connect(mapStateToProps, null)(Footer);