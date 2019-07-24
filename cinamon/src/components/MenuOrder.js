import React from 'react';
import MenuOrderTemplate from './MenuOrderTemplate';
import MenuItemList from './MenuItemList';
import BasketItemList from './BasketItemList';
import BasketTotal from './BasketTotal';
import MainButton from './MainButton';
import OrderedTemplate from './OrderedTemplate';

const MenuOrder = () => {
  return (
    <React.Fragment>
      <MenuOrderTemplate
        items={<MenuItemList />}
        basket={<BasketItemList />}
        total={<BasketTotal />}
        mainButton={<MainButton />}
      />
      <OrderedTemplate />
    </React.Fragment>
  );
};

export default MenuOrder;
