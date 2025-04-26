import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import HomePage from './Homeapage';
import About from './components/About';
import HowItWorks from './components/howitworks';
import  DistributorPanel from './pages/Distributor/Dashboard';
import List from './pages/Provider/Listing';
import ProvidersList from './pages/Provider/ProviderList';
function App() {
  return (
    <Router>
      <div className="flex">
      
        <div className="flex-1">
         
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/provider" element={<ProvidersList />} />
            <Route path="/distributor/dashboard" element={< DistributorPanel />} />
            <Route path="/distributor/dash"element={<List />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/distributor/register" element={<RegisterDistributor />} />
            <Route path="/distributor/login" element={<LoginDistributor />} />
            <Route path="/receiver/register" element={<RegisterReceiver />} />
            <Route path="/receiver/login" element={<LoginReceiver />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-donation" element={<CreateDonation />} />
            <Route path="/select-ngo" element={<NGOSelection />} />
            <Route path="/map" element={<MapView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
