import { products } from "../constants";
import { ProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Services
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray pb-8'>
        "At Arya Samaj Mandir, we offer a range of Vedic ceremonies to bring peace, prosperity, and spiritual growth to your life. 
        Book your ceremony today and experience the divine.
        </p>
      </div>


      {/*
        
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
        
        */}
      
      <a href="/blog">
        <section className='max-container flex justify-center flex-wrap gap-9'>
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
        </section>
      </a>
      

    </section>
  );
};

export default PopularProducts;
