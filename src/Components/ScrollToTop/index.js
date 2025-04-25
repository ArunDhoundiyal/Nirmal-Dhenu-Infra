import {useState, useEffect} from 'react';
import {ScrollToTopButton, ArrowIcon} from './styledComponents';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  
    const listenToScroll = () => {
      const windowScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      setIsVisible(windowScroll > 500);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
  
      return () => {
        window.removeEventListener("scroll", listenToScroll);
      };
    }, []);
      return(
        isVisible && (
        <ScrollToTopButton onClick={scrollToTop}>
            <ArrowIcon/>
        </ScrollToTopButton>
        )
    )
}

export default ScrollToTop