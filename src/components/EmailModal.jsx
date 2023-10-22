// EmailModal.js

import React, { useState } from 'react';

const EmailModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email })
    });
    console.dir(await response.json())
    // Handle the response as needed

    // Close the modal
    onClose();
  };

  const handleEmailFieldClick = (e) => {
    // Prevent click events on the email input field from propagating to the modal background
    e.stopPropagation();
  };

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={onClose} // Close modal when clicking outside
        >
          <div
            className="modal-container bg-white p-6 rounded-lg w-96" // Adjust width as needed
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
          >
            <button className="absolute top-2 right-2" onClick={onClose}>
              Close
            </button>
            <h2 className="text-3xl font-serif font-bold mb-6 mt-2"> {/* Changed font and added more Y-padding */}
              Don't Miss Out, Join the Insiders Club
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6"> {/* Added more padding */}
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  onClick={handleEmailFieldClick}
                  className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-400 placeholder-gray-400"
                  placeholder="Your email"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white w-full rounded-lg py-3 transition duration-300 ease-in-out"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailModal;
