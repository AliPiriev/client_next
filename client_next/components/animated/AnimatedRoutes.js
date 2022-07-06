
import {AnimatePresence} from 'framer-motion'
// import { AnimatePresence } from "framer-motion";

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import TestAdmin from '../../pages/TestAdmin';
import Articles from '../../pages/Articles';
import Article from '../../pages/Article';
import SimplePage from '../../pages/SimplePage';
import Glossary from '../../pages/Glossary';
import Glossaries from '../../pages/Glossaries';
 
 
function AnimatedRoutes() {

   return ( 
      <AnimatePresence exitBeforeEnter initial={false}>
            <Route path='/' element={<Home />}></Route>
            <Route path='articles' element={<Articles />}></Route>
            <Route path='articles/:slug' element={<Article />}></Route>
            <Route path='glossaries' element={<Glossaries />}></Route>
            <Route path='glossaries/:slug' element={<Glossary />}></Route>
            <Route path='pages/:slug' element={<SimplePage />}></Route>
            <Route path='test-admin' element={<TestAdmin />}></Route>
            <Route path='*' element={<NotFound />}></Route
      </AnimatePresence>
   )
}

export default AnimatedRoutes; 