import { action } from 'mobx';
import { observer } from 'mobx-react-lite';

export default class OrderStore {
  @observer orderedList = [];

  constructor(root) {
    this.root = root;
  }

  @action
  order = () => {
    console.log('order Test');
    const { selectedItem } = this.root.menu;
    const orderName = 'add later';
    // const exist = this.orderedList.find(name => name === orderName);
    if (true) {
      this.orderedList.push(selectedItem);
      return;
    }
  };

  @action
  cancel = () => {
    console.log('주문전체취소');
  };
}
