import React from 'react';
import MenuItem from './MenuItem';
import { inject, observer } from 'mobx-react';

const items = [
  {
    name: '아메리카노',
    price: 2200
  },
  {
    name: '더치라떼',
    price: 3500
  },
  {
    name: '플랫화이트',
    price: 3000
  },
  {
    name: '밀크티',
    price: 4000
  }
];

const MenuItemList = ({ onPut }) => {
  const itemList = items.map(item => (
    <MenuItem {...item} key={item.name} onPut={onPut} />
  ));
  return <div>{itemList}</div>;
};

export default inject(({ menu }) => ({ onPut: menu.put }))(
  observer(MenuItemList)
);
