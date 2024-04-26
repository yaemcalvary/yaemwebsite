// App.js

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <InfoSection title="Get to know us!" buttonText="LEARN MORE" />
      <InfoSection title="New here? Let us know!" buttonText="PLAN A VISIT" />
      <InfoSection title="Connect with us!" buttonText="GET INVOLVED" />
      <Footer />
    </div>
  );
}

export default App;
