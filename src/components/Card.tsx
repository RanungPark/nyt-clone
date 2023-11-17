import React from 'react';
import styled from 'styled-components';
import { IDocs } from '../api';
import { Link } from 'react-router-dom';

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
  letter-spacing: -0.05em;
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
const Star = styled.svg`
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
  letter-spacing: -0.05em;
`

const Byline = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 110px;
  line-height: 20px;
  letter-spacing: -0.05em;
`

const PubDate = styled.div`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.05em;
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
          <Star width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.86609 14.8508C2.78829 15.2942 3.22586 15.6413 3.6123 15.4427L8.00153 13.1868L12.3908 15.4427C12.7772 15.6413 13.2148 15.2942 13.137 14.8508L12.3072 10.1213L15.8296 6.76462C16.1587 6.45092 15.9883 5.87737 15.5474 5.81472L10.6489 5.11885L8.46476 0.792305C8.26801 0.402565 7.73504 0.402565 7.53829 0.792305L5.35417 5.11885L0.455698 5.81472C0.0147086 5.87737 -0.155692 6.45092 0.173489 6.76462L3.69582 10.1213L2.86609 14.8508ZM7.7707 12.0826L4.08495 13.977L4.7792 10.0197C4.81193 9.83316 4.75039 9.64214 4.61645 9.5145L1.70961 6.7444L5.76192 6.16873C5.92944 6.14494 6.07571 6.03795 6.15473 5.88141L8.00153 2.22308L9.84832 5.88141C9.92735 6.03795 10.0736 6.14494 10.2411 6.16873L14.2934 6.7444L11.3866 9.5145C11.2527 9.64214 11.1911 9.83316 11.2239 10.0197L11.9181 13.977L8.23236 12.0826C8.08676 12.0078 7.91629 12.0078 7.7707 12.0826Z" fill="#6D6D6D"/>
          </Star>
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