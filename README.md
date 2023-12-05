## 프로젝트 소개

💁‍♂️New York Times에서 제공하는 API를 가공하여 기사 정보 검색 서비스 클론 코딩 프로젝트 

## 개발 기간

📅 2023-11

## 적용 기술 및 구현 기능

사용한 라이브러리 및 기술 스택을 작성합니다.

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/githubpages-222222?style=for-the-badge&logo=githubpages&logoColor=white">

### 구현 기능

✅ Home

- 최신의 기사를 순서대로 보여줌
- 한 페이지 당 10개의 기사를 보여주며 밑으로 내려갈 때 다음 페이지의 기사가 보여줌
    - 무한 스크롤을 이용하여 기사를 보여줌
    - 해당 API의 page가 명확하지 않아 5페이지로 고정함
- 기사의 헤드라인을 클릭 시 해당 기사의 실제 뉴욕타임스 기사 페이지로 이동함
- 기사의 출처와 기자, 발행일이 추가 정보로 보여짐

![home](https://github.com/RanungPark/nyt-clone/assets/104816866/b60cf8a4-11b6-4954-ad5f-5364762c367d)

✅ Scrap

- Home에서 스크랩하고 싶은 기사의 별을 누를 경우 스크랩 페이지에 해당 기사가 저장됨
- 이곳에 저장된 기사는 해당 별을 눌러 구독을 취소하지 않은 이상 지속적으로 유지됨
    - 화면을 벗어나도 해당 기사는 유지됨

![scrap](https://github.com/RanungPark/nyt-clone/assets/104816866/2683cba3-ae4d-4203-b765-bee9242565de)

✅ Filter

- 헤드라인은 기사의 헤드라인 즉 이름을 적용하는 것으로 Korea를 검색할 경우 Home페이지에 적용한 이름의 기사를 보여줌
- 날짜는 기사의 발행일로 선택한 날짜에 발행한 기사들만 보여줌
- 국가는 해당 국가와 관련된 기사를 보여줌

![filter](https://github.com/RanungPark/nyt-clone/assets/104816866/43705e30-c5cc-447a-a1a5-d5bb2ab64fff)

✅ input date 커스텀

- input date를 커스텀을 통하여 클릭 시 캘린더가 나오며 선택 시 날짜가 적용됨
<img width="82" alt="날짜 선택전" src="https://github.com/RanungPark/nyt-clone/assets/104816866/b8a995d9-2ee2-4f07-8b7f-cfd159568523">

![날짜 선택후](https://github.com/RanungPark/nyt-clone/assets/104816866/feb3616f-6135-409c-8c14-f5b6db20c76d)

✅ filter 적용후 Home 화면

- 필터에서 Korea라고 검색을 진행하였을 경우 Home에서 이름에 korea가 작성된 기사를 최신순으로 보여줌

![filter 적용후 Home 화면](https://github.com/RanungPark/nyt-clone/assets/104816866/e4f66669-ade4-4839-9c45-572d113fd980)
