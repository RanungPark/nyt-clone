import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import vector from '../svgs/Vector.svg'
import Glocations from './Glocations';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isCountrysAtom, isHeadlineAtom, isPubDateAtom, isSubmitAtom } from '../atom';

const Wapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
`

const FilterList = styled.div`
  background-color: ${props => props.theme.white100};
  padding: 20px;
  position: absolute;
  top: 166px;
  left: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const Title = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.05em;
  height: 24px;
`

const Headline = styled.div`
width: 295px;
display:flex;
flex-direction: column;
gap: 8px;

input {
  border-radius:8px;
  border: 1px solid ${props => props.theme.glay};
  color: ${props => props.theme.glay};
  padding: 10px 20px;
  font-weight:400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.08em
}
`

const PubDate = styled.div`
  width: 295px;
  display:flex;
  flex-direction: column;
  gap: 8px;

  input[type='date'] {
    position: relative;
    border-radius:8px;
    border: 1px solid ${props => props.theme.glay};
    background: url(../svg/Vector.jpg) no-repeat right 20px center / 16px auto;
    color: ${props => props.theme.glay};
    padding: 10px 0px 10px 20px;
    font-weight:400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.08em;
  }

  input[type='date']::-webkit-clear-button,
  input[type='date']::-webkit-inner-spin-button{
    display: none;
  }

  input[type='date']::-webkit-calendar-picker-indicator  {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }
  
  input[type='date']::before {
    content: attr(data-placeholder); 
    width: 100%;
  }

  input[type='date']:valid::before {
    display: none;
  }
`
const GlocationsBox = styled.div`
  width: 295px;
  display:flex;
  flex-direction: column;
  gap: 8px;
`

const Button = styled.button`
  height: 60px;
  border-radius: 16px;
  background-color: ${props => props.theme.blueMain};
  border: none;
  color: ${props => props.theme.white100};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.1em;
  line-height: 24px;  
  cursor: pointer;
`

const Filter = () => {
  const filterMatch = useLocation()
  const [headline, setHeadline] = useRecoilState(isHeadlineAtom);
  const [pubDate, setPubDate] = useRecoilState(isPubDateAtom);
  const setSubmitDate = useSetRecoilState(isSubmitAtom)
  const countrys = useRecoilValue(isCountrysAtom)

  const navigate = useNavigate()

  const handleHeadlineChagne = (e: React. ChangeEvent<HTMLInputElement>) => {
    setHeadline(e.target.value)
  }

  const handlePubDateChagne = (e: React. ChangeEvent<HTMLInputElement>) => {
    setPubDate(e.target.value)
  }

  const handleButtonClick = () => {
    setSubmitDate({
      headline,
      pubDate,
      countrys: [...countrys],
    })
    navigate('/')
  }


  return (
    <>
    {
      filterMatch.pathname === '/filter' &&
      <Wapper>
          <FilterList>
            <Headline>
              <Title>
                헤드라인
              </Title>
              <input 
                type="text" 
                placeholder='검색하실 헤드라인을 입력해주세요.'
                value={headline}
                onChange={handleHeadlineChagne}
              />
            </Headline>
            <PubDate>
              <Title>
                날짜
              </Title>
              <input
                id='pubDate' 
                type="date" 
                data-placeholder='날짜를 선택해주세요.'
                value={pubDate}
                onChange={handlePubDateChagne}
                required
                style={{background: `url(${vector}) no-repeat right 20px center / 16px auto`}}
              />
            </PubDate>
            <GlocationsBox>
              <Title>
                국가
              </Title>
              <Glocations />
            </GlocationsBox>
            <Button onClick={handleButtonClick}>필터 적용하기</Button>
          </FilterList>
      </Wapper>
    }
    </>
  );
};

export default Filter;