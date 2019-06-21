import { action } from 'mobx';
import { observer } from 'mobx-react-lite';

export default class OrderStore {
  @observer orderedList = [];

  constructor(root) {
    this.root = root;
  }

  @action
  order = (orderName, basket) => {
    const exist = this.orderedList.find(name => name === orderName);
    if (!exist) {
      this.orderedList.push({
        orderName,
        basket
      });
      return;
    }
  };

  @action
  cancel = orderName => {
    const basketToCancel = this.orderedList.find(name => name === orderName);
    if (basketToCancel) {
      this.orderedList.remove(basketToCancel);
    }
  };
}
