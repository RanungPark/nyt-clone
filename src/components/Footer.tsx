import React from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { isHomeScreenAtom } from '../atom';
import home from '../svgs/Home.svg';
import homeFill from '../svgs/HomeFill.svg';
import scrap from '../svgs/Scrap.svg';
import scrapFill from '../svgs/ScrapFill.svg';

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
`

const ToHome = styled.div<{isHomeScreen: boolean}>`
  color: ${props => props.isHomeScreen ? props.theme.white100 : props.theme.black80};
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
  };
`

const ToScrap = styled.div<{isHomeScreen: boolean}>`
  color: ${props => props.isHomeScreen ? props.theme.black80 : props.theme.white100};
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
  const [isHomeScreen, setIsHomeScreen] = useRecoilState(isHomeScreenAtom)
  const navigate = useNavigate()

  const handleChangeHomeScreen = () => {
    navigate('/')
    setIsHomeScreen(true)
  } 

  const handleChangeScrapScreen = () => {
    navigate('/scrap')
    setIsHomeScreen(false)
  } 

  return (
    <Wapper>
      <ToHome onClick={handleChangeHomeScreen} isHomeScreen={isHomeScreen}>
        {
          isHomeScreen ? <img src={homeFill} alt='homeFill'/> : <img src={home} alt='home'/>
        }
        <span>
          홈
        </span>
      </ToHome>
      <ToScrap onClick={handleChangeScrapScreen} isHomeScreen={isHomeScreen}>
        {
          isHomeScreen ? <img src={scrap} alt='scrap'/> : <img src={scrapFill} alt='scrapFill'/>
        }
        <span>
          스크랩
        </span>
      </ToScrap>
    </Wapper>
  );
};

export default Footer;