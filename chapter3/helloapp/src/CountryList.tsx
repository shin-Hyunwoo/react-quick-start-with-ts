import React from 'react';
import CountryItem from './CountryItem';
// 'CountryType' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled. 에러 발생
// TypeScript 5.0에서 도입된 verbatimModuleSyntax 플래그 때문에 발생 = export된 타입을 import할 때 'type'이라는 것을 명시해야함
import { type CountryType } from './App';

// CountryListPropsType 타입 정의
type CountryListPropsType = {
  countries: Array<CountryType>;
};

// 자식 컴포넌트가 props 데이터를 부모 컴포넌트로부터 전달받음
const CountryList = (props: CountryListPropsType) => {
  // 배열 데이터 list를 map 메서드를 통해 반복적인 렌더링
  // li 요소들의 목록을 '반환'받아 countries 변수에 할당함
  // props 데이터에 접근
  const list = props.countries;
  let countries = list.map((item, index) => {
    return (
      // CountryList에서 자체적으로 배열 데이터를 렌더링하던 것을 CountryItem 컴포넌트를 생성하며 컴포넌트 세분화를 진행
      // 특정 로직에 의해 list의 배열 데이터 중 일부가 변경되었을 경우, CountryItem 중 변경된 데이터를 props로 전달받은 CountryItem 컴포넌트의 렌더링만 진행하면 됨
      <CountryItem
        key={item.no}
        countryitem={item}
        // {} 내 삼항 연산'식'을 사용하여 반환값이 반드시 있도록 함. 삼항 연산식을 사용하지 않으면 미리 보간할 값을 생성해야하는 번거로움이 발생
        // className={item.visited ? 'list-group-item active' : 'list-group-item'}
      />
    );
  });
  // 값이 할당된 countries를 {} 내부에 사용하여 li 요소의 목록을 렌더링함
  return <ul className="list-group">{countries}</ul>;
};

export default CountryList;
