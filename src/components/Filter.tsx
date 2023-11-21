import React from 'react';
import { useLocation} from 'react-router-dom'
import styled from 'styled-components';

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
  height: 500px;
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
`
const Glocations = styled.div`
  width: 295px;
  display:flex;
  flex-direction: column;
  gap: 8px;
`

const Filter = () => {
  const filterMatch = useLocation()

  return (
    <>
    {
      filterMatch.pathname === '/filter' &&
      <Wapper>
        <form>
          <FilterList>
            <Headline>
              <Title>
                헤드라인
              </Title>
              <input 
                type="text" 
                placeholder='검색하실 헤드라인을 입력해주세요.'
              />
            </Headline>
            <PubDate>
              <Title>
                날짜
              </Title>
              <input type="date" 

              />
            </PubDate>
            <Glocations>
              <Title>
                국가
              </Title>
                <ul>
                  <li>대한민국</li>
                  <li>중국</li>
                  <li>일본</li>
                  <li>미국</li>
                  <li>북한</li>
                  <li>러시아</li>
                  <li>프랑스</li>
                  <li>영국</li>
                  <li>북한</li>
                </ul>
            </Glocations>
          </FilterList>
          </form>
        </Wapper>
    }
    </>
  );
};

export default Filter;