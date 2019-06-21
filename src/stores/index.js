import MenuStore from './MenuStore';
import CounterStore from './CounterStore';

class RootStore {
  constructor() {
    this.menu = new MenuStore(this);
    this.counter = new CounterStore(this);
  }
}

export default RootStore;
