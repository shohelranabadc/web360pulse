import React, { useState, useMemo } from 'react';
import { Search, MapPin, User, Phone, Droplet, UserCircle } from 'lucide-react';



// ১. স্যাম্পল ডাটা (পরবর্তীতে এটি API থেকে fetch করবেন)
  const initialDonors = [
    { id: 1, name: "ইকবাল আহমেদ", group: "A+", location: "মিরপুর, ঢাকা", status: "Available", lastDonation: "৩ মাস আগে" },
    { id: 2, name: "সাকিব খান", group: "O+", location: "উত্তরা, ঢাকা", status: "Available", lastDonation: "৫ মাস আগে" },
    { id: 3, name: "জসিম উদ্দিন", group: "B+", location: "চাষাড়া, নারায়ণগঞ্জ", status: "Busy", lastDonation: "১ মাস আগে" },
    { id: 4, name: "ফয়সাল মাহমুদ", group: "AB+", location: "বনানী, ঢাকা", status: "Available", lastDonation: "৬ মাস আগে" },
    { id: 5, name: "জুয়েল রানা", group: "O+", location: "তেজকুনিপাড়া, ঢাকা", status: "Available", lastDonation: "৬ মাস আগে" },
    { id: 6, name: "রাকিব হোসেন", group: "A+", location: "মিরপুর-১, ঢাকা", status: "Available", lastDonation: "৩ মাস আগে" },
  ];

const DonorList = () => {
  

  // ২. সার্চ এবং ফিল্টার স্টেট
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  // ৩. সার্চ লজিক (useMemo ব্যবহার করা হয়েছে পারফরম্যান্সের জন্য)
  const filteredDonors = useMemo(() => {
    return initialDonors.filter(donor => {
      const matchLocation = donor.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchGroup = selectedGroup === "" || donor.group === selectedGroup;
      return matchLocation && matchGroup;
    });
  }, [searchTerm, selectedGroup]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            আমাদের <span className="text-red-600">রক্তদাতা</span> তালিকা
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            জরুরি প্রয়োজনে আপনার নিকটস্থ রক্তদাতার সাথে সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        {/* সার্চ এবং ফিল্টার বার (Functional) */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border mb-10 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="এলাকা লিখে খুঁজুন..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none"
            />
          </div>
          <div className="w-full md:w-48">
            <select 
              className="w-full p-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none font-bold text-red-600"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
            >
              <option value="">সব গ্রুপ</option>
              {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>

        {/* ডোনার কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDonors.length > 0 ? (
            filteredDonors.map(donor => (
              <div key={donor.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                
                {/* ব্লাড গ্রুপ ইন্ডিকেটর */}
                <div className="absolute top-0 right-0 bg-red-600 text-white w-14 h-14 flex items-center justify-center rounded-bl-3xl font-black text-xl">
                  {donor.group}
                </div>

                <div className="mb-6">
                  {/* প্রোফাইল আইকন (Universal) */}
                  <div className="w-14 h-14 bg-red-50 rounded-2xl mb-4 flex items-center justify-center text-red-600">
                    <User size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{donor.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                    <MapPin size={14} className="text-red-500" /> {donor.location}
                  </div>
                </div>

                <div className="space-y-2 mb-6 border-t pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 uppercase font-bold">শেষ রক্তদান:</span>
                    <span className="font-semibold text-gray-700">{donor.lastDonation}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 uppercase font-bold">স্ট্যাটাস:</span>
                    <span className={`font-bold ${donor.status === 'Available' ? 'text-green-500' : 'text-orange-500'}`}>
                      {donor.status}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all">
                  <Phone size={18} /> কল করুন
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-lg">দুঃখিত, এই ফিল্টারে কোনো রক্তদাতা পাওয়া যায়নি।</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default DonorList;