import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
// import Homecards from './components/Homecards';
import Loginzoho from './components/Loginzoho';
import Registerzoho from './components/Registerzoho';
// import Sectionpage from './components/Sectionpage';
// import Section from './components/Section';
// import Homepage from './components/Homepage';
 const App = () => {
  return (
    <>
    {/* <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/SectionPage' element={<Sectionpage/>}/>
  </Routes> */}
    {/* <Homepage/> */}
{/* <Registerzoho/> */}
{/* <Sectionpage/> */}
{/* <Loginzoho/> */}
{/* <Homecards/> */}
 <Routes>
    <Route path='/' element={<Registerzoho/>}/>
    <Route path='/SectionPage' element={<Loginzoho/>}/>
  </Routes>
    </>
  )
}
export default App;