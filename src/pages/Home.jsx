import React from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

const Home = () => (
  <>
    <Helmet>
      <title>Natural Flow Roofing Services</title>
      <meta name="description" content="Experienced roofing and UPVC services" />
      <meta name="keywords" content="company, services, roofing, burton, burton-on-trent, roof" />
      <link rel="canonical" href="https://naturalflowroofing" />

      {/* OpenGraph for social sharing */}
      <meta property="og:title" content="Natural Flow Roofing Services" />
      <meta property="og:description" content="Learn more about our company and what we do." />
      <meta property="og:type" content="website" />
    </Helmet>
    <Navbar />
    <Hero />
    <Services />
    <AboutUs />
    <Contact />
  </>
);

export default Home;