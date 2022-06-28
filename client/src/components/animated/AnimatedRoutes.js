import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
// import { AnimatePresence } from "framer-motion";

import Home from '../../views/Home';
import NotFound from '../../views/NotFound';
import TestAdmin from '../../views/TestAdmin';
import Articles from '../../views/Articles';
import Article from '../../views/Article';
import SimplePage from '../../views/SimplePage';
import Glossary from '../../views/Glossary';
import Glossaries from '../../views/Glossaries';
 
 
function AnimatedRoutes() {
   const location = useLocation();
   return ( 
      <AnimatePresence exitBeforeEnter initial={false}>
         <Routes location={location} key={location.pathname}> 
            <Route path='/' element={<Home />}></Route>
            <Route path='articles' element={<Articles />}></Route>
            <Route path='articles/:slug' element={<Article />}></Route>
            <Route path='glossaries' element={<Glossaries />}></Route>
            <Route path='glossaries/:slug' element={<Glossary />}></Route>
            <Route path='pages/:slug' element={<SimplePage />}></Route>
            <Route path='test-admin' element={<TestAdmin />}></Route>
            <Route path='*' element={<NotFound />}></Route>
         </Routes>
      </AnimatePresence>
   )
}

export default AnimatedRoutes; 