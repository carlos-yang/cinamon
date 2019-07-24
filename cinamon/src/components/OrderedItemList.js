import React from 'react';
import { inject, observer } from 'mobx-react';

const OrderedItemList = ({ items }) => {
  const itemList = items.map(item => <OrderedItem {...item} key={item.name} />);
  return <div>{itemList}</div>;
};

export default inject(({ order }) => ({
  items: order.orderedList
}))(observer(OrderedItemList));
