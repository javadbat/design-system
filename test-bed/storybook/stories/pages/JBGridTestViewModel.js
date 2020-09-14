import { observable } from "mobx";

import JBGridData from '../../../../react-component/jb-grid/lib/JBGridData';
class JBGridTestViewModel{

    @observable
    jbGridConfig = new JBGridData();
    constructor(){
        this.initGrid();
    }
    initGrid(){
        this.jbGridConfig.table.columns = [
            {
                id: 1,
                name: 'name',
                caption: 'نام سرویس',
                sortable: false,
                width: '1fr'
            },
            {
                id: 2,
                name: 'age',
                caption: 'سن',
                sortable: false,
                width: '1fr'
            }
        ];
        this.jbGridConfig.data.url = "http://localhost:3200/grid/user-list",
        this.jbGridConfig.data.method = "GET";
    }
}
export default JBGridTestViewModel;