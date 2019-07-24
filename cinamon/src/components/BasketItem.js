import React from 'react';
import './BasketItem.css';
import { observer } from 'mobx-react';

const BasketItem = ({ item, onAdd, onTake, onCancel }) => {
  return (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={() => onAdd(item.name)}>
        증가
      </div>
      <div className="return" onClick={() => onTake(item.name)}>
        감소
      </div>
      <div className="cancel" onClick={() => onCancel(item.name)}>
        취소
      </div>
    </div>
  );
};

export default observer(BasketItem);
