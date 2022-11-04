# 원티드 프리온보딩 2-1 4팀

## 배포 링크

[어플리케이션 바로가기](https://pre-onboarding-7th-2-1-4-five.vercel.app/)

# 팀 소개

| 이름         | github                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------ |
| 임거정(팀장) | https://github.com/dgd03146/pre-onboarding-7th-2-1-4                                             |
|              |                                                                                                  |
| 고현수       | https://github.com/movie42/pre-onboarding-7th-2-1-4                                              |
| 김하영       | https://github.com/Fibo4487/wanted-preOnBoarding-7th/tree/master/2-1/default-typescript-cra-main |
| 박라영       | https://github.com/rieulp/pre-onboarding-7th-2-1-4                                               |
| 박호준       | https://github.com/ganeodolu/wanted-pre-onboarding-course/tree/mission2-1/pre-onboarding-7th-2-1-4     |
| 이슬         | https://github.com/seul-dev/pre-onboarding-7th-2-4                                               |
| 조윤정       | https://github.com/yunjjeongjo                                                                   |
| 최지영       | https://github.com/ohtmm/pre-onboarding-7th-2-1-4                                                |

# 환경 설정 및 실행 방법

## 환경설정

1. NodeJS 16.14.2에서 실행하는 것을 권장합니다.

## 설치

```bash
npm ci
```

## 실행

```bash
npm start
```

# 디렉토리 구조

```
📦src
 ┣ 📂Components
 ┃ ┣ 📂CarItem
 ┃ ┣ 📂CarItemList
 ┃ ┣ 📂CarProfile
 ┃ ┣ 📂Category
 ┃ ┣ 📂ItemTag
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📂HeaderBar
 ┃ ┃ ┣ 📂IconBack
 ┃ ┣ 📂ListHeader
 ┃ ┣ 📂ListItem
 ┃ ┗ 📂Tag
 ┣ 📂Pages
 ┃ ┣ 📂Detail
 ┃ ┗ 📂Home
 ┣ 📂Routes
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┣ 📂hooks
 ┃ ┣ 📂styles
 ┃ ┣ 📂types
 ┃ ┣ 📂utils
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

# 동료학습

## Projects

저희는 동료 학습을 프로젝트 진행시 사용된 기술의 이해를 목적으로 진행하고 있습니다.

1. 타입스크립트의 enum 사용과 객체를 as const로 선언하여 key와 value로 사용하는 방법에 대해서 공유했습니다.
2. React Query의 간략한 사용 방법에 대해서 자료를 공유하고 공부 하면서 구현한 뒤에 다시 모여서 서로 질문하고 토론하는 시간을 가졌습니다.
3. 다함께 파트 나누어서 Best 코드를 기반으로 Refactoring 진행하였습니다.

# best practice 선정 이유

## 1. 커스텀 훅을 사용한 데이터 치환

- 서버에서 불러온 데이터를 useChangeDetailData 등의 훅을 사용하여 새로운 오브젝트를 반환하여 컴포넌트에 반영하였습니다.
- 이렇게 설계을 했을 경우 한 곳에서만 데이터를 만드는 방법을 변경하면 여러 컴포넌트에서 반영된다는 장점이 있습니다. 재사용과 유지보수에 유리하다고 생각합니다.

## 2. SEO 구현

- 처음에 react-helmet-async를 사용해서 SEO 구현했습니다. 하지만 배포 후에 정상적으로 동작하지 않는 문제가 있었습니다. 그래서 저희는 network 창을 살펴보았는데 index.html의 정적파일에서는 build 단계에서 들어가있는 기본적인 meta 태그만 들어있었습니다. react-helmet-async는 빌드된 정적 index.html파일에 javascript를 사용하여 meta tag를 주입해줍니다. 하지만 주소를 복사해서 SNS나 블로그에 붙여 넣는 순간에 크롤러가 바라보고 있는 대상은 비어있는 index.html 파일이기 때문에 meta tag가 없다고 생각하여 SEO가 의도한 대로 동작하지 않았습니다.
- 이 문제를 해결하기 위해서는 SSR이나 SSG를 통해서 초기에 받아와야하는 html 정적 파일을 미리 생성해 놓아야 하는 문제가 있습니다.
- pre-rendering 빌드할 때 미리 특정 페이지를 랜더링해서, html파일을 만들어 두는 방법입니다. react-snap 라이브러리를 통해 해당 라우팅 경로를 지정해주는 방법인데 SNS나 검색엔진의 크롤러가 클라이언트에서 렌더링을 하지 않아서 helmet 등으로 지정한 header 관련 정보는 물론 페이지 내용까지 가져가지 못하는 문제가 발생였습니다.
- React 공식문서에서는 [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html#gatsby-focus-wrapper)를 사용하여 이 문제를 해결할 수 있다고 하여 express 서버를 열은 뒤 같은 폴더 내 html파일을 express.static()으로 사용하여 정적 html을 보내주는 서버를 열어 Helmet.renderStatic() 및 ReactDom.renderToString()으로 HTTP "content-type/text-html"으로 넣어 pre-rendering을 구현을 시도했습니다.
- 그러나 배포 단계에서는 express를 동시에 여는 방법이 리눅스 환경에서 컴퓨팅을 지원해주는 배포를 해줘야 했기 때문에 vercel, netlify 등과 같은 환경에서는 같은 폴더 내에서 여는 방법이 없어 백엔드와 진행하는 프로젝트와 적합하다고 판단하였습니다.

## 3. React Query를 활용한 데이터 호출

- query key 배열에 segment와 fuelType를 넣은 후 key 변화를 감지하여 API로부터 데이터를 가져왔습니다.
- queryClient에 옵션을 지정하여 useQuery마다 옵션을 넣지 않고 통합적으로 관리하도록 하였습니다.
- staleTime과 cacheTime을 옵션으로 사용하여 동일한 호출은 기존 값을 활용하도록 하였습니다.
- select 옵션을 활용하여 필터된 데이터를 캐시하여 활용하였습니다.

## 4. 에러와 로딩 처리

- 에러의 경우, NotFound 페이지뿐만 아니라 다른 에러가 발생할 경우 별도 페이지를 제공하였습니다. 에러 처리는 React Query와 Axios를 함께 사용하여 해결했습니다. 왜냐하면 자바스크립트에서 제공하는 기본 Error 타입은 에러 처리를 하는데 어려움이 있기 때문입니다. 그래서 React Query 블로그에서 제공하는 에러 처리 방법을 참조하여 AxiosError를 사용해서 에러 처리를 하였습니다.
- 로딩의 경우, 데이터를 처음 불러올 때, 스크롤에 따라 데이터를 추가적으로 불러올 때 로딩 스피너를 보여줌으로써 사용자 편의성을 제공하였습니다.
- 그 밖에 Error 바운더리나 Suspend를 사용하여 전역 에러 처리나 로딩 처리를 할 수 있다는 것을 학습하였습니다.

## 5. 공통 헤더

- children을 받아 전체 viewport를 감싸는 layout에 헤더를 배치하는 방식보다는, react-router-dom의 outlet 기능으로 헤더 이외 레이아웃 path에 해당하는 컴포넌트를 띄워주어 헤더 컴포넌트가 리렌더링이 되지 않도록 했습니다
- pathname을 확인해서 pathname이 `/`이 아니면 뒤로가기 버튼을 추가하는 방식으로 헤더를 재사용했습니다.

## TypeScript

- enum 사용을 하려고 했지만 Typescript의 enum에 불편한 점이 있었습니다. 이놈은 "이놈"이어야하는데 이놈이 0과 같은 숫자로 표기되어서 다른 곳에서 사용하기가 어렵습니다.
- 그래서 객체를 `as const`로 선언한 후 객체의 key와 value를 union 타입으로 추출해서 사용했습니다.

# 사용 라이브러리

### production

- styled-components
  - 팀 원 모두가 JS-Style로 사용하기로 하여 라이브러리 통일을 위해 사용하였습니다.
- react-router-dom
  - 리액트 상에서 SPA간에 페이지 이동을 보다 편리하게 설계하기 위해서 사용하였습니다.
- tanstack/react-query
  - 데이터 캐싱, 효율적인 에러 처리와 패칭을 위하여 사용하였습니다.
- react-helmet-async
  - SEO 구현을 위하여 사용하였습니다.

### dev

- eslint
- prettier
- husky
