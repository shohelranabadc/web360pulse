import React from 'react';
import { X, Send, User, Phone, Mail, Bike } from 'lucide-react';

const RegistrationModal = ({ isOpen, onClose, eventTitle }) => {
  // যদি isOpen false হয়, তবে কিছুই রেন্ডার হবে না
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনার সাবমিট লজিক থাকবে
    alert(`ধন্যবাদ! "${eventTitle}" ইভেন্টের জন্য আপনার রেজিস্ট্রেশন সফল হয়েছে।`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* ব্যাকগ্রাউন্ড ওভারলে (ক্লিক করলে মডাল বন্ধ হবে) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* মডাল বক্স */}
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* ক্লোজ বাটন */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-red-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* মডাল হেডার */}
        <div className="bg-red-600 p-8 text-white">
          <h2 className="text-2xl font-bold mb-1">ইভেন্ট রেজিস্ট্রেশন</h2>
          <p className="text-red-100 text-sm opacity-90 line-clamp-1">
            ইভেন্ট: {eventTitle}
          </p>
        </div>

        {/* রেজিস্ট্রেশন ফর্ম */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          
          {/* নাম ইনপুট */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <User size={16} className="text-red-600" /> আপনার সম্পূর্ণ নাম
            </label>
            <input 
              type="text" 
              required
              placeholder="উদা: আব্দুল্লাহ আল মামুন"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition"
            />
          </div>

          {/* মোবাইল নম্বর */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <Phone size={16} className="text-red-600" /> মোবাইল নম্বর
            </label>
            <input 
              type="tel" 
              required
              placeholder="017XXXXXXXX"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition"
            />
          </div>

          {/* বাইক মডেল (ঐচ্ছিক - যেহেতু আপনাদের রাইডার কমিউনিটি) */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <Bike size={16} className="text-red-600" /> বাইক মডেল (যদি থাকে)
            </label>
            <input 
              type="text" 
              placeholder="উদা: Yamaha R15 V3"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition"
            />
          </div>

          {/* সাবমিট বাটন */}
          <button 
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-black transition-all shadow-xl shadow-red-200 mt-4"
          >
            <Send size={20} /> রেজিস্ট্রেশন নিশ্চিত করুন
          </button>

          <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
            WAB360 Pulse Community
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;