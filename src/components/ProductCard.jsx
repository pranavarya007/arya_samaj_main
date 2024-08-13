const ProductCard = ({ imgURL, name, tagline }) => {
    return (
      <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-10 transition-transform transform hover:scale-105'>
        <div className='w-250 h-250 flex justify-center items-center rounded-full'>
          <img className="rounded-full" src={imgURL} alt={name} width={250} height={250} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold flex justify-center'>
          {name}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray justify-normal'>
          {tagline}
        </p>
      </div>
    );
  };
  
  export default ProductCard;
  