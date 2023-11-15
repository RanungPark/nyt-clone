import React from 'react';
import { styled } from 'styled-components';

const Wapper = styled.div`
  background-color: ${props => props.theme.black100};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  gap: 165px;
  position: absolute;
  bottom: 0;
  z-index: 100;
  color: white; // 임시
`

const ToHome = styled.div`
  width: 26px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  span {
    font-size: 8px;
    font-weight: 600;
    line-height: 12px;
    text-align: center;
  }
`

const ToScrap = styled.div`
  width: 26px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  span {
    font-size: 8px;
    font-weight: 600;
    line-height: 12px;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <Wapper>
      <ToHome>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 9.8414V22.351C22 22.6704 21.6812 23.0002 21.3522 23.0002H16.6221C16.3033 23.0002 16.0874 22.7838 16.0874 22.4643V22.3613C16.0874 19.9913 14.1542 18.1571 11.892 18.1571C9.52699 18.1571 7.69666 20.0943 7.69666 22.3613V22.4643C7.69666 22.7838 7.48072 23.0002 7.16195 23.0002H2.64781C2.32905 23.0002 2 22.6807 2 22.351V9.8414C2 8.97583 2.31877 8.2236 2.96658 7.68777L10.1748 1.64936C11.1414 0.783782 12.653 0.783782 13.7224 1.64936L20.9306 7.68777C21.6812 8.2236 22 8.97583 22 9.8414Z" fill="white"/>
      </svg>
      <span>
        홈
      </span>
      </ToHome>
      <ToScrap>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="2" width="18" height="20" rx="2" stroke="#6D6D6D" stroke-width="2"/>
        <path d="M8 7H16M8 11.5H16M8 16H13.2" stroke="#6D6D6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>
        스크랩
      </span>
      </ToScrap>
    </Wapper>
  );
};

export default Footer;