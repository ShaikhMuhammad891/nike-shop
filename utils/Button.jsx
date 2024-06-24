const Button = (props) => {
  const { title } = props;
  return (
    <button className=" text-[#FFFFFF]  bg-[#111111] px-[22.8px] py-[7.5px] font-normal font-helvetica text-[15px] rounded-[26px]">
      {title}
    </button>
  );
};

export default Button;
