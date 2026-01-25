import React from 'react';

const AboutUs = () => {
  const stats = [
    { label: "সক্রিয় রক্তদাতা", value: "৫০০+" },
    { label: "সাফল্যের হার", value: "১০০%" },
    { label: "শহর কভার্ড", value: "২০+" },
    { label: "জরুরি সেবা", value: "২৪/৭" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">আমাদের সম্পর্কে জানুন</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            আমরা একটি মানবিক প্ল্যাটফর্ম যারা রক্তদাতা এবং রক্তগ্রহীতাদের মধ্যে দ্রুত সেতুবন্ধন তৈরি করতে কাজ করি।
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1579154235602-4c079965d131?q=80&w=800" 
              alt="Mission" 
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">আমাদের লক্ষ্য ও উদ্দেশ্য</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              প্রতিটি জীবনের মূল্য আমাদের কাছে অপরিসীম। রক্তের অভাবে যেন কোনো প্রাণ অকালে ঝরে না পড়ে, সেই লক্ষ্যেই আমাদের যাত্রা শুরু। 
              আমরা প্রযুক্তির মাধ্যমে রক্তদাতার খোঁজ পাওয়ার প্রক্রিয়াকে সহজ এবং দ্রুততর করার চেষ্টা করছি।
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="text-red-600 mr-2">✔</span> সম্পূর্ণ বিনামূল্যে রক্তদাতার তথ্য প্রদান।
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-red-600 mr-2">✔</span> জরুরি অবস্থায় দ্রুত সাড়া দান।
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-red-600 mr-2">✔</span> জনসচেতনতা বৃদ্ধি এবং সঠিক তথ্য প্রচার।
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">পেছনের কারিগররা</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Member 1 */}
          <div className="text-center group">
            <div className="relative inline-block mb-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&fit=crop" 
                alt="Founder" 
                className="w-40 h-40 rounded-full object-cover border-4 border-red-100 group-hover:border-red-500 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">আপনার নাম</h3>
            <p className="text-red-600">প্রতিষ্ঠাতা ও প্রধান ডেভেলপার</p>
          </div>

          {/* Member 2 */}
          <div className="text-center group">
            <div className="relative inline-block mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&fit=crop" 
                alt="Co-founder" 
                className="w-40 h-40 rounded-full object-cover border-4 border-red-100 group-hover:border-red-500 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">মারিয়া রহমান</h3>
            <p className="text-red-600">কমিউনিটি ম্যানেজার</p>
          </div>

          {/* Member 3 */}
          <div className="text-center group">
            <div className="relative inline-block mb-4">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&fit=crop" 
                alt="Voluneer" 
                className="w-40 h-40 rounded-full object-cover border-4 border-red-100 group-hover:border-red-500 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">আসিফ হাসান</h3>
            <p className="text-red-600">টেকনিক্যাল সাপোর্ট</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;