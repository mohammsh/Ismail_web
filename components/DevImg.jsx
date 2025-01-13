const DevImg = ({ containerStyles, imgSrc, imgStyle }) => {
  return (
    <div className={containerStyles}>
      <img src={imgSrc} style={imgStyle} alt="Developer Image" />
    </div>
  );
};

export default DevImg;
