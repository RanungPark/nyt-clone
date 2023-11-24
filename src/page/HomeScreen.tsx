import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import { IResult, fetchArticleSearch } from '../libs/api';
import Card from '../components/Card';
import Filter from '../components/Filter';
import { useRecoilValue } from 'recoil';
import { isSubmitAtom } from '../atom';

const Wapper = styled.div`
  height: 100%;
  padding: 20px;
  overflow: scroll;
  &{
    -ms-overflow-style: none;
 }
  &::-webkit-scrollbar {
  display: none;
  }
`

const Loading = styled.span`
  font-weight: 600;
`

const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const NoData = styled.div`
  background-color: ${props => props.theme.white90};
  border-radius: 8px;
  padding: 10px 20px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  
  p {
    font-weight: 600;
    color: ${props => props.theme.black100};
  }

  p:last-child {
    font-size: 12px;
    color: ${props => props.theme.black80};
    
  }
`

const HomeScreen = () => {
  const submitDate = useRecoilValue(isSubmitAtom);
  const {countrys, headline, pubDate} = submitDate

  const [page, setPage] = useState(1)

  const selectCountry = countrys.map((country) => (
    country.clickState ? country.name : ''
  ))
  const filterCountry = selectCountry?.filter(Boolean)

  const {isLoading, data, refetch} = useQuery<IResult>('article', () => fetchArticleSearch({
    page,
    headline,
    pub_date: pubDate,
    glocations: filterCountry,
  }))

  useEffect(()=>{
    refetch()
    
  },[submitDate]);

  return (
    <Wapper>
      {
        isLoading ? (<Loading>Loading...</Loading>) : <>
          <Filter />
          {
            !!data?.response?.docs.length ?
            (<Cards>
              {
                data.response.docs.map((doc) => <Card doc={doc} key={doc._id}/>)
              }
            </Cards>) : <NoData>
            <p>검색한 결과가 존재한지 않습니다.</p>
            <p>
              (검색하지 않았을 경우 API를 지속해서 많이 사용하여 잠시 기다린 후 f5를 눌러주세요.)</p>
            </NoData>
          }
        </>
      }
    </Wapper>
  );
};

export default HomeScreen;