import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import AOSWrapper from './Components/AOSWrapper';
import ScrollTop from './Components/ScrollTop';
import Loader from './Components/Loader';
import './App.css'; 

const Home = lazy(()=> import('./Components/Home'));
const OurTeams = lazy(()=> import('./Components/OurTeams'));
const AboutUs = lazy(()=> import('./Components/AboutUs'));
const Project = lazy(()=> import('./Components/Project'));
const ProjectDetailedPage = lazy(()=> import('./Components/ProjectDetailedPage'));
const Gallery = lazy(()=> import('./Components/Gallery'));
const NotFound = lazy(()=> import('./Components/NotFound'));

const App = () => {
  return(
    <AOSWrapper>
    <BrowserRouter>
      <ScrollTop>
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/project' element={<Project />} />
          <Route path='/project-detail/:id' element={<ProjectDetailedPage />} />
          <Route path='/our-team' element={<OurTeams />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        </Suspense>
      </ScrollTop>
    </BrowserRouter>
    </AOSWrapper>
  );
}

export default App;
