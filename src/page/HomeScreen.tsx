import React from 'react';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import { IResult, fetchArticleSearch } from '../api';
import Card from '../components/Card';

const Wapper = styled.div`
  height: 100%;
  padding: 20px;
  overflow: scroll;
  margin-bottom: 74px;
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

const HomeScreen = () => {
  const {isLoading, data} = useQuery<IResult>('article', fetchArticleSearch)

  

  return (
    <Wapper>
      {
        isLoading ? (<Loading>Loading...</Loading>) : <>
          {
            data?.response?.docs ?
            (<Cards>
              {
                data.response.docs.map((doc, index) => <Card doc={doc} key={index}/>)
              }
            </Cards>) : 'api를 지속적으로 많이 사용하여 잠시 기다려주세요'
          }
        </>
      }
    </Wapper>
  );
};

export default HomeScreen;