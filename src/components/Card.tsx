import React from 'react';
import styled from 'styled-components';
import { IDocs } from '../libs/api';
import { Link } from 'react-router-dom';
import starSub from '../svgs/StarSub.svg';
import starFill from '../svgs/StarFill.svg';


const Wapper = styled.li`
  background-color: ${props => props.theme.white90};
  border-radius: 8px;
  padding: 10px 20px;
  & {
    gap: 8px;
  }
`

const CardFirstBox = styled.div`
  width: 295px;
  display: flex;
  justify-content: space-between;
  gap: 11px;
  margin-bottom: 8px;
`

const Headline = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1em;
  max-height: 56px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const StarBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const CardSecondBox = styled.div`
  width: 295px;
  display: flex;
  justify-content: space-between;
  max-height: 20px;
  align-items: center;
`

const Writer = styled.div`
  display: flex;
  gap: 8px;
`

const Source = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80px;
  line-height: 20px;
  letter-spacing: -0.1em;
`

const Byline = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 110px;
  line-height: 20px;
  letter-spacing: -0.1em;
`

const PubDate = styled.div`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.08em;
  white-space: nowrap;
`
const Card = ({doc}:{doc :IDocs}) => {

  const originalDateStr = doc.pub_date
  let formattedDate
  if(originalDateStr){
    const originalDate = new Date(originalDateStr)
    formattedDate = originalDate.toLocaleDateString("en-us", {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).replaceAll("/",".") + '. (' + originalDate.toLocaleDateString('en-US', {weekday: 'short'}) + ')'
  }

  return (
    <Wapper>
      <CardFirstBox>
        <Headline>
          <Link to={doc.web_url}>
            {doc.headline.main}
          </Link>
        </Headline>
        <StarBox>
          <img src={starSub} alt='starSub'/>
        </StarBox>
      </CardFirstBox>
      <CardSecondBox>
        <Writer>
          <Source>{doc.source}</Source>
          <Byline>{doc.byline.original}</Byline>
        </Writer>
        <PubDate>{formattedDate}</PubDate>
      </CardSecondBox>
    </Wapper>
  );
};

export default Card;