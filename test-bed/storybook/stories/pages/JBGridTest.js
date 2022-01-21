import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './JBGridTest.css';
import { Cell, Row, JBGrid } from '../../../../react-component/jb-grid';

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
                                    <Row key={item.id} style={{ gridTemplateColumns: vm.jbGridConfig.styles.table.generalCols.gridTemplateColumns }}>
                                        <Cell>{item.name}</Cell>
                                        <Cell>{item.age}</Cell>
                                    </Row>
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