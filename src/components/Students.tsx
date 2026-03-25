import React from 'react';
import { BookOpen, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { STUDENTS } from '../constants';

const Students: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">Classroom Roster</h1>
        <p className="text-[#5c605d] text-lg">Curating student literary journeys and borrowing trends for the Autumn Semester.</p>
      </section>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#f3f4f0] p-6 rounded-xl flex flex-col justify-between h-32">
          <span className="text-[10px] uppercase tracking-widest text-[#5c605d] font-bold">Active Readers</span>
          <span className="text-3xl font-bold text-[#2a6c2c]">24 Students</span>
        </div>
        <div className="bg-[#fadcd2] p-6 rounded-xl flex flex-col justify-between h-32">
          <span className="text-[10px] uppercase tracking-widest text-[#705a52] font-bold">Books In Circulation</span>
          <span className="text-3xl font-bold text-[#634e47]">18 Volumes</span>
        </div>
        <div className="bg-[#cfe5ff] p-6 rounded-xl flex flex-col justify-between h-32">
          <span className="text-[10px] uppercase tracking-widest text-[#00558a] font-bold">Return Rate</span>
          <span className="text-3xl font-bold text-[#00578c]">98% Weekly</span>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-[#f3f4f0] rounded-3xl p-2 md:p-4">
        <div className="flex flex-col gap-2">
          {/* Header Labels */}
          <div className="hidden md:grid grid-cols-12 px-6 py-4 text-[10px] uppercase tracking-widest text-[#5c605d] font-bold">
            <div className="col-span-4">Student Identity</div>
            <div className="col-span-4">Current Selection</div>
            <div className="col-span-2">Engagement Status</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {STUDENTS.map((student) => (
            <motion.div 
              key={student.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-12 items-center bg-white p-6 md:px-6 md:py-4 rounded-2xl hover:shadow-sm transition-all group"
            >
              <div className="col-span-4 flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex-shrink-0 overflow-hidden">
                  <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{student.name}</h3>
                  <span className="text-xs text-[#5c605d]">{student.grade} • {student.section}</span>
                </div>
              </div>

              <div className="col-span-4 mb-4 md:mb-0">
                {student.currentBookId ? (
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#705a52]" />
                      <span className="font-medium">The Secret Garden</span> {/* Mock title for now */}
                    </div>
                    <span className="text-xs text-[#5c605d] ml-6">{student.borrowedDate}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#afb3af]" />
                    <span className="text-[#5c605d] italic">No current book</span>
                  </div>
                )}
              </div>

              <div className="col-span-2 mb-6 md:mb-0">
                <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                  student.status === 'Reading' ? 'bg-[#acf4a4] text-[#1b5e20]' :
                  student.status === 'Returned' ? 'bg-[#e6e9e5] text-[#5c605d]' :
                  'bg-[#fa7150] text-white'
                }`}>
                  {student.status}
                </span>
              </div>

              <div className="col-span-2 text-right">
                <button className="bg-gradient-to-br from-[#2a6c2c] to-[#1d5f21] text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:shadow-lg transition-all active:scale-95">
                  Manage
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
