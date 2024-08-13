// src/pages/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="max-w-3xl mx-auto pt-28">
        <h1 className="text-3xl font-semibold font-montserrat text-coral-red mb-9 mt-20 gap-10">Contact Us</h1>
        <p className="text-lg font-montserrat text-gray-600 mb-12">
          We would love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us using the contact form below or through our contact details.
        </p>
        
        <div className="bg-white p-8 shadow-2xl rounded-lg">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-montserrat font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-montserrat font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-montserrat font-medium text-gray-700">Phone</label>
              <input
                type="phone"
                name="Phone Number"
                id="phone"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-montserrat font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            
            
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-montserrat font-medium rounded-md text-white bg-coral-red hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        
      </div>
    </section>
  );
};

export default ContactUs;
