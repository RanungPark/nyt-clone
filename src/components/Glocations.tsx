import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isCountrysAtom } from '../atom';

const GlocationsList = styled.ul`
  white-space: pre-line;
`
const GlocationsItem = styled.li<{clickState: boolean}>`
  margin-right: 6px;
  display: inline-block;
  padding: 6px 12px 4px 12px;
  border-radius: 30px;
  border: 1px solid ${props => props.theme.white60};
  color: ${props => props.clickState ? props.theme.white100 : props => props.theme.black80};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.1em;
  cursor: pointer;
  background-color: ${props => props.clickState ? props.theme.blueSub : 'transparent'};

  &:first-child {
    margin-bottom: 8px;
  }
`

const Glocations = () => {
  const [countrys, setCountrys] = useRecoilState(isCountrysAtom);

  const handleCountryChagne = (id: string) => {
    const updatedCountrys = countrys.map(country => ({
      ...country,
      clickState: country.id === id ? !country.clickState : country.clickState,
    }));

    setCountrys(updatedCountrys);
  }

  return (
    <GlocationsList>
     {
      countrys.map((country) => (
        <GlocationsItem 
          key={country.id} 
          clickState={country.clickState}
          onClick={() => handleCountryChagne(country.id)}
        >
          {country.koreanNotation}
        </GlocationsItem>
      ))
     } 
    </GlocationsList>
  );
};

export default Glocations;