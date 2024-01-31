import { useState } from 'react';
import ScrollFunction from '../utils/handleScroll';
import CuponCardContent from './cuponcardContent';
import GetStateLocalStorage from '../utils/getStateLocalStorage';
import couponStates from '../constants/couponStates';
const CuponCard = () => {  
  const [isVisible, setIsVisible] = useState(couponStates.INIT);
    
  GetStateLocalStorage(isVisible, setIsVisible);
  ScrollFunction (isVisible, setIsVisible);
    return (      
      <CuponCardContent isVisible = {isVisible} setIsVisible = {setIsVisible}/>      
    );
  };
  
  export default CuponCard;