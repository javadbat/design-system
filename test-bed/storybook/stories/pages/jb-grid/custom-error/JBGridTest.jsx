import React, { Component } from 'react';
import './JBGridTest.css';
import { Cell, Row, JBGrid, ExpandRow } from 'jb-grid/react';

import JBGridBridge from '../JBGridBridge';
import JBGridTestViewModel from './JBGridTestViewModel';
import { observer } from 'mobx-react';
import CustomError from './CustomError';
class JBGridTest extends Component {
  constructor(props) {
    super(props);
    this.vm = new JBGridTestViewModel();
  }

  render() {
    const { vm } = this;
    return (
      <div className="grid-wrapper">
        <JBGrid contentError={<CustomError />} config={vm.jbGridConfig} bridge={JBGridBridge} title="لیست کاربران" searchbarConfig={vm.filterConfig}>
          {
            vm.jbGridConfig.data.data.map(
              (item) => {
                return (
                  <React.Fragment key={item.id}>
                    <Row>
                      <Cell>{item.name}</Cell>
                      <Cell>{item.age}</Cell>
                    </Row>
                
                  </React.Fragment>

                );
              }
            )
          }
        </JBGrid>
      </div>
    );
  }
}
export default observer(JBGridTest);