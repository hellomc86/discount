import { useEffect } from 'react';
import couponStates from '../constants/couponStates';
function GetStateLocalStorage(isVisible, setIsVisible) {
  
  // Effect to load data from local storage on component mount
  useEffect(() => {
    const storedState = localStorage.getItem('myState');
    const strStoredState = storedState ? JSON.parse(storedState) : '';    
    setIsVisible((strStoredState === '1') ? couponStates.VISIBLE : (strStoredState === '2') ? couponStates.CLOSED : couponStates.INIT);       
  }, []);

  useEffect(() => {
    const strStoredState = ((isVisible === couponStates.VISIBLE) ? '1': 
    (isVisible === couponStates.CLOSED) ? '2' : '0');
    localStorage.setItem('myState', JSON.stringify(strStoredState) );
  }, [isVisible])
}

export default GetStateLocalStorage;
