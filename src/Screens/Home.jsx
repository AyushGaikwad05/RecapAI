import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/HeroSection/Hero';
import Process from '../Components/ProcessSection/Process';
import Metrics from '../Components/Metrics/Metrics';
import Feature from '../Components/FeatureSection/Feature';
import Footer from '../Components/FooterSection/Footer';

const Home = () => {
  return (
    <div className="home-page">

      <nav>
        <Navbar />
      </nav>

      <section>
        <main>
          <Hero />
        </main>
      </section>

      <section>
        <Metrics />
      </section>

      <section>
        <Process />
      </section>

      <section>
        <Feature />
      </section>

      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default Home;