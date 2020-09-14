
class JBGridBridge {
    //public
    mapServerResponseDataToGridData(data) {
        //convert server response data to grid standard data
        if (!data.content.length > -1 || !data.size || !data.numberOfElements) {
            console.error('we cant set meta data');
        }
        var bridgeData = {};
        //the content array contain data we want to show
        bridgeData.content = data.content;
        //current list start index to show to user exp:20-35 its 20
        bridgeData.startItemIndex = data.size * data.number + 1;
        //last index of current loaded list
        bridgeData.endItemIndex = data.size * data.number + data.numberOfElements;
        //all item count for example if we had 500  user its 500
        bridgeData.totalItemsCount = data.totalElements;
        //how many page we have
        bridgeData.totalPages = data.totalPages;
        //current loaded page index
        bridgeData.pageIndex = data.number + 1;//our server page start index from 0
        return bridgeData;
    }
    //public
    createRequestBody(pageObj, filterObj, sortColumn) {
        //create body of request to send to the server

        var requestBody = {};
        //به خاطر اینکه صفحه بندی سرور از صفر شروع میشده
        requestBody.page = pageObj.index - 1;
        requestBody.size = pageObj.size;
        /* implement grid filter */
        if (filterObj) {
            var bodyFilterObject = this._mapJBSearchBarFilterObjectToServerFilterObject(filterObj);
            if (bodyFilterObject.length > 0) {
                requestBody.criteria = bodyFilterObject
            }
        }
        //implement user sort config to request body
        this._implementSortToRequestBody(sortColumn, requestBody);
        return requestBody;
    }
    getData(configData, requestBody) {
        return new Promise((resolve, reject) => {
            var request = new RequestData({
                url: configData.url,
                method: configData.method,
                body: requestBody
            });
            fetch(request.request).then(fetchResponseHandler(request)).then((data) => {
                resolve(data);
            }).catch((err) => {
                fetchErrorHandler(err);
                reject(err);
            });
        });
    }
    //private . not need for jb grid bridge
    _mapJBSearchBarFilterObjectToServerFilterObject(JBSearchBarFilterObject) {
        var filterList = [];
        JBSearchBarFilterObject.forEach((filter, index) => {
            var value = filter.value.value;
            var key = filter.column.name;
            if (!filter.column.operation) {
                filter.column.operation = "EQUALITY"
            }
            filterList.push({
                "key": key,
                "operation": filter.column.operation,
                "value": value
            });
        });
        return filterList;
    }
    //private
    _implementSortToRequestBody(sortColumn, requestBody) {
        if (sortColumn) {
            if (!requestBody.criteria) {
                requestBody.criteria = [];
            }
            requestBody.criteria.push({
                "key": sortColumn.name,
                "operation": 'SORT_BY',
                "value": sortColumn.sort.toUpperCase()
            });
        }
    }
}
export default JBGridBridge;