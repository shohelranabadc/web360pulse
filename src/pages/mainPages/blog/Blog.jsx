import React from 'react';
import { Link } from 'react-router';

// কার্ডের জন্য আলাদা একটি ছোট কম্পোনেন্ট (Optimization)
const BlogCard = ({ post }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group">
    {/* ... আগের ইমেজ সেকশন ঠিক থাকবে ... */}
    
    <div className="p-6 flex-grow">
      {/* টাইটেলেও লিংক যোগ করা হলো */}
      <Link to={`/blog/${post.id}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
      </Link>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        {post.description}
      </p>
    </div>

    {/* বাটনটি এখন কাজ করবে */}
    <div className="p-6 pt-0 mt-auto">
      <Link 
        to={`/blog/${post.id}`} 
        className="text-red-600 font-bold text-sm flex items-center group/btn cursor-pointer"
      >
        আরও পড়ুন 
        <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
      </Link>
    </div>
  </div>
);

const Blog = () => {
  const posts = [
    {
      id: 1,
      category: "স্বাস্থ্য",
      title: "রক্তদানের ১০টি বিস্ময়কর উপকারিতা",
      description: "নিয়মিত রক্তদান করলে হৃদরোগের ঝুঁকি কমে এবং শরীরের নতুন রক্তকণিকা তৈরিতে সাহায্য করে। এটি আপনার শরীরের আয়রনের ভারসাম্য বজায় রাখে।",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
      date: "২৫ জানুয়ারি, ২০২৬",
      author: "ডা. আকাশ"
    },
    {
      id: 2,
      category: "গাইডলাইন",
      title: "কারা রক্ত দিতে পারবেন আর কারা পারবেন না?",
      description: "রক্তদানের জন্য আপনার ওজন অন্তত ৫০ কেজি এবং বয়স ১৮ থেকে ৬৫ বছরের মধ্যে হতে হবে। এছাড়া কিছু বিশেষ রোগের ক্ষেত্রে রক্তদান থেকে বিরত থাকতে হয়।",
      image: "https://images.unsplash.com/photo-1584362946444-1e7c4f9444d3?auto=format&fit=crop&q=80&w=600",
      date: "২৪ জানুয়ারি, ২০২৬",
      author: "রেদওয়ান আহমেদ"
    },
    {
      id: 3,
      category: "খাদ্যাভ্যাস",
      title: "রক্তদানের আগে ও পরে কী কী খাবেন?",
      description: "রক্তদানের আগে প্রচুর পানি পান করুন এবং আয়রন সমৃদ্ধ খাবার যেমন পালন শাক, কলিজা ইত্যাদি খান। রক্তদানের পর ক্যাফেইন জাতীয় পানীয় পরিহার করুন।",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
      date: "২৩ জানুয়ারি, ২০২৬",
      author: "সাদিয়া ইসলাম"
    },
    {
      id: 4,
      category: "জরুরি",
      title: "বিরল ব্লাড গ্রুপ: বোম্বে ব্লাড গ্রুপ সম্পর্কে জানুন",
      description: "বোম্বে ব্লাড গ্রুপ বিশ্বের অন্যতম বিরল রক্তগ্রুপ। প্রতি ১০ হাজার মানুষের মধ্যে একজনের এই রক্ত দেখা যায়। এই গ্রুপের রক্ত পাওয়ার উপায় নিয়ে আমাদের বিশেষ প্রতিবেদন।",
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&q=80&w=600",
      date: "২২ জানুয়ারি, ২০২৬",
      author: "মিশন রহমান"
    },
    {
      id: 5,
      category: "সচেতনতা",
      title: "থ্যালাসেমিয়া রোগীদের পাশে রক্তদাতাদের ভূমিকা",
      description: "থ্যালাসেমিয়া আক্রান্ত শিশুদের জীবন বাঁচাতে নিয়মিত রক্তের প্রয়োজন হয়। আপনার এক ব্যাগ রক্ত একটি শিশুর মুখে হাসি ফোটাতে পারে।",
      image: "https://images.unsplash.com/photo-1536856789559-1cb63a99c18a?auto=format&fit=crop&q=80&w=600",
      date: "২১ জানুয়ারি, ২০২৬",
      author: "অনিক দেব"
    },
    {
      id: 6,
      category: "লাইফস্টাইল",
      title: "রক্তদানের পর দ্রুত রিকভার করার উপায়",
      description: "রক্ত দেওয়ার পর কয়েক ঘণ্টা বিশ্রাম নেওয়া এবং পুষ্টিকর খাবার গ্রহণ করা জরুরি। ভারী কাজ থেকে বিরত থাকুন এবং অন্তত ৮ গ্লাস পানি পান করুন।",
      image: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=600",
      date: "২০ জানুয়ারি, ২০২৬",
      author: "ফারহানা লতা"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            আমাদের <span className="text-red-600">ব্লগ</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            রক্তদান সম্পর্কে জানুন এবং সচেতন হোন। আপনার ছোট একটি পদক্ষেপ সমাজ পরিবর্তন করতে পারে।
          </p>
          <div className="flex justify-center mt-6">
            <span className="inline-block w-16 h-1.5 bg-red-600 rounded-full"></span>
            <span className="inline-block w-3 h-1.5 bg-red-300 rounded-full ml-2"></span>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;