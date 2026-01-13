import React from 'react';

const Newsletter = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.youtube.com/';
  };

  return (
    <div className="pb-6 flex justify-center">
      <button
        onClick={handleRedirect}
        className="md:text-3xl sm:text-2xl text-xl font-bold 
                   bg-white text-purple-700 
                   px-8 py-4 rounded-lg 
                   hover:bg-purple-100 hover:scale-105 
                   transition-all duration-300 
                   shadow-lg hover:shadow-xl"
      >
        Sign up for our Newsletter
      </button>
    </div>
  );
};

export default Newsletter;