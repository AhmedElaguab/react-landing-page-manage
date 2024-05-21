import { useState } from 'react';

import BgPattern from './assets/images/bg-tablet-pattern.svg';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import SimplifySection from './components/SimplifySection';
import Footer from './components/Footer';

function App() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const closeNavbar = () => setShowNavbar(false);
  const openNavbar = () => setShowNavbar(true);
  return (
    <div
      className="relative"
      onKeyUp={e => {
        if (e.code === 'Escape') closeNavbar();
      }}
    >
      <img
        className="absolute -z-10 -top-28 -right-28"
        src={BgPattern}
        alt="background pattern"
      />
      <Header
        showNavbar={showNavbar}
        onOpenNavbar={openNavbar}
        onCloseNavbar={closeNavbar}
      />
      <main className="px-4">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <SimplifySection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
