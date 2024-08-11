import { useState } from "react";

import { statistics } from "../constants";
import { Button } from "../components";
import { bigShoe2 } from "../assets/images";
import { logo } from "../assets/images";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const [bigShoeImg] = useState(bigShoe2);

  return (
    <section>
      <Marquee pauseOnHover>
        <div className="w-full rounded-xl flex font-light-bold text-sm cursor-pointer text-coral-red mt-1">
        <span >ओ३म् भूर्भुवः॒ स्व: तत्स॑वितुर्वरे॑ण्यं भ॒र्गो॑ दे॒वस्य॑ धीमहि धियो॒ यो नः॑ प्रचो॒दया॑त्॥</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="w-full rounded-xl flex font-light-bold text-sm cursor-pointer text-coral-red mt-1">
        <span >ओ३म् भूर्भुवः॒ स्व: तत्स॑वितुर्वरे॑ण्यं भ॒र्गो॑ दे॒वस्य॑ धीमहि धियो॒ यो नः॑ प्रचो॒दया॑त्॥</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="w-full rounded-xl flex font-light-bold text-sm cursor-pointer text-coral-red mt-1">
        <span >ओ३म् भूर्भुवः॒ स्व: तत्स॑वितुर्वरे॑ण्यं भ॒र्गो॑ दे॒वस्य॑ धीमहि धियो॒ यो नः॑ प्रचो॒दया॑त्॥</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="w-full rounded-xl flex font-light-bold text-sm cursor-pointer text-coral-red">
          <span className="gap-3">     ओ३म् भूर्भुवः॒ स्व: तत्स॑वितुर्वरे॑ण्यं भ॒र्गो॑ दे॒वस्य॑ धीमहि धियो॒ यो नः॑ प्रचो॒दया॑त्॥</span>
        </div>
      </Marquee>
      
      <section
        id='home'
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
      >
      
      
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>

          {/*
            <p className='text-xl font-semibold font-montserrat text-coral-red'>
            Celebrate Your Sacred Union with Authentic Arya Samaj Marriage
          </p>
          
            */}
            <p className='text-xl font-semibold font-montserrat text-coral-red mb-9'>
            Celebrate Your Sacred Union with Authentic Arya Samaj Marriage
          </p>
          

          <h1 className='mt-0 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold pt-0 max-lg:hidden'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              Call Now To Book
            </span>
            <br />
            
            <span className='text-coral-red inline-block mt-3'>Our</span> Services
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Welcome to Arya Samaj Mandir - Where Ancient Vedic Traditions Meet Modern Convenience. Call now to book 
          </p>

          <span className="animate-bounce">
            <a href="tel:+9212441177"><Button label='Call Now' iconURL={logo} /></a>
          </span>
          


           {/* hero section stats */}
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'> 
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>



        {/* hero section image part */}
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
          <img
            src={bigShoeImg}
            alt='shoe colletion'
            width={1200}
            height={800}
            className='object-contain relative z-8'
          />

          
        </div>
      </section>
    </section>
  );
};

export default Hero;
