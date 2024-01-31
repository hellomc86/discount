import { useEffect } from "react";
import couponStates from '../constants/couponStates';

const ScrollFunction = (state, setState) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;   
     
      // Set a threshold value for the scroll position where the component should appear
      const threshold = 108;
     
      if ((state === couponStates.INIT) && (scrollPosition > threshold)) setState(couponStates.VISIBLE);
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [state, setState]);
};
export default ScrollFunction;
