import React from 'react'
import Navbar from '../../components/input/Navbar'
import Hero from './Hero';
import Footer from './Footer';
// import About from '../About/About';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Footer />
    </div>
  );
}
