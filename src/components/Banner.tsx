import React from 'react';
import { styled } from 'styled-components';
import time from '../svgs/Time.svg';
import cellular from '../svgs/Cellular.svg';
import wiFi from '../svgs/Wi-Fi.svg';
import battery from '../svgs/Battery.svg';

const Wapper = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.white100};
`

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0px 12px 29.5px;
`

const Remain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 17.16px 14.5px 15.34px 0;
`

const Banner = () => {
  return (
    <Wapper>
      <Time>
        <img src={time} alt='time'/>
      </Time>
      <Remain>
        <img src={cellular} alt='cellular'/>
        <img src={wiFi} alt='wiFi'/>
        <img src={battery} alt='battery'/>
      </Remain>
    </Wapper>
  );
};

export default Banner;