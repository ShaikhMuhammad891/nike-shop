const Button = (props) => {
  const { title } = props;
  return (
    <button style={{background:"#111111" , color:"#ffffff", padding : "7.5px 21.5px", fontSize : "15px", lineHeight : "24px", borderRadius : "30px" }} className=" font-helvetica">
      {title}
    </button>
  );
};

export default Button;
