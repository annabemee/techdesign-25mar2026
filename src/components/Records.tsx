import React from 'react';
import { Filter, RotateCcw, BookOpen, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';
import { ACTIVITIES } from '../constants';

const Records: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-4xl font-extrabold tracking-tight mb-2">Records</h2>
        <p className="text-[#5c605d] text-lg">A chronological ledger of classroom literary exchanges.</p>
      </section>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow bg-[#f3f4f0] rounded-xl px-4 py-3 flex items-center gap-3">
          <Filter className="w-5 h-5 text-[#787c78]" />
          <input 
            className="bg-transparent border-none focus:ring-0 w-full text-[#2f3331] placeholder:text-[#afb3af]" 
            placeholder="Search by student or book title..." 
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center px-4 py-2 bg-[#cfe5ff] text-[#00558a] rounded-lg text-sm font-semibold">
            This Week
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-[#e6e9e5] text-[#5c605d] rounded-lg text-sm font-semibold">
            All Categories
          </span>
        </div>
      </div>

      {/* History Log */}
      <div className="space-y-10">
        <div>
          <div className="sticky top-20 bg-[#f9f9f6]/90 backdrop-blur-sm py-2 z-10 mb-4">
            <span className="uppercase tracking-widest text-[10px] font-bold text-[#787c78]">Today, Oct 24</span>
          </div>
          <div className="space-y-4">
            {ACTIVITIES.map((activity) => (
              <motion.div 
                key={activity.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="group flex items-center gap-6 p-5 rounded-2xl bg-white hover:shadow-md transition-all"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  activity.action === 'returned' ? 'bg-[#acf4a4] text-[#1b5e20]' : 'bg-[#fadcd2] text-[#624d45]'
                }`}>
                  {activity.action === 'returned' ? <RotateCcw className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed">
                    <span className="font-bold">{activity.studentName}</span> {activity.action} <span className="font-bold text-[#2a6c2c]">{activity.bookTitle}</span>
                  </p>
                  <p className="text-sm text-[#5c605d] mt-0.5">10:45 AM • {activity.type}</p>
                </div>
                <button className="text-[#afb3af] hover:text-[#2a6c2c] transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#e6e9e5] hover:bg-[#e0e3df] text-[#2f3331] font-bold px-8 py-3 rounded-full transition-all">
          Show older records
        </button>
      </div>
    </div>
  );
};

export default Records;
