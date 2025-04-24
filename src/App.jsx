import React from 'react';

//-------------- Import Interne ----------------

import Hero from './sections/Hero';
import Showcase from './sections/Showcase';
import Navbar from './components/Navbar';
import LogoSection from './sections/LogoSection';
import FeatureCard from './sections/FeatureCard';
import Workflow from './sections/Workflow';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCard />
      <Workflow />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
