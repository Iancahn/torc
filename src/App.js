import React from 'react';
import './App.css';
// import components
import Navbar from './components/Navbar';
import Header from './components/Navbar';
import Cards from './components/Navbar';
import Footer from './components/Navbar';


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
