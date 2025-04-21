import React from 'react';

const RequestButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-gradient-to-r from-lime-400 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition">
        Request Invite
      </button>
    </div>
  );
};

export default RequestButton;
