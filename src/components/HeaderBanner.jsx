import IMAGES from '../../images/images'
import Cupon from './cupontext';
import RightElement from './rightElements';


const Header = () => {
  
  return (
    <div className='HeaderBanner'>
      <img src={IMAGES.image1} alt='first image' />
      
      <Cupon />
      <RightElement/>
      
    </div>
  );
};

export default Header;