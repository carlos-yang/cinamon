import React from 'react';
import MenuOrderTemplate from './MenuOrderTemplate';
import MenuItemList from './MenuItemList';
import BasketItemList from './BasketItemList';
import BasketTotal from './BasketTotal';

const MenuOrder = () => {
  return (
    <MenuOrderTemplate
      items={<MenuItemList />}
      basket={<BasketItemList />}
      total={<BasketTotal />}
    />
  );
};

export default MenuOrder;
