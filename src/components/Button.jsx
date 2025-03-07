const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  scrollToId,
}) => {
  const handleClick = () => {
    if (scrollToId) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        const yOffset = -80;
        const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-inter text-lg leading-none
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
