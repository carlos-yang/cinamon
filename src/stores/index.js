import MenuStore from './MenuStore';
import CounterStore from './CounterStore';
import OrderStore from './OrderStore'

class RootStore {
  constructor() {
    this.menu = new MenuStore(this);
    this.counter = new CounterStore(this);
    this.order = new OrderStore(this);
  }
}

export default RootStore;
