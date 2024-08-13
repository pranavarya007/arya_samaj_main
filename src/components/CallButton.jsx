import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const CallButton = () => {
  return (
    <a
      href="tel:+919212441177"
      className="fixed bottom-24 right-5 bg-blue-600 text-white p-3 w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50 animate-bounce"
      style={{ fontSize: '1.5rem' }}
    >
      <FontAwesomeIcon icon={faPhone} className="mr-2" />
      
    </a>
  );
};

export default CallButton;
