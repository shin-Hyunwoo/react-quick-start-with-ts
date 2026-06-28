import React from 'react';
import { type CountryType } from './App';

type CountryItemPropsType = {
  countryitem: CountryType;
};

// App > CountryList > CountryItem 자식 컴포넌트로 props가 전달됨
const CountryItem = (props: CountryItemPropsType) => {
  let item = props.countryitem;
  return (
    <li className={item.visited ? 'list-group-item active' : 'list-group-item'}>
      {item.country}
    </li>
  );
};

export default CountryItem;
