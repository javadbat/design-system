import { action, makeObservable, observable } from "mobx";

import {JBGridData} from 'jb-grid/react';
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
          title: 'نام',
          sortable: true,
          width: '1fr'
        },
        {
          id: 2,
          name: 'age',
          title: 'سن',
          sortable: false,
          width: '1fr'
        },
        {
          id: 3,
          name: 'expand',
          title: 'باز کردن',
          sortable: false,
        }
      ];
      this.jbGridConfig.data.requestParams.url = "http://localhost:3200/grid/user-list",
      this.jbGridConfig.data.requestParams.method = "POST";
    }
}
export default JBGridTestViewModel;