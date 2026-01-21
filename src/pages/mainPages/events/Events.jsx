import React from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Droplet,
} from "lucide-react";
import { Link } from "react-router";

const Events = () => {
  const campaigns = [
    {
      id: 1,
      title: "বিশ্ব রক্তদান দিবস স্পেশাল রাইড",
      status: "Upcoming",
      date: "১৪ জুন, ২০২৬",
      location: "হাতিরঝিল, ঢাকা",
      attendees: "১২০+ রাইডার",
      image:
        "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=1000&auto=format&fit=crop",
      description:
        "রক্তদান সচেতনতা বাড়াতে আমরা একটি বিশাল বাইক র‍্যালির আয়োজন করছি। আমাদের সাথে যুক্ত হোন।",
    },
    {
      id: 2,
      title: "ঢামেক জরুরি রক্তদান ক্যাম্পেইন",
      status: "Completed",
      date: "১০ জানুয়ারি, ২০২৬",
      location: "ঢাকা মেডিকেল কলেজ",
      attendees: "৫০ ব্যাগ রক্ত সংগৃহীত",
      image:
        "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1000&auto=format&fit=crop",
      description:
        "সফলভাবে ৫০ ব্যাগ রক্ত সংগ্রহ করা হয়েছে যা জরুরি রোগীদের চিকিৎসায় ব্যবহৃত হচ্ছে।",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* হেডার সেকশন */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            আমাদের <span className="text-red-600">ইভেন্ট</span> ও ক্যাম্পেইন
          </h1>
          <p className="text-gray-600 text-lg">
            আমরা শুধু বাইক চালাই না, আমরা মানবতার সেবায় ক্যাম্পেইন করি। আমাদের
            বিগত এবং আসন্ন ইভেন্টগুলোতে আপনিও যোগ দিতে পারেন।
          </p>
        </div>

        {/* ইভেন্ট লিস্ট */}
        <div className="grid grid-cols-1 gap-12">
          {campaigns.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row hover:shadow-2xl transition-all duration-500 group"
            >
              {/* ছবি সেকশন */}
              <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute top-6 left-6 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg ${
                    event.status === "Upcoming"
                      ? "bg-green-500 text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {event.status}
                </div>
              </div>

              {/* ডিটেইলস সেকশন */}
              <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-red-600 font-bold mb-4">
                  <Droplet size={20} fill="currentColor" />
                  <span className="uppercase tracking-widest text-sm">
                    Campaign Details
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {event.title}
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {event.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-red-50 p-2 rounded-lg text-red-600">
                      <Calendar size={20} />
                    </div>
                    <span className="text-sm font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-red-50 p-2 rounded-lg text-red-600">
                      <MapPin size={20} />
                    </div>
                    <span className="text-sm font-semibold">
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-red-50 p-2 rounded-lg text-red-600">
                      <Users size={20} />
                    </div>
                    <span className="text-sm font-semibold">
                      {event.attendees}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* বিস্তারিত দেখুন - এখন এটি একটি লিঙ্কে রূপান্তরিত */}
                  <Link
                    to={`/events/${event.id}`}
                    className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-black transition-all shadow-lg shadow-red-200"
                  >
                    বিস্তারিত দেখুন <ArrowRight size={20} />
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* নিচের অংশ - গ্যালারি ইনভাইটেশন */}
        <div className="mt-24 bg-gray-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              আমাদের কার্যক্রমের সাথে যুক্ত হতে চান?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              আমাদের প্রতিটি ইভেন্ট সফল হয় আপনাদের মতো স্বেচ্ছাসেবকদের মাধ্যমে।
              স্বতঃস্ফূর্তভাবে অংশগ্রহণ করুন।
            </p>
            <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all">
              যোগাযোগ করুন
            </button>
          </div>
          {/* ডেকোরেশন */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 blur-[120px] opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Events;
