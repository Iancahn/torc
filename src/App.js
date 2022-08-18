import React from 'react';
import './App.css';
// import components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
