import React from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* ১. লোগো ও বর্ণনা */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-white tracking-tighter">
              WAB360 <span className="text-red-600">PULSE</span>
            </h2>
            <p className="text-sm leading-relaxed">
              আমরা বাংলাদেশের বাইকারদের একটি বৃহৎ পরিবার। আমরা শুধু পথ চলি না, মানুষের প্রয়োজনে রক্ত দিয়ে জীবন বাঁচাতেও সদা প্রস্তুত। আমাদের লক্ষ্য—দ্রুততম সময়ে রক্ত পৌঁছে দেওয়া।
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-red-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* ২. কুইক লিঙ্কস */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">প্রয়োজনীয় লিঙ্ক</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-red-600 transition-colors">হোম পেজ</Link></li>
              <li><Link to="/donors" className="hover:text-red-600 transition-colors">রক্তদাতা খুঁজুন</Link></li>
              <li><Link to="/requests" className="hover:text-red-600 transition-colors">জরুরি রক্তের আবেদন</Link></li>
              <li><Link to="/registration" className="hover:text-red-600 transition-colors">রক্তদাতা হিসেবে নিবন্ধন</Link></li>
            </ul>
          </div>

          {/* ৩. জরুরি যোগাযোগ (Emergency) */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">জরুরি যোগাযোগ</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-600" />
                <span>+৮৮০ ১৭০০-০০০০০০</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-600" />
                <span>support@wab360pulse.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 shrink-0" />
                <span>ঢাকা, বাংলাদেশ (বাইকার কমিউনিটি হাব)</span>
              </li>
            </ul>
          </div>

          {/* ৪. নিউজলেটার বা ছোট মেসেজ */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">সাহায্য করুন</h3>
            <p className="text-sm mb-4 italic text-gray-400">
              "রক্ত দিন, জীবন বাঁচান। আপনার এক ব্যাগ রক্ত একটি পরিবারের হাসি ফিরিয়ে আনতে পারে।"
            </p>
            <div className="bg-red-600/10 border border-red-600/20 p-4 rounded-xl">
              <p className="text-xs text-red-500 font-bold uppercase mb-1">সতর্কবার্তা</p>
              <p className="text-[11px] leading-tight text-gray-400">
                রক্তদানের আগে দাতার শারীরিক সুস্থতা নিশ্চিত করুন। কোনো প্রকার আর্থিক লেনদেন থেকে বিরত থাকুন।
              </p>
            </div>
          </div>

        </div>

        {/* নিচের কপিরাইট অংশ */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© ২০২৬ WAB360 PULSE. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-600 fill-red-600" /> by 
            <span className="text-white font-bold ml-1">WAB360 Tech Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;