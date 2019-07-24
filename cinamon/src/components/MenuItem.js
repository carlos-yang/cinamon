import React from 'react';
import './MenuItem.css';

const MenuItem = ({ name, price, onPut }) => {
  return (
    <div className="MenuItem" onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
};

export default MenuItem;
