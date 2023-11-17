import React from 'react'
import Navbar from '../../components/input/Navbar'
import Hero from './Hero';
import Footer from './Footer';
import About from "../About/About";
import Statistics from "../Statistics";
import Steps from "../steps/Steps";
import Team from "../team/Team";
export default function Home() {
  return (
    <div>
      <Hero />
      <Statistics />
      <About />
      <Steps />
      <Team />
    </div>
  );
}
