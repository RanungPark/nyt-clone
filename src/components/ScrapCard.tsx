import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import starSub from "../svgs/StarSub.svg";
import starFill from "../svgs/StarFill.svg";
import { useRecoilState } from "recoil";
import { IScrap, ScrapsState } from "../atom";

const Wrapper = styled.li`
  background-color: ${(props) => props.theme.white90};
  border-radius: 8px;
  padding: 10px 20px;
  & {
    gap: 8px;
  }
`;

const CardFirstBox = styled.div`
  width: 295px;
  display: flex;
  justify-content: space-between;
  gap: 11px;
  margin-bottom: 8px;
`;

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
`;

const StarBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CardSecondBox = styled.div`
  width: 295px;
  display: flex;
  justify-content: space-between;
  max-height: 20px;
  align-items: center;
`;

const Writer = styled.div`
  display: flex;
  gap: 8px;
`;

const Source = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80px;
  line-height: 20px;
  letter-spacing: -0.1em;
`;

const Byline = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 110px;
  line-height: 20px;
  letter-spacing: -0.1em;
`;

const PubDate = styled.div`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.08em;
  white-space: nowrap;
`;

const ScrapCard = ({ scrap }: { scrap: IScrap }) => {
  const [scraps, setScraps] = useRecoilState(ScrapsState);

  const { web_url, headline, source, byline, formattedDate, _id, Star } = scrap;

  const handleStarFillClick = () => {
    const updatedScrap = scraps.filter((item) => item._id !== _id);
    setScraps(updatedScrap);
    localStorage.setItem("isScraps", JSON.stringify(updatedScrap));
  };

  const handleStarSubClick = () => {
    setScraps((prev) => [
      ...prev,
      {
        web_url,
        headline,
        source,
        byline,
        formattedDate,
        _id,
        Star,
      },
    ]);
    localStorage.setItem(
      "isScraps",
      JSON.stringify([
        ...scraps,
        {
          web_url,
          headline,
          source,
          byline,
          formattedDate,
          _id,
          Star,
        },
      ])
    );
  };

  return (
    <Wrapper>
      <CardFirstBox>
        <Headline>
          <Link to={web_url}>{headline}</Link>
        </Headline>
        {Star ? (
          <StarBox onClick={handleStarFillClick}>
            <img key={_id} src={starFill} alt="starFill" />
          </StarBox>
        ) : (
          <StarBox onClick={handleStarSubClick}>
            <img key={_id} src={starSub} alt="starSub" />
          </StarBox>
        )}
      </CardFirstBox>
      <CardSecondBox>
        <Writer>
          <Source>{source}</Source>
          <Byline>{byline}</Byline>
        </Writer>
        <PubDate>{formattedDate}</PubDate>
      </CardSecondBox>
    </Wrapper>
  );
};

export default ScrapCard;
