import { bigShoe3 } from "../assets/images";
import { Button } from "../components";

const AryaSamajMarriage = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        Experience the Purity of an   
          <span className='text-coral-red'> Authentic Arya </span>
          <span className='text-coral-red'>Samaj </span> Marriage
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Step into the sacred union of love and spirituality with our Arya Samaj marriage services. 
        Rooted in the timeless wisdom of the Vedas, our ceremonies are simple, pure, and deeply meaningful, 
        embodying the essence of true marital bliss. At Arya Samaj Mandir, we offer an authentic, serene, 
        and spiritually uplifting wedding experience.
        </p>
        
        <div className='mt-11'>
          <a href="/">
            <Button label='View details' />
          </a>
          
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={bigShoe3}
          alt='arya samaj marriage'
          width={800}
          height={600}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default AryaSamajMarriage;
