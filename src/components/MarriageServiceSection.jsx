import React from 'react';

const MarriageServices = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      <div className="container mx-auto px-4">
        <h2 className="text-coral-red text-4xl font-semibold mb-8 text-center">Our Marriage Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Arya Samaj Mandir Marriage */}
          <div className="p-6 border shadow-3xl rounded-[20px] px-10 py-10 bg-white transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Arya Samaj Mandir Marriage</h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
              Experience a traditional Arya Samaj Mandir marriage, steeped in Vedic rituals and spiritual significance. Our ceremonies are simple, dignified, and resonate with the essence of Indian culture.
            </p>
          </div>

          {/* Arya Samaj Marriage Certificate */}
          <div className="p-6 border shadow-3xl rounded-[20px] px-10 py-10 bg-white transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Arya Samaj Marriage Certificate</h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
              Get a legally valid Arya Samaj Marriage Certificate that is recognized across India. This certificate is essential for legal proof of your marriage under the Arya Samaj rituals.
            </p>
          </div>

          {/* Court Marriage */}
          <div className="p-6 border shadow-3xl rounded-[20px] px-10 py-10 bg-white transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Arya Samaj Court Marriage</h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
              We facilitate smooth and hassle-free court marriages, ensuring all legal formalities are handled with care and precision. Perfect for those who prefer a civil union.
            </p>
          </div>

          {/* Marriage Registration */}
          <div className="p-6 border shadow-3xl rounded-[20px] px-10 py-10 bg-white transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Arya Samaj Marriage Registration</h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
              Complete your marriage registration with ease, following all legal requirements. We provide assistance to ensure your marriage is officially recorded and recognized by the law.
            </p>
          </div>

          {/* All Types of Marriages */}
          <div className="p-6 border shadow-3xl rounded-[20px] px-10 py-10 bg-white transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">All Types of Marriages</h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
              We cater to all types of marriages, whether traditional, religious, or civil. Our team ensures that your special day is handled with professionalism and care, tailored to your specific needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarriageServices;
