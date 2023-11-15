import React from 'react';
import { Outlet } from 'react-router';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';
import {styled} from 'styled-components';

const Wapper = styled.div`
  width: 375px;
  height: 812px;
  border-radius: 30px;
  background-color: ${props => props.theme.bgColor};
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.5);
  overflow: hidden;
`

const App = () => {
  return (
    <Wapper>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </Wapper>
  );
};

export default App;