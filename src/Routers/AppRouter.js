import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import App from '../App'
import { MoreFeatures } from '../components/Features/MoreFeatures'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/more-services' element={<MoreFeatures />}/>
        <Route path='/' element={<App />}/>
        <Route path='*' element={<App />}/>
      </Routes>
    </BrowserRouter>
  )
}
