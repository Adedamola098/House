import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Hero from './Hero';
import Department from './Department';
import Doctor from './Doctor';
import About from './About';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="department" element={<Department />} />
            <Route path="doctor" element={<Doctor />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
