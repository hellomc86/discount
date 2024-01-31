
const Cupon = () => {
  
  return (
    <div className='cupon'>
      <div className="BlackFriday">
        <span style={{fontWeight:500}} >Black Friday</span>
        <span className="PeriodOfBlackFriday">, 24-27 Nov</span>
      </div>
      <div className="discount">
        10%OFF
      </div>
      <div className="usageDate">
        Use code <span style={{fontWeight:600,  color:"#D7A830"}}>10FRIDAY</span> 
        <span className = "atCheckOut"> at checkout </span>
      </div>
    </div>
  );
};

export default Cupon;