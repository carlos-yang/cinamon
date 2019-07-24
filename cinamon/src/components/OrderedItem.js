import React from 'react';

const OrderedItem = ({ name, price }) => {
  return (
    <div className="OrderedItem">
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
};

export default OrderedItem;
