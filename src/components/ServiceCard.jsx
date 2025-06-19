const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[200px] bg-white rounded-[20px] shadow-3xl px-8 py-6'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img className="white" src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-worksans text-xl leading-tight font-bold'>
        {label}
      </h3>
      <p className='mt-3 break-words font-inter text-base leading-tight text-slate-gray'>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
