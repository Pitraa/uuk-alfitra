import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import EventCard from './component/eventCard';
import RegistrationForm from './component/registrationForm';
import Footer from './component/footer';
import CheckoutPage from './component/checkoutPage';

const HomePage = () => (
  <div style={{ marginTop: '50px', padding: '20px' }}>
    <EventCard />
    <RegistrationForm />
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
