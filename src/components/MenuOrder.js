import React from 'react';
import MenuOrderTemplate from './MenuOrderTemplate';
import MenuItemList from './MenuItemList';
import BasketItemList from './BasketItemList';
import BasketTotal from './BasketTotal';
import MainButton from './MainButton';

const MenuOrder = () => {
  return (
    <MenuOrderTemplate
      items={<MenuItemList />}
      basket={<BasketItemList />}
      total={<BasketTotal />}
      mainButton={<MainButton />}
    />
  );
};

export default MenuOrder;
