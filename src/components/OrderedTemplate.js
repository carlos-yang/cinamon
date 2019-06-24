import React from 'react';
import './OrderedTemplate.css';

const OrderedTemplate = ({ orderedItems, total }) => {
  return (
    <div className="OrderedTemplate">
      <div className="items-wrapper">
        <h2>주문목록</h2>
        {orderedItems}
        {total}
      </div>
    </div>
  );
};

export default OrderedTemplate;
