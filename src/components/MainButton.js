import React from 'react';
import Button from './Button';
import { inject, observer } from 'mobx-react';

const MainButton = ({ toOrder, toCancel }) => {
  return (
    <div>
      <Button name="주문" onClick={toOrder} />
      <Button name="취소" onClick={toCancel} />
    </div>
  );
};

export default inject(({ button }) => {
  toOrder: button.order;
  toCancel: button.cancel;
})(observer(MainButton));
