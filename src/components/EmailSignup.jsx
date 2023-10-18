// EmailSignup.js

import React, { useState } from 'react';
import EmailModal from './EmailModal'; // Import the EmailModal component

const EmailSignup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Your right container */}
      <div className="fixed sm:right-64 bottom-8 right-8 sm:top-1/2 transform -translate-y-1/2 ">
        {/* "Open Email Modal" button inside the right container */}
        <div onClick={toggleModal} className='px-4 py-2 bg-blue-500 text-white rounded-full cursor-pointer'>
          Join the insiders!
        </div>
      </div>
      <EmailModal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
};

export default EmailSignup;
