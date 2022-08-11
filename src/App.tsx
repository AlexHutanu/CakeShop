import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './components/sharedStyles/all.scss'
import AboutUsPage from './pages/AboutUsPage'
import CatalogPage from './pages/CatalogPage'
import LandingPage from './pages/LandingPage'

export default () => {

   return (
      <Router>
         <Routes>
            <Route element={<LandingPage />} path={'/'} />
            <Route element={<CatalogPage />} path={'/catalog'} />
            <Route element={<AboutUsPage />} path={'/information'} />
         </Routes>
      </Router>
   )
}
