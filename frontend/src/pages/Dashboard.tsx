import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Card, EmptyState } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isAdmin = user?.role === 'admin';

  const navItems = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'bookings', label: 'My Bookings', icon: 'flight_takeoff', hidden: isAdmin },
    { id: 'manage', label: 'Manage Packages', icon: 'inventory_2', hidden: !isAdmin },
    { id: 'saved', label: 'Saved Destinations', icon: 'bookmark_border', hidden: isAdmin },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <div className="min-h-screen bg-surface flex transition-colors duration-300">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <motion.aside 
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-surface-low dark:dark-depth border-r border-text/5 z-50 flex flex-col p-6 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="font-outfit text-2xl font-light tracking-widest text-text uppercase mb-12 flex items-center justify-between">
          <span>M<span className="text-primary italic">.</span>C.</span>
          <button className="lg:hidden text-text/50" onClick={() => setSidebarOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.filter(item => !item.hidden).map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-primary/10 text-primary font-bold shadow-[inset_3px_0_0_0_var(--primary)]' 
                  : 'text-text/60 hover:text-text hover:bg-text/5 font-light'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-text/10 mt-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-text-on-accent font-bold uppercase">
              {user?.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-text capitalize">{user?.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-text/50">{user?.role}</span>
            </div>
          </div>
          <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-500/10 rounded transition-colors text-sm font-light">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Sign Out
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-y-auto w-full">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-6 bg-surface border-b border-text/5 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="text-text focus:outline-none">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <span className="font-outfit text-xl font-light tracking-widest text-text uppercase">M.C. Dashboard</span>
          <div className="w-6" /> {/* Spacer */}
        </header>

        <div className="p-6 lg:p-12 max-w-6xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-headline text-3xl md:text-5xl text-text mb-2">
              Welcome back, <span className="italic text-primary capitalize">{user?.name}</span>.
            </h1>
            <p className="text-text/60 font-light mb-12">Here is the overview of your {isAdmin ? 'curated platform metrics' : 'curated itineraries'}.</p>
          </motion.div>

          {activeTab === 'overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <p className="text-[10px] uppercase tracking-widest text-text/50 mb-2 font-label">{isAdmin ? 'Total Active Bookings' : 'Upcoming Trips'}</p>
                  <p className="font-headline text-4xl text-text">{isAdmin ? '142' : '0'}</p>
                </Card>
                <Card>
                  <p className="text-[10px] uppercase tracking-widest text-text/50 mb-2 font-label">{isAdmin ? 'Available Packages' : 'Saved Destinations'}</p>
                  <p className="font-headline text-4xl text-text">{isAdmin ? '18' : '3'}</p>
                </Card>
                <Card>
                  <p className="text-[10px] uppercase tracking-widest text-text/50 mb-2 font-label">{isAdmin ? 'Platform Revenue' : 'Loyalty Tier'}</p>
                  <p className="font-headline text-4xl text-text">{isAdmin ? '$4.2M' : 'Silver'}</p>
                </Card>
              </div>

              {/* Conditional Data Table / List */}
              <div>
                <h3 className="font-headline text-2xl text-text mb-6 mt-12">Recent Activity</h3>
                {isAdmin ? (
                  <Card className="p-0 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-text/5 border-b border-text/10">
                          <th className="p-4 text-[10px] uppercase tracking-widest text-text/60 font-label">Client</th>
                          <th className="p-4 text-[10px] uppercase tracking-widest text-text/60 font-label">Package</th>
                          <th className="p-4 text-[10px] uppercase tracking-widest text-text/60 font-label">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-text/5 hover:bg-surface transition-colors cursor-pointer">
                          <td className="p-4 text-sm text-text font-light">Alexander Pierce</td>
                          <td className="p-4 text-sm text-text font-light">Alpine Majesty</td>
                          <td className="p-4 text-sm"><span className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">Confirmed</span></td>
                        </tr>
                        <tr className="border-b border-text/5 hover:bg-surface transition-colors cursor-pointer">
                          <td className="p-4 text-sm text-text font-light">Sophia Vance</td>
                          <td className="p-4 text-sm text-text font-light">Australian Odyssey</td>
                          <td className="p-4 text-sm"><span className="text-accent bg-accent/10 px-2 py-1 rounded text-xs">Pending</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </Card>
                ) : (
                  <EmptyState 
                    icon="luggage" 
                    title="No upcoming bookings" 
                    description="You currently have no scheduled itineraries. Our curators are ready to help you plan your next departure."
                    action={<Button variant="outline" className="mt-2">Browse Packages</Button>}
                  />
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'manage' && isAdmin && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-headline text-2xl text-text">Platform Packages</h3>
                 <Button>Add New</Button>
              </div>
              <Card>
                 <p className="text-text/60 font-light text-sm">Package management interface mapping to /api/packages.</p>
              </Card>
            </motion.div>
          )}
          
          {(activeTab === 'bookings' || activeTab === 'saved') && !isAdmin && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <EmptyState 
                  icon="inventory_2" 
                  title={`No ${activeTab} found`} 
                  description={`Your ${activeTab} will appear here once you engage with our platform.`}
                />
             </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}
