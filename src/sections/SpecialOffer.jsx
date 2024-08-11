import { offer } from "../assets/images";
import { Button } from "../components";
import { logo } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Om'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Additional </span>
          Services
        </h2>
        <p className='mt-4 info-text'>
        At Arya Samaj Mandir, we offer a variety of additional services designed to enrich your spiritual journey 
        and enhance overall well-being. Our Pravachan (Spiritual Discourses) provide deep insights into Vedic teachings, 
        guiding you towards a life of righteousness and inner peace. 
        </p>
        <p className='mt-6 info-text'>
        Through our Yoga and Meditation sessions, reconnect with your mind, body, and soul, promoting mindfulness, stress relief, and holistic health. 
        For those seeking personalized spiritual guidance, our Vedic Counseling offers compassionate advice based on timeless Vedic principles. 
        
        </p>
        
        
        <p className='mt-6 info-text'>
        Participate in our Satsang (Spiritual Gatherings) to immerse yourself in collective prayers, bhajans, 
        and discussions that foster a strong sense of community and spiritual upliftment. 
        Additionally, we are committed to Community Service and Social Welfare, engaging in initiatives that support education, 
        healthcare, and environmental sustainability. Join us in these services to cultivate a deeper connection with the divine 
        and contribute to the betterment of society.
        </p>
        <div className='mt-11 flex flex-wrap gap-4 '>
          <a href="tel:+9212441177">
            <Button className="hover:bg-[#9b2f2f]" label='Book now' iconURL={logo}/>
          </a>
          
          <a href="/">
            <Button
              label='Learn more'
              backgroundColor='bg-white'
              borderColor='border-slate-gray'
              textColor='text-slate-gray'
            />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
