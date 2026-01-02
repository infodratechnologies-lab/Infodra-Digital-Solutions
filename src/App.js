import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;