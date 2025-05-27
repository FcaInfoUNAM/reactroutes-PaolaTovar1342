import './App.css';
import Card from './Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import ContactUs from './ContactUs';
import TeamSection from './TeamSection'; 
import NotFound from './NotFound';

function App() {
  const products = [/* ... tu lista de productos ... */];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
