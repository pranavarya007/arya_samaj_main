

const PopularProductCard = ({ imgURL, name, tagline }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        {tagline}
      </p>
    </div>
  );
};

export default PopularProductCard;
