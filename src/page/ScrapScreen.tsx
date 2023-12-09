import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { ScrapsState } from '../atom';
import ScrapCard from '../components/ScrapCard';

const Wrapper = styled.div`
  height: 596px;
  padding: 20px;
  overflow: scroll;
  & {
    -ms-overflow-style: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ScrapScreen = () => {
  const scraps = useRecoilValue(ScrapsState);

  return (
    <Wrapper>
      <Cards>
        {
          scraps.map(scrap => <ScrapCard 
            scrap={scrap}
            key={scrap._id}
          />)
        }
      </Cards>
    </Wrapper>
  );
};

export default ScrapScreen;