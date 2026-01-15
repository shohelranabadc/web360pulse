import React from 'react'
import { Droplets, MapPin, Calendar, Phone, Clock } from 'lucide-react';

const RequestCard = () => {
     
    // ১. স্যাম্পল ডাটা অ্যারে (ভবিষ্যতে এটি API থেকে আসবে)
  const bloodRequests = [
    {
      id: 1,
      bloodGroup: "B+",
      location: "ঢাকা মেডিকেল, ঢাকা",
      date: "১৬ জানুয়ারি, ২০২৬",
      status: "Urgent",
      reason: "থ্যালাসেমিয়া রোগীর জন্য জরুরি ২ ব্যাগ রক্ত প্রয়োজন।",
      phone: "01700000000"
    },
    {
      id: 2,
      bloodGroup: "O-",
      location: "চট্টগ্রাম জেনারেল হাসপাতাল",
      date: "১৭ জানুয়ারি, ২০২৬",
      status: "Pending",
      reason: "অপারেশনের জন্য ১ ব্যাগ ও-নেগেটিভ রক্ত প্রয়োজন।",
      phone: "01800000000"
    },
    {
      id: 3,
      bloodGroup: "AB+",
      location: "রাজশাহী সদর হাসপাতাল",
      date: "১৮ জানুয়ারি, ২০২৬",
      status: "Urgent",
      reason: "দুর্ঘটনাজনিত কারণে রক্ত প্রয়োজন।",
      phone: "01900000000"
    }
  ];

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        
        {/* সেকশন টাইটেল */}
        <div className='text-center mb-12'> 
          <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
            জরুরি <span className="text-red-600 text-4xl">রক্তের</span> প্রয়োজন
          </h2>
          
          <div className='h-1 w-20 bg-red-600 mx-auto'></div>
          <p className='text-gray-600 max-w-2xl mx-auto mt-5'>
            প্রতিটি রক্তবিন্দু মূল্যবান। আপনার এক ব্যাগ রক্ত আজ কারো প্রাণ বাঁচাতে পারে। জরুরি রিকোয়েস্টগুলো দেখুন এবং সাহায্যের হাত বাড়িয়ে দিন।
          </p>
        </div>

        {/* কার্ড গ্রিড এবং ম্যাপিং */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {bloodRequests.map((request) => (
            <div key={request.id} className='bg-white rounded-3xl border hover:shadow-2xl transition-all duration-300 group'>
              
              {/* কার্ড হেডার */}
              <div className='flex justify-between items-start p-6'>
                <div className='flex gap-4'>
                  <div className='bg-red-50 p-3 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors'>
                    <Droplets size={28} />
                  </div>
                  <div>
                    <p className='text-xs text-gray-500 font-bold uppercase'>Blood Group</p>
                    <h3 className='text-red-600 text-4xl font-black'>{request.bloodGroup}</h3>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  request.status === 'Urgent' ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {request.status}
                </span>
              </div>

              {/* কার্ড বডি */}
              <div className='px-6 space-y-4 text-gray-700'>
                <div className='flex items-center gap-2'>
                  <MapPin size={18} className="text-red-500" />
                  <span className="font-medium text-sm">{request.location}</span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <Clock size={18} className="text-blue-500" />
                  <span>{request.date}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-red-600">
                  <p className='text-[13px] italic text-gray-600 leading-relaxed'>"{request.reason}"</p>
                </div>
              </div>

              {/* কার্ড ফুটার (কল বাটন) */}
              <div className='p-6'>
                <a href={`tel:${request.phone}`} className='w-full bg-gray-900 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all'>
                  <Phone size={18} /> যোগাযোগ করুন
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default RequestCard