import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav, WhatsAppButton, CallButton  } from './components';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  AryaSamajMarriage,
} from './sections';
import ContactUs from './pages/ContactUs';
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

const App = () => {
  return (
    <Router>
      <main className='relative'>
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <section className='xl:padding-l wide:padding-r padding-b'>
                <Hero />
                
              </section>
              <section className='padding'>
                <PopularProducts />
              </section>
              <section className='padding'>
                <AryaSamajMarriage />
              </section>
              <section className='padding-x py-10'>
                <Services />
              </section>
              <section className='padding'>
                <SpecialOffer />
              </section>
              <section className='bg-pale-blue padding'>
                <CustomerReviews />
              </section>
              <section className='padding-x sm:py-32 py-16 w-full'>
                <Subscribe />
              </section>
              
            </>
          } />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>

      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
      <CallButton />
      <WhatsAppButton />
      </main>
    </Router>
  );
};

export default App;
