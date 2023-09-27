
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Product from './components/Product';
import { BrowserRouter, Link, Route, Routes,IndexRoute } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
