
const TextWithDifferentOpacity = ({ text }) => {
 
  return (
    <div>
      {text.split('').map((char, index) => (
        <span key={index} style={{ opacity: index * 0.1 + 0.5  }}>
          {char}
        </span>
      ))}
    </div>
  );
};


export default TextWithDifferentOpacity;
