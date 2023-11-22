import React from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import search from '../svgs/Search.svg';
import calendarCheck from '../svgs/CalendarCheck.svg';

const Wapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.white100};
  display: flex;
  align-items: center;
  position: relative;
`

const HeaderItems = styled.div`
  height: 34px;
  width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.1em;
  color: ${props => props.theme.glay};
`

const Headline = styled.div`
  border: 1px solid ${props => props.theme.glay};
  border-radius: 30px;
  padding: 6px 12px 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

const PubDate = styled.div`
  border: 1px solid ${props => props.theme.glay};
  border-radius: 30px;
  padding: 6px 12px 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

const Glocations = styled.div`
  border: 1px solid ${props => props.theme.glay};
  border-radius: 30px;
  padding: 6px 12px 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Header = () => {
  const naviagate = useNavigate()
  const onClick = () => {
    naviagate('/filter')
  }

  return (
    <Wapper>
      <HeaderItems>
        <Headline onClick={onClick}>
        <img src={search} alt='search'/>
        전체 헤드라인
        </Headline>
        <PubDate onClick={onClick}>
        <img src={calendarCheck} alt='calendarCheck'/>
          전체 날짜
        </PubDate>
        <Glocations onClick={onClick}>
          전체 국가
        </Glocations>
      </HeaderItems>
    </Wapper>
  );
};

export default Header;