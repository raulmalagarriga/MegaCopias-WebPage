import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import App from '../App';
import { MoreFeatures } from '../components/Features/MoreFeatures';
import { PDF } from '../components/PDF/PDF';
import ScrollToTop from './ScrollToTop';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/more-services' element={<MoreFeatures />}/>
        <Route path='/pdf' element={<PDF />}/>
        <Route path='/' element={<App />}/>
        <Route path='*' element={<App />}/>
      </Routes>
    </BrowserRouter>
  )
}
