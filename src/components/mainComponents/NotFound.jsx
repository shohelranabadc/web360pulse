import React from 'react';

import { TriangleAlert } from 'lucide-react'; // একটি ওয়ার্নিং আইকন
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
      <TriangleAlert size={80} className="text-red-600 mb-6" />
      <h1 className="text-6xl font-extrabold text-gray-900 mb-2">৪০৪</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">দুঃখিত, পাতাটি খুঁজে পাওয়া যায়নি!</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        আপনি সম্ভবত ভুল পথে চলে এসেছেন। চিন্তা করবেন না, আমাদের বাইকাররা আপনাকে সঠিক পথে ফিরিয়ে নিয়ে যাবে।
      </p>
      <Link 
        to="/" 
        className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition shadow-lg"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;