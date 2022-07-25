import useFetch from '../../hooks/useFetch';
import Link from 'next/link';
import { connect } from 'react-redux';

import { animateScroll } from 'react-scroll'
 
function Footer({ settings_data }) {
   const { data } = useFetch(`http://localhost:8080/api/footer`);
   const scroll = animateScroll;
 
   const getLinks =  (row) => {
      return data.filter(item => item.section === row).map((link) => {
         let result;
         !link.is_static ? result = (
            <Link href={'/page/' + link.slug} key={link.id}>
               <a className="link">{link.name}
               </a>
            </Link>) :
            result = (
               <Link href={'/' + link.slug}  key={link.id}>
                  <a className="link">{link.name}</a>
               </Link>)
         return result;
      })
   }
   return (
      <footer className="footer">
         {data && (
            <div className="container">
               <div className="footer-inner">
                  <div className="top">
                     <div className="info">
                        <Link href="/" >
                           <a className="logo">
                              <img src='/svg/dark-logo.svg' alt="logo" />
                           </a>
                        </Link>
                        <p className="copyright">
                           {settings_data ? settings_data.footer_copy_right : ''}
                        </p>
                     </div>
                     <div className="links">
                        <nav>
                           {
                              getLinks('1')
                           }
                        </nav>
                        <nav>
                           {
                              getLinks('2')
                           }
                        </nav>
                        <nav>
                           {
                               getLinks('3')
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
                        <img src='/svg/footer-logo.svg' alt="logo" />
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