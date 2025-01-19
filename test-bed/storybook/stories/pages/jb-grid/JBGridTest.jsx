import React, { Component } from 'react';
import './JBGridTest.css';
import { Cell, Row, JBGrid, ExpandRow } from 'jb-grid/react';

import JBGridBridge from './JBGridBridge';
import JBGridTestViewModel from './JBGridTestViewModel';
import { observer } from 'mobx-react';
import ExpandRowSample from './ExpandRowSample';
class JBGridTest extends Component {
  constructor(props) {
    super(props);
    this.vm = new JBGridTestViewModel();
  }

  render() {
    const { vm } = this;
    return (
      <div className="grid-wrapper">
        <JBGrid config={vm.jbGridConfig} bridge={JBGridBridge} title="لیست کاربران" searchbarConfig={vm.filterConfig} i18n={this.props.i18n}>
          {
            vm.jbGridConfig.data.data.map(
              (item) => {
                return (
                  <React.Fragment key={item.id}>
                    <Row>
                      <Cell label="نام:">{item.name}</Cell>
                      <Cell label={"سن:"}>{item.age}</Cell>
                      <Cell label="عملیات:"><button onClick={()=>{item.jbGridDetail.isExpanded = !item.jbGridDetail.isExpanded;}}>detail</button></Cell>
                    </Row>
                    <ExpandRow show={item.jbGridDetail.isExpanded}>
                      <ExpandRowSample></ExpandRowSample>
                    </ExpandRow>
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