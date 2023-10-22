import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './JBGridTest.css';
import { Cell, Row, JBGrid, ExpandRow } from 'jb-grid';

import JBGridBridge from './JBGridBridge';
import JBGridTestViewModel from './JBGridTestViewModel';
import { observer } from 'mobx-react';
class JBGridTest extends Component {
    constructor(props) {
        super(props);
        this.vm = new JBGridTestViewModel();
    }

    render() {
        const { vm } = this;
        return (
            <div className="grid-wrapper">
                <JBGrid config={vm.jbGridConfig} bridge={JBGridBridge} title="لیست کاربران" searchbarConfig={vm.filterConfig}>
                    {
                        vm.jbGridConfig.data.data.map(
                            (item) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <Row>
                                            <Cell>{item.name}</Cell>
                                            <Cell>{item.age}</Cell>
                                            <Cell><button onClick={()=>{item.jbGridDetail.isExpanded = !item.jbGridDetail.isExpanded;}}>detail</button></Cell>
                                        </Row>
                                        <ExpandRow show={item.jbGridDetail.isExpanded}>
                                            expand row
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