import React from 'react';
import { Outlet } from 'react-router';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;