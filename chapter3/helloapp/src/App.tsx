import React from 'react';
import CountryList from './CountryList';

// CountryType을 정의
export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};

// <App/> 컴포넌트 : 함수 컴포넌트
const App = () => {
  let list: Array<CountryType> = [
    { no: 1, country: '이집트', visited: false },
    { no: 2, country: '일본', visited: true },
    { no: 3, country: '피지', visited: false },
    { no: 4, country: '콜롬비아', visited: false },
  ];

  // let msg = 'World';
  let msg = '<i>World</i>'; // HTML 문자열을 {} 내에 작성 시 문자열로 인코딩됨
  // 반환값이 있는 함수
  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y}
      </div>
    );
  };

  // 함수 내 반환(return)하는 값이 화면으로 렌더링됨
  return (
    <div className="container">
      {/* Hello World 텍스트를 다른 텍스트로 변경 시 웹 브라우저 화면이 자동 갱신됨 => HMR(Hot Module Replacement) */}
      {/* HMR : 개발 서버가 실행 중인 상태에서도 코드를 수정 시 웹 브라우저는 변경된 모듈을 개발 서버로부터 다운로드하여 화면을 즉시 갱신함 */}
      {/* 리액트에서 동적인 변수나 식을 표현할 때 JSX를 사용해 {}를 사용함 */}
      {/* {}은 '보간법'이라 함 */}
      <h2>Hello {msg}!</h2>
      <hr className="dash-style" />
      {/* {} 내부에는 반환값을 가지는 표현식(expression)이라면 모두 배치 가능 */}
      {/* {} 내부에는 반환값이 없는 if, for문 같은 표현문(statement)는 사용할 수 없음  */}
      {addResult(4, 3)}

      {/* CountryList 컴포넌트를 App 컴포넌트에 렌더링  */}
      <CountryList countries={list} />
    </div>
  );
};

export default App;
