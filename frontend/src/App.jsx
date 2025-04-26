import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import RegisterDistributor from './pages/Distributor/RegisterDistributor';
import LoginDistributor from './pages/Distributor/LoginDistributor';
import RegisterReceiver from './pages/Provider/RegisterReceiver';
import LoginReceiver from './pages/Provider/LoginReceiver';
import Dashboard from './Dashboard';
import CreateDonation from './CreateDonation';
import NGOSelection from './NGOSelection';
import HomePage from './HomePage';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import DistributorPanel from './pages/Distributor/Dashboard';
import List from './pages/Provider/Listing';
import ProvidersList from './pages/Provider/ProviderList';

// Wrapper component to handle layout
const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthPage = location.pathname.includes('/login') || location.pathname.includes('/register');
  const isPublicPage = location.pathname === '/about' || location.pathname === '/how-it-works';

  // Don't show Navbar and Sidebar on homepage, auth pages, or public pages
  if (isHomePage || isAuthPage || isPublicPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          
          {/* Authentication Routes */}
          <Route path="/distributor/register" element={<RegisterDistributor />} />
          <Route path="/distributor/login" element={<LoginDistributor />} />
          <Route path="/receiver/register" element={<RegisterReceiver />} />
          <Route path="/receiver/login" element={<LoginReceiver />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-donation" element={<CreateDonation />} />
          <Route path="/select-ngo" element={<NGOSelection />} />
          <Route path="/map" element={<MapView />} />
          
          {/* Distributor Routes */}
          <Route path="/distributor/dashboard" element={<DistributorPanel />} />
          <Route path="/distributor/listings" element={<List />} />
          
          {/* Provider Routes */}
          <Route path="/provider" element={<ProvidersList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
