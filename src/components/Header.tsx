import React from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import search from '../svgs/Search.svg';
import calendarCheck from '../svgs/CalendarCheck.svg';
import searchFill from '../svgs/SearchFill.svg';
import calendarCheckFill from '../svgs/CalendarCheckFill.svg';
import { useRecoilValue } from 'recoil';
import { isSubmitAtom } from '../atom';

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
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.1em;
  color: ${props => props.theme.glay};
`
const Headline = styled.div<{booleanHeadline : boolean}>`
  width: 95px;
  border: 1px solid ${props => props.booleanHeadline ? props.theme.blueSub : props.theme.glay};
  color: ${props => props.booleanHeadline ? props.theme.blueMain : props.theme.glay};
  border-radius: 30px;
  padding: 6px 12px 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`

const PubDate = styled.div<{booleanPubDate : boolean}>`
   border: 1px solid ${props => props.booleanPubDate ? props.theme.blueSub : props.theme.glay};
  color: ${props => props.booleanPubDate ? props.theme.blueMain : props.theme.glay};
  border-radius: 30px;
  padding: 6px 12px 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

const Glocations = styled.div<{booleanCountry : boolean}>`
  border: 1px solid ${props => props.booleanCountry ? props.theme.blueSub : props.theme.glay};
  color: ${props => props.booleanCountry ? props.theme.blueMain : props.theme.glay};
  border-radius: 30px;
  padding: 6px 12px 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Header = () => {
  const naviagate = useNavigate()
  const submitData = useRecoilValue(isSubmitAtom);
  const {countrys, headline, pubDate} = submitData

  const selectCountry = countrys.map((country) => (
      country.clickState ? country.koreanNotation : ''
    ))
  const filterCountry = selectCountry?.filter(Boolean)

  const handleClick = () => {
    naviagate('/filter')
  }

  return (
    <Wapper>
      <HeaderItems>
        <Headline onClick={handleClick} booleanHeadline={!!headline}>
          {
            headline ?  <img src={searchFill} alt='searchFill'/> :  <img src={search} alt='search'/>
          }
          {
            headline ? headline : '전체 헤드라인'
          }
        </Headline>
        <PubDate onClick={handleClick} booleanPubDate={!!pubDate}>
          {
            pubDate ? <img src={calendarCheckFill} alt='calendarCheckFill'/>: <img src={calendarCheck} alt='calendarCheck'/>
          }
          {
            pubDate ? pubDate : '전체 날짜'
          }
        </PubDate>
        <Glocations onClick={handleClick} booleanCountry={!!filterCountry.length}>
          {
            filterCountry.length !== 0 ? filterCountry[0] + ' 외 ' + (filterCountry.length - 1) + '개' : '전체 국가'
          }
        </Glocations>
      </HeaderItems>
    </Wapper>
  );
};

export default Header;