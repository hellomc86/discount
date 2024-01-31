import { IoClose } from "react-icons/io5";
import IMAGES from "../../images/images";
import TextWithDifferentOpacity from "../utils/TextOpacity";

import couponStates from '../constants/couponStates';

const CuponCardContent = ( {isVisible, setIsVisible} ) => {
  return (
    <div className={"cuponCard " + ((isVisible === couponStates.VISIBLE) && "smooth-appear-visible")}>
      <img src={IMAGES.image2} />
      <div className="closeIcon" onClick={()=> { setIsVisible(couponStates.CLOSED); }}>
      <IoClose style={{color:"gray"}} />
      </div>
      <div className="textInfo">
      
        <div className="BlackFriday">Black Friday</div>
        <div className="discount"><TextWithDifferentOpacity text={"10%OFF"} /></div>
        <div className="usageDate">
          Use code <span style={{ fontWeight: 500, color: "#D7A830" }}>
            10FRIDAY </span>
          at checkout
        </div>
        <div className="ShopNowWrap">
          <div className="ShopNowText">Shop now through Monday</div>
        </div>
      </div>
    </div>
  );
};

export default CuponCardContent;
