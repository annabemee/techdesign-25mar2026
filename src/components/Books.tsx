import React from 'react';
import { Filter, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { BOOKS } from '../constants';

const Books: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#705a52] mb-2 block">Curated Collection</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Library Catalog</h2>
            <p className="text-[#5c605d] mt-3 max-w-xl text-lg">Manage your classroom's literary treasures, track student loans, and discover new growth.</p>
          </div>
          <button className="bg-[#cfe5ff] text-[#00558a] px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-opacity-80 transition-all">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {BOOKS.map((book) => (
          <motion.div 
            key={book.id}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#f3f4f0] shadow-sm">
              <img src={book.cover} alt={book.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5 pointer-events-none"></div>
              <div className="absolute top-3 right-3">
                <span className={`backdrop-blur-sm text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${
                  book.status === 'In Library' ? 'bg-[#acf4a4]/90 text-[#1b5e20]' : 'bg-[#fadcd2]/90 text-[#624d45]'
                }`}>
                  {book.status === 'In Library' ? 'In Library' : `Borrowed by ${book.borrowedBy?.split(' ')[0]}`}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold leading-tight truncate">{book.title}</h3>
              <p className="text-sm text-[#5c605d]">{book.author}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAB for adding book */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-28 right-8 w-16 h-16 bg-[#2a6c2c] shadow-2xl rounded-full flex items-center justify-center text-white z-[60]"
      >
        <Plus className="w-8 h-8" />
      </motion.button>
    </div>
  );
};

export default Books;
