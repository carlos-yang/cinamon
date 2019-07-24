import { observable, action, computed } from 'mobx';

export default class MenuStore {
  @observable selectedItems = [];

  constructor(root) {
    this.root = root;
  }

  @action
  put = (name, price) => {
    const { number } = this.root.counter;
    const exist = this.selectedItems.find(item => item.name === name);
    if (!exist) {
      this.selectedItems.push({
        name,
        price,
        count: number
      });
      return;
    }
    exist.count++;
  };

  @action
  add = name => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count++;
  };

  @action
  take = name => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  };

  @action
  cancel = name => {
    const itemToCancel = this.selectedItems.find(item => item.name === name);
    if (itemToCancel) {
      this.selectedItems.remove(itemToCancel);
    }
  };

  @computed
  get total() {
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}
