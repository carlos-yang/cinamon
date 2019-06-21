import React from 'react';
import BasketItem from './BasketItem';
import { inject, observer } from 'mobx-react';

const BasketItemList = ({ items, onAdd, onTake, onCancel }) => {
  const itemList = items.map(item => (
    <BasketItem
      item={item}
      key={item.name}
      onAdd={onAdd}
      onTake={onTake}
      onCancel={onCancel}
    />
  ));
  return <div>{itemList}</div>;
};

export default inject(({ menu }) => ({
  items: menu.selectedItems,
  onAdd: menu.add,
  onTake: menu.take,
  onCancel: menu.cancel
}))(observer(BasketItemList));
