import { action, makeObservable, observable } from "mobx";

import {JBGridData} from '../../../../react-component/jb-grid';
class JBGridTestViewModel{

    jbGridConfig = new JBGridData();
    filterConfig = {
        columnList: [
            {
                key: 'title',
                label: 'تیتر',
                type: 'TEXT'
            },
            {
                key: 'name',
                label: 'نام',
                type: 'TEXT',
                maxUsageCount:3
            },
            {
                key:'age',
                label: 'سن',
                type: 'NUMBER',
            },
            {
                key: 'fromDate',
                label: 'از تاریخ',
                type: 'DATE'
            },
            {
                key: 'toDate',
                label: 'تا تاریخ',
                type: 'DATE'
            }
        ]
    }
    constructor(){
        makeObservable(this,{
            filterConfig:observable,
            jbGridConfig:observable,
            initGrid:action.bound
        });
        this.initGrid();
    }
    initGrid(){
        this.jbGridConfig.table.columns = [
            {
                id: 1,
                name: 'name',
                caption: 'نام',
                sortable: false,
                width: '1fr'
            },
            {
                id: 2,
                name: 'age',
                caption: 'سن',
                sortable: false,
                width: '1fr'
            },
            {
                id: 3,
                name: 'expand',
                caption: 'باز کردن',
                sortable: false,
            }
        ];
        this.jbGridConfig.data.url = "http://localhost:3200/grid/user-list",
        this.jbGridConfig.data.method = "POST";
    }
}
export default JBGridTestViewModel;