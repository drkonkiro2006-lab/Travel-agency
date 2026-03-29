import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout'; 
import { ProtectedRoute } from './components/protected/ProtectedRoute';

// Layout & Navigation Helpers
import ScrollToTop from './components/layout/ScrollToTop';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import PackageDetail from './pages/PackageDetail';

// Package/Category Pages
import PackagesPage from './pages/packages/PackagesPage';
import CategoryPage from './pages/packages/CategoryPage';
import PackageDetailPage from './pages/packages/PackageDetailPage';

// Auth & Private Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      {/* Ensures page starts at top on route change */}
      <ScrollToTop />
      
      <Routes>
        {/* PUBLIC LAYOUT GROUP 
          These routes will all share the Glassmorphism Navbar, 
          the Professional Footer, and the Floating WhatsApp button.
        */}
        <Route element={
          <Layout>
            <Outlet />
          </Layout>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-now" element={<Contact />} />
          
          {/* Package Routing */}
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:category" element={<CategoryPage />} />
          <Route path="/packages/:category/:slug" element={<PackageDetailPage />} />
          <Route path="/package/:id" element={<PackageDetail />} />
        </Route>

        {/* AUTH ROUTES 
          Clean pages without the main site navigation.
        */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED DASHBOARD 
          Uses its own internal sidebar/layout logic.
        */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
