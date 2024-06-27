const Button = (props) => {
  const { title, color, bgcolor, onClick, border, borderColor } = props;
  return (
    <button
      onClick={onClick}
      style={{
        background: bgcolor,
        color: color,
        padding: "7.5px 21.5px",
        fontSize: "15px",
        lineHeight: "24px",
        borderRadius: "30px",
        borderColor: borderColor,
      }}
      className=" font-helvetica border"
    >
      {title}
    </button>
  );
};

export default Button;
