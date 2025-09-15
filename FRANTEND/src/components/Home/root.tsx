
import Header from './Header';
import Hero from './Hero';
import Videos from './Videos';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Features from './Feature';
import { useState } from 'react';


const Root: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Features />
        <Hero />
        <Videos />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Root;