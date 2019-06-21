import React from 'react';
import './MenuOrderTemplate.css';

const MenuOrderTemplate = ({ items, basket, total }) => {
  return (
    <div className="MenuOrderTemplate">
      <div className="items-wrapper">
        <h2>메뉴</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>주문목록</h2>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default MenuOrderTemplate;
