import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { ProtectedRoute } from './components/protected/ProtectedRoute';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import PackagesPage from './pages/packages/PackagesPage';
import PackageDetail from './pages/PackageDetail';
import About from './pages/About';
import Contact from './pages/Contact';

import CategoryPage from './pages/packages/CategoryPage';
import PackageDetailPage from './pages/packages/PackageDetailPage';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Route-level layout logic: We don't render Navbar/Footer inside the Dashboard layout since it has its own Sidebar, 
          but for simplicity, we can do it inside the component or wrap specific pages. 
          To do this cleanly without breaking the existing layout, let's wrap the public pages. */}
      
      <Routes>
        {/* Public Routes with standard Layout */ }
        <Route element={
          <div className="min-h-screen flex flex-col transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-20">
              <Outlet />
            </main>
            <Footer />
          </div>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:category" element={<CategoryPage />} />
          <Route path="/packages/:category/:slug" element={<PackageDetailPage />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-now" element={<Contact />} />
        </Route>

        {/* Auth Routes (No Navbar/Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Routes (Dashboard has its own Layout via Sidebar) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Helper to provide the Outlet directly in App routes
import { Outlet } from 'react-router-dom';

export default App;
