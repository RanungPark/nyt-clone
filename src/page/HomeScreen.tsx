import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { styled } from "styled-components";
import { IExtendedResult, fetchArticleSearch } from "../libs/api";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useRecoilValue } from "recoil";
import { ScrapsState, SubmitState } from "../atom";
import { useInView } from "react-intersection-observer";

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

const Loading = styled.span`
  font-weight: 600;
`;

const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NoData = styled.div`
  background-color: ${(props) => props.theme.white90};
  border-radius: 8px;
  padding: 10px 20px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;

  p {
    font-weight: 600;
    color: ${(props) => props.theme.black100};
  }

  p:last-child {
    font-size: 12px;
    color: ${(props) => props.theme.black80};
  }
`;

const HomeScreen = () => {
  const submitDate = useRecoilValue(SubmitState);
  const { countrys, headline, pubDate } = submitDate;

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, refetch } =
    useInfiniteQuery<IExtendedResult>(
      "article",
      ({ pageParam = 1 }) =>
        fetchArticleSearch({
          page: pageParam,
          headline,
          pub_date: pubDate,
          glocations: filterCountry,
        }),
      {
        getNextPageParam: (lastPage) =>
          lastPage.customInfo.page < lastPage.customInfo.total_pages
            ? lastPage.customInfo.page + 1
            : undefined,
      }
    );

  const [pageEnd, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  useEffect(() => {
    refetch();
  }, [submitDate]);

  const selectCountry = countrys.map((country) =>
    country.clickState ? country.name : ""
  );
  const filterCountry = selectCountry?.filter(Boolean);

  return (
    <Wrapper>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <Filter />
          <Cards>
            {data?.pages.map((page) =>
              page?.response?.docs ? (
                page?.response?.docs.map((doc) => (
                  <Card doc={doc} key={doc._id} />
                ))
              ) : (
                <NoData>
                  <p>검색한 결과가 존재하지 않습니다.</p>
                  <p>
                    (검색하지 않았을 경우 API를 지속해서 많이 사용하여 잠시
                    기다린 후 f5를 눌러주세요.)
                  </p>
                </NoData>
              )
            )}
          </Cards>
        </>
      )}
      <div ref={pageEnd} />
    </Wrapper>
  );
};

export default HomeScreen;
