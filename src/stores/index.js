import MenuStore from './MenuStore';

class RootStore {
  constructor() {
    this.menu = new MenuStore(this);
  }
}

export default RootStore;
