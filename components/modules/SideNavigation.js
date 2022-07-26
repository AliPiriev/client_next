import Link from 'next/link';
import { motion } from 'framer-motion'

function SideNavigation({ setBurger }) {
   return (
      <motion.div className="mob-navigation"
         initial={{ x: 100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: 100, opacity: 0}}>
         <div className="top">
            <span className='ttl'>Menu</span>
            <button className='close' onClick={() => setBurger(false)} >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23 1L1 23" stroke="white" ></path> <path d="M1 1L23 23" stroke="white" ></path> </svg>
            </button>
         </div>

         <ul className='list'>
            <li>
               <Link href="pages/introduction" >
                  <a className='item'>
                     Get Started
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/articles" >
                  <a className='item'>
                     Topics
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/glossaries">
                  <a className='item'>
                     Glossaries
                  </a>
               </Link>
            </li>
         </ul>

      </motion.div>
   )
}

export default SideNavigation;