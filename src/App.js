import './index.css';
import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Products from './components/products';
import Careers from './components/careers';
import Contact from './components/careers';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
