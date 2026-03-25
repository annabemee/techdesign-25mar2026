import React, { useState } from 'react';
import { Search, Filter, CheckCircle, RotateCcw, User, ArrowLeft, HelpCircle, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { STUDENTS, BOOKS } from '../constants';

const Checkout: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [isReturned, setIsReturned] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f9f6] text-[#2f3331] font-sans pb-32">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-[#f9f9f6]/60 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-60 transition-opacity">
            <ArrowLeft className="w-6 h-6 text-[#2a6c2c]" />
            <h1 className="font-bold text-2xl tracking-tight text-[#2a6c2c]">Library Studio</h1>
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-[#e6e9e5] px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#2a6c2c] animate-pulse"></span>
              <span className="text-[#5c605d] font-medium text-sm">Station Alpha</span>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-7xl mx-auto space-y-12">
        {/* Step 1: Who Are You? */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-2">Who are you?</h2>
              <p className="text-[#5c605d] text-lg">Tap your face to start borrowing books.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {STUDENTS.map((student) => (
              <button 
                key={student.id}
                onClick={() => setSelectedStudent(student.id)}
                className={`relative flex flex-col items-center p-4 rounded-[2rem] transition-all duration-300 ${
                  selectedStudent === student.id 
                    ? 'bg-[#acf4a4] ring-4 ring-[#2a6c2c] scale-105 shadow-xl' 
                    : 'bg-white hover:bg-[#f3f4f0] active:scale-95'
                }`}
              >
                <div className={`w-24 h-24 rounded-full overflow-hidden mb-4 transition-all ${
                  selectedStudent === student.id ? 'border-4 border-[#1b5e20] shadow-inner' : 'opacity-80'
                }`}>
                  <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className={`font-bold text-lg ${selectedStudent === student.id ? 'text-[#1b5e20]' : 'text-[#2f3331]'}`}>
                  {student.name.split(' ')[0]} {student.name.split(' ')[1][0]}.
                </span>
                {selectedStudent === student.id && (
                  <div className="absolute -top-2 -right-2 bg-[#2a6c2c] text-white p-1 rounded-full shadow-md">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Return Section */}
        <AnimatePresence>
          {selectedStudent && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-12"
            >
              <div className="bg-[#fadcd2] rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-[#ebcec4]/30">
                {!isReturned ? (
                  <>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-24 bg-[#705a52] rounded-lg shadow-lg flex items-center justify-center text-white transform -rotate-3 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1543004218-ee141104638a?w=100&h=150&fit=crop" 
                          alt="Book" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl text-[#624d45]">Ready to return?</h3>
                        <p className="text-[#6c574f] text-lg">You are currently reading: <span className="font-bold">The Secret History</span></p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsReturned(true)}
                      className="w-full md:w-auto px-10 py-5 bg-[#705a52] text-white rounded-full font-bold text-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3"
                    >
                      <RotateCcw className="w-6 h-6" />
                      Return my book
                    </button>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center w-full py-4 text-center"
                  >
                    <CheckCircle className="w-12 h-12 text-[#2a6c2c] mb-2" />
                    <h3 className="font-bold text-2xl text-[#1b5e20]">Book Returned!</h3>
                    <p className="text-[#5c605d]">Thank you for returning your book.</p>
                  </motion.div>
                )}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Book Selection Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight">Pick a new adventure</h2>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#cfe5ff] text-[#00558a] rounded-full font-bold text-sm">Fantasy</button>
              <button className="px-6 py-2 bg-[#e6e9e5] text-[#5c605d] rounded-full font-bold text-sm">Science</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {BOOKS.filter(b => b.status === 'In Library').map((book) => (
              <motion.div 
                key={book.id}
                whileHover={{ y: -8 }}
                className="group flex flex-col bg-white rounded-[2rem] p-4 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] mb-4 rounded-xl overflow-hidden bg-[#f3f4f0] shadow-md">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#00639f] shadow-sm">New</div>
                </div>
                <h4 className="font-bold text-lg mb-1 line-clamp-1">{book.title}</h4>
                <p className="text-[#5c605d] text-sm mb-4">By {book.author}</p>
                <button className="mt-auto w-full py-4 bg-gradient-to-br from-[#2a6c2c] to-[#1d5f21] text-white rounded-2xl font-bold text-lg shadow-md active:scale-90 transition-transform">
                  Borrow
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-end px-4 pb-6 bg-[#f9f9f6]/80 backdrop-blur-2xl shadow-lg rounded-t-3xl border-t border-black/5">
        <button className="flex flex-col items-center justify-center bg-gradient-to-br from-[#2a6c2c] to-[#1d5f21] text-white rounded-2xl px-6 py-3 scale-110 -translate-y-2 shadow-lg active:scale-90 transition-all">
          <PlusCircle className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Borrow</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#5c605d] p-4 hover:text-[#2a6c2c] transition-all">
          <RotateCcw className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Return</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#5c605d] p-4 hover:text-[#2a6c2c] transition-all">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">My Books</span>
        </button>
      </nav>

      {/* Help FAB */}
      <button className="fixed bottom-28 right-6 w-14 h-14 bg-white text-[#2a6c2c] rounded-full shadow-lg border border-black/5 flex items-center justify-center active:scale-90 transition-transform">
        <HelpCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Checkout;
