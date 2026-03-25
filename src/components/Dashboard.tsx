import React from 'react';
import { Users, BookOpen, History, ArrowRight, RotateCcw, ShoppingBasket, AlertCircle, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BOOKS, ACTIVITIES } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Welcome back, Professor.</h1>
        <p className="text-[#5c605d] font-medium text-lg">Your classroom library is thriving today. 4 new students added this week.</p>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          icon={<Users className="w-8 h-8" />} 
          title="Total Students" 
          subtitle="Active Readers" 
          value="28" 
          color="bg-[#f3f4f0]" 
          textColor="text-[#2a6c2c]"
        />
        <StatCard 
          icon={<BookOpen className="w-8 h-8" />} 
          title="Checked Out" 
          subtitle="Books in hands" 
          value="14" 
          color="bg-[#2a6c2c]" 
          textColor="text-white"
          dark
        />
        <StatCard 
          icon={<History className="w-8 h-8" />} 
          title="Overdue" 
          subtitle="Action required" 
          value="03" 
          color="bg-[#fadcd2]" 
          textColor="text-[#705a52]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-10">
          {/* Library Collection */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Library Collection</h2>
              <Link to="/books" className="text-[#2a6c2c] font-semibold text-sm flex items-center gap-1 hover:underline">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {BOOKS.slice(0, 4).map((book) => (
                <motion.div 
                  key={book.id}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[2/3] bg-stone-200 rounded-xl mb-3 overflow-hidden shadow-sm">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-bold text-sm truncate">{book.title}</h4>
                  <p className="text-[#5c605d] text-xs">{book.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          {/* Recent Activity */}
          <div className="bg-[#f3f4f0] rounded-3xl p-8">
            <h2 className="text-xl font-bold mb-8">Recent Activity</h2>
            <div className="space-y-8">
              {ACTIVITIES.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    activity.action === 'returned' ? 'bg-[#cfe5ff] text-[#00639f]' :
                    activity.action === 'checked out' ? 'bg-[#acf4a4] text-[#2a6c2c]' :
                    'bg-[#fa7150]/20 text-[#aa371c]'
                  }`}>
                    {activity.action === 'returned' ? <RotateCcw className="w-5 h-5" /> :
                     activity.action === 'checked out' ? <ShoppingBasket className="w-5 h-5" /> :
                     <AlertCircle className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {activity.studentName} {activity.action} <span className="text-[#2a6c2c] italic">{activity.bookTitle}</span>
                    </p>
                    <p className="text-[10px] text-[#5c605d] uppercase tracking-wider font-bold mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-[#e0e3df] rounded-xl font-bold text-sm text-[#5c605d] hover:bg-white transition-colors">
              See all history
            </button>
          </div>

          {/* CTA Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#705a52] text-white p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Grow your collection</h3>
              <p className="text-sm opacity-80 mb-6">Catalog a new addition to the classroom bookshelf in seconds.</p>
              <button className="inline-flex items-center gap-2 bg-white text-[#705a52] px-6 py-2 rounded-full font-bold text-sm">
                Add New Book <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
              <BookOpen className="w-32 h-32" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string; 
  value: string; 
  color: string; 
  textColor: string;
  dark?: boolean;
}> = ({ icon, title, subtitle, value, color, textColor, dark }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`${color} p-8 rounded-3xl flex flex-col justify-between min-h-[220px] cursor-pointer shadow-sm transition-shadow hover:shadow-md`}
  >
    <div>
      <div className={`${textColor} mb-4`}>{icon}</div>
      <h3 className="font-bold text-xl mb-1">{title}</h3>
      <p className={`${dark ? 'opacity-80' : 'text-[#5c605d]'} text-sm`}>{subtitle}</p>
    </div>
    <div className={`text-6xl font-black tracking-tighter ${textColor}`}>{value}</div>
  </motion.div>
);

export default Dashboard;
