import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import OurTeams from './Components/OurTeams';
import AboutUs from './Components/AboutUs';
import Project from './Components/Project';
import ProjectDetailedPage from './Components/ProjectDetailedPage';
import Gallery from './Components/Gallery';
import NotFound from './Components/NotFound';
import './App.css'

const App = () => {
  return(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about-us' element={<AboutUs />} />
    <Route path='/project' element={<Project />} />
    <Route path='/project-detail/:id' element={<ProjectDetailedPage/>} />
    <Route path='/our-team' element={<OurTeams />} />
    <Route path='/gallery' element={<Gallery />} />
    <Route path='/*' element={<NotFound />} />
  </Routes>
</BrowserRouter>


    
    
  )
}
export default App