import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(({ menu }) => ({ total: menu.total }))
@observer
class BasketTotal extends Component {
  render() {
    const { total } = this.props;
    return (
      <div>
        <hr />
        <p>
          <b>총합:</b> {total}원
        </p>
      </div>
    );
  }
}

export default BasketTotal;
