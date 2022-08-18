import React from 'react';
// import styles
import './styles/app.scss';
// import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
