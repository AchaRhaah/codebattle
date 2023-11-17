import image1 from "../appointment/images/img1.jpg";

const aptStyles = {
  //    color: "blue",
  //    fontSize: "16px",
  //    border: "1px solid black",
  // Add more styles as needed
  margin: "10px",
};

const Appoitment = () => {
  return (
    <div style={aptStyles}>
      <img src={image1}></img>
    </div>
  );
};

export default Appoitment;
