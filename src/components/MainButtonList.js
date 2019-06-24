import React from 'react';
import Button from './Button';
import { inject, observer } from 'mobx-react';

const MainButtonList = ({ toOrder, toCancel }) => {
  return (
    <div>
      <Button name="주문" click={toOrder} />
      <Button name="취소" click={toCancel} />
    </div>
  );
};

export default inject(({ order }) => ({
  toOrder: order.order,
  toCancel: order.cancel
}))(observer(MainButtonList));
