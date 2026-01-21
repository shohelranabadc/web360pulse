import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Calendar, MapPin, Users, ArrowLeft, Send } from 'lucide-react';
import { campaigns } from './data'; // আপনার ডাটা ফাইল থেকে ইমপোর্ট করুন
import RegistrationModal from './RegistrationModal';

const EventDetails = () => {
  const { id } = useParams(); // URL থেকে আইডিটি নিচ্ছে (যেমন: 1)
  const [event, setEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // আইডি অনুযায়ী ইভেন্টটি খুঁজে বের করা
    // useParams থেকে আসা id সবসময় string হয়, তাই parseInt দিয়ে number করে নিচ্ছি
    const selectedEvent = campaigns.find(item => item.id === parseInt(id));
    setEvent(selectedEvent);
  }, [id]);

  if (!event) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">ইভেন্টটি খুঁজে পাওয়া যায়নি!</h2>
        <Link to="/events" className="text-red-600 flex items-center gap-2">
          <ArrowLeft size={20} /> ইভেন্ট লিস্টে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* হিরো সেকশন (ছবিসহ) */}
      <div className="relative h-[400px] md:h-[500px]">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-10 left-0 w-full">
          <div className="container mx-auto px-4">
            <Link to="/events" className="text-white/80 hover:text-white flex items-center gap-2 mb-4 transition-all">
              <ArrowLeft size={20} /> ফিরে যান
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center gap-2 bg-red-600 px-4 py-1 rounded-full text-sm font-bold">
                {event.status}
              </span>
              <span className="flex items-center gap-2"><Calendar size={18}/> {event.date}</span>
              <span className="flex items-center gap-2"><MapPin size={18}/> {event.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* বিস্তারিত বর্ণনা */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* বাম পাশে মেইন ডিটেইলস */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">ইভেন্ট সম্পর্কে</h2>
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                {event.description}
                {"\n\n"}
                {event.details || "অতিরিক্ত বিস্তারিত তথ্য শীঘ্রই যোগ করা হবে।"}
              </p>
            </section>

            {/* গ্যালারি (যদি থাকে) */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">ছবি গ্যালারি</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src={event.image} className="rounded-2xl h-40 w-full object-cover" />
                <div className="bg-gray-100 rounded-2xl h-40 flex items-center justify-center text-gray-400">আরও ছবি আসছে...</div>
              </div>
            </section>
          </div>

          {/* ডান পাশে সাইডবার (অ্যাকশন বাটন) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-gray-900">অংশগ্রহণ করুন</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <Users size={20} className="text-red-600" />
                  <span>১২০+ মানুষ যোগ দিচ্ছে</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={20} className="text-red-600" />
                  <span>সরাসরি উপস্থিত থাকুন</span>
                </div>
              </div>

              {event.status === 'Upcoming' ? (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-2"
                >
                  রেজিস্ট্রেশন করুন <Send size={20} />
                </button>
              ) : (
                <div className="text-center p-4 bg-gray-200 rounded-2xl font-bold text-gray-500">
                  এই ইভেন্টটি শেষ হয়েছে
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* রেজিস্ট্রেশন মডাল */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        eventTitle={event.title}
      />
    </div>
  );
};

export default EventDetails;