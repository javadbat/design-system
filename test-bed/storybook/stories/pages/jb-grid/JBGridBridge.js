import Axios from "axios";

class JBGridBridge {
    //public
    mapServerResponseDataToGridData(data) {
        //convert server response data to grid standard data
        if (!(data.content.length > -1) || !(data.totalItem !== null || data.totalItem !== undefined) || !(data.pageIndex !== null || data.pageIndex !== undefined) || !data.pageSize) {
            console.error('we cant set meta data');
            return false;
        }
        var bridgeData = {};
        //the content array contain data we want to show
        bridgeData.content = data.content;
        //current list start index to show to user exp:20-35 its 20
        bridgeData.startItemIndex = data.pageSize * (data.pageIndex + 1);
        //last index of current loaded list
        bridgeData.endItemIndex = data.pageSize * data.pageIndex + data.totalItem;
        //all item count for example if we had 500  user its 500
        bridgeData.totalItemsCount = data.totalItem;
        //how many page we have
        bridgeData.totalPages = Math.floor(data.totalItem / data.pageSize);
        //current loaded page index
        bridgeData.pageIndex = data.pageIndex + 1;//our server page start index from 0
        return bridgeData;
    }
    //public
    createRequestBody(pageObj, filterObj, sortColumn) {
        //create body of request to send to the server
        var requestBody = {};
        //به خاطر اینکه صفحه بندی سرور از صفر شروع میشده
        requestBody.pageIndex = pageObj.index - 1;
        requestBody.pageSize = pageObj.size;
        requestBody.filter = this._createServerFilterObject(filterObj);
        return requestBody;
    }
    getData(configData, requestBody) {
        return new Promise((resolve, reject) => {
            const url = configData.url;
            const method = configData.method;
            Axios({
                url,
                method,
                data: requestBody
            }).then((res)=>{
                setTimeout(()=>{
                    resolve(res.data);
                },3000)
            }).catch((err) => {
                reject(err);
            });
        });
    }
    _createServerFilterObject(filterObject){
        // server filter object = sfo
        const sfo = {};
        filterObject.forEach((filter)=>{
            if(filter.column.maxUsageCount>1){
                if(sfo[filter.column.key]){
                    sfo[filter.column.key].push(filter.value);
                }else{
                    sfo[filter.column.key] = [filter.value];
                }
            }else{
                sfo[filter.column.key] = filter.value;
            }
        });
        return sfo;
    }
}
export default JBGridBridge;