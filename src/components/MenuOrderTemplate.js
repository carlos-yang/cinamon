import React from 'react';
import './MenuOrderTemplate.css';

const MenuOrderTemplate = ({ items, basket, total, mainButton }) => {
  return (
    <React.Fragment>
      <div className="MenuOrderTemplate">
        <div className="items-wrapper">
          <h2>메뉴</h2>
          {items}
        </div>
        <div className="basket-wrapper">
          <h2>주문</h2>
          {basket}
          {total}
        </div>
      </div>
      <div className="button-wrapper">{mainButton}</div>
    </React.Fragment>
  );
};

export default MenuOrderTemplate;
