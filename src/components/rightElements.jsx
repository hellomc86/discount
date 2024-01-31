import { IoClose } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import TextWithDifferentOpacity from "../utils/TextOpacity";

const RightElement = () => {
      return (
    
      <div className='rightEl'>
        
        <div className="ShopButton">
          <div id="shopNow" className="shopNow"  >
          <TextWithDifferentOpacity text={"Shop now"} />
            </div>
        </div>
        
        <div className="headerCloseButton">
          <IoClose style={{color:"gray"}} />
        </div> 
        <div className="headerMenuButton">
          <GoChevronRight style={{color:"gray"}} />
        </div>        
      </div>
    );
  };
  
  export default RightElement;