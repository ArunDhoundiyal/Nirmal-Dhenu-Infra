// AOSWrapper.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    
    AOS.init({
      duration: 2000,  
      once: false,      
    });
  }, []);

  return <div>{children}</div>;
};

export default AOSWrapper;
