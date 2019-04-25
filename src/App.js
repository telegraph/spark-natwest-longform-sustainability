import React from 'react';
import './App.css';

import Loader from './components/Loader';
import Header from './components/Header';
import Share from './components/Share';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Pagebody from './components/Pagebody';
import Dropcap from './components/Dropcap';
import Pullquote from './components/Pullquote';
import CTA from './components/CTA';
import Button from './components/Button';
import Title from './components/Title';
import Related from './components/Related';
import Credits from './components/Credits';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Loader />
      <Header>
        <Share />
      </Header>
      <Nav />
      <Hero />
      <Pagebody>
        Pagebody
        <Title />
        <Dropcap />
      </Pagebody>
      <Pullquote>Pullquote</Pullquote>
      <CTA>
        <Button />
      </CTA>
      <Related />
      <Credits />
      <Footer />
    </>
  );
}

export default App;
