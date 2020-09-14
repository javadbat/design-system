import React                                from 'react'
import JBSearchBarData                      from './JBSearchBarData'
import { observable , extendObservable }    from 'mobx'
import JBSelectBoxData                      from 'jb-selectbox-react/dist/JBSelectBoxData$Build_Type_Prefix.min'

class JBSearchBarViewModel {
    columnSelectConfig = new JBSelectBoxData()
    //وقتی یکی از ستون ها برای فیلتر کردن توسط کاربر انتخاب میشود و سیستم منتظر است تا کاربر مقدار فیلتر را وارد کند
    //the above explained col is put in intent column 
    @observable intentColumn = null
    @observable intentValue = {
        caption:'',
        value:null,
        //we let user submit value when inputed value is valid by our logic
        isValid:false,
        //why our value is invalid
        errorMessage:''
    }
    @observable filterList = [
        /*{
            columnCaption:'نام ستون',
            valueCaption:'مقدار انتخابی نمایشی',
            column:null, //خود ستون
            value:null //ابجکت اصلی مقدار
        }*/
    ];
    defaultConfig = new JBSearchBarData();
    config = null;
    elements = {
        spinnerLine : React.createRef(),
        spinnerBox: React.createRef(),
        valueTextInput:React.createRef(),
        valueNumberInput:React.createRef(),
        valueDateInput:React.createRef(),
        valueListInput:React.createRef(),
        filterDynamicWrapper:React.createRef(),
        filterInputWrapper:React.createRef()
    }
    //outsideFunction that calls when our searchbuton clicked
    onSearch = null
    isLoading = false
    //keep searchbar height value
    searchBarHeight = 45;
    //determine is react component is mounted
    _isComponentMounted = false;
    constructor(props){
        this.onSearch = props.onSearch || this.onLackofOnSearch;
        this.config =this.mergeObject(props.config,this.defaultConfig);
        this.filterList = this.config.value;
        this.columnSelectConfig.options = this.config.columns;
        this.columnSelectConfig.placeHolder = "فیلد جستجو را مشخص کنید";
        this.columnSelectConfig.allowNull = false;
        this.config.triggers.focus = ()=>{this.searchBarFocus()};
        this.config.triggers.injectFilter = (injectFilterObj)=>{this.injectFilterToList(injectFilterObj)}
        this.implementDefualtFilterValues();
    }
    onComponentDidMount(){
        this._isComponentMounted = true;
        this.manageHiddenColumn();
    }
    onLackofOnSearch(){
        console.warn(`there is no "onSearch" prop defined for jb-searchbar and its wierd! `);
    }
    implementDefualtFilterValues(){
        this.config.defaultValues.forEach((filterObj,index,list)=>{
            //call on search when the last item of array is pushed
            var callOnSeach = index==list.length-1
            this.injectFilterToList(filterObj,callOnSeach);
        });
    }
    mergeObject(inputConfig,defaultConfig){
        var addedProperty = {}
        for(var prop in defaultConfig){
            if(inputConfig[prop]==undefined ||inputConfig[prop]==null){
                addedProperty[prop]=defaultConfig[prop];
            }
        }
        extendObservable(inputConfig,addedProperty)
        return inputConfig;
    }
    onFilterListChange(){
        this.callOnChange();
        //when this.filterList get updated
        if(this.config.searchOnChange == true){
           this.startSearch();
        }
    }
    callOnChange(){
        if(typeof this.config.callBacks.onChange == "function"){
            //TODO: add promise handler and change validation 
            this.config.callBacks.onChange();
        }
    }
    onColumnSelected(event){
        this.selectColumn(event.detail.newValueObject);
        //reset select box data to first place
        this.columnSelectConfig.triggers.resetStates();
        setTimeout(()=>this.autoSize(),0);
    }
    selectColumn(column){
        if(typeof this.config.callBacks.oncolumnSelect == "function"){
            //TODO: add promise handler and change validation handler
            this.config.callBacks.oncolumnSelect(column);
        }
        this.intentColumn = column;
    }
    onListValueSelected(event){
        let filterColumn = this.intentColumn;
        this.intentValue.caption = event.detail.newValueObject[filterColumn.config.fieldsNames.caption]||this.config.captions.unknownSelectedOptionCaption;
        if(event.detail.newValueObject[filterColumn.config.fieldsNames.value] != null && event.detail.newValueObject[filterColumn.config.fieldsNames.value]!= undefined){
            this.intentValue.value = event.detail.newValueObject[filterColumn.config.fieldsNames.value]
        }else{
            
            this.intentValue.value = this.config.captions.unknownSelectedOptionValue;
        }
        
        this.intentValue.isValid = true;
    }
    onTextValueChange(event){
        var value = event.target.value;
        this.intentValue.caption =value;
        this.intentValue.value = value;
        this.intentValue.isValid = value.trim().length>0?true:false;
        return true;
        
    }
    onNumberValueChange(event){
        var value = event.target.value;
        this.intentValue.caption =value;
        this.intentValue.value = value;
         this.intentValue.isValid = value != ""?true:false
        return true;
        
    }
    onDateValueChange(event){
        //TODO: change it for new way of jbcalendar;
        this.intentValue.value = event.target.value;
        this.intentValue.caption = event.detail.jalaliDateObj.year + "/" + event.detail.jalaliDateObj.month + "/" + event.detail.jalaliDateObj.day
        this.intentValue.isValid = event.detail.isValid;
        this.intentValue.errorMessage = event.detail.errorMessage;
    }
    manageHiddenColumn(){
        //hide column base on usage policy of column config
        this.config.columns.forEach((column)=>{
            if(!column.maxUsageCount){
                column.maxUsageCount = Infinity;
            }
            let usedCount = this.filterList.filter(x=>x.column.id == column.id).length;
            if(column.maxUsageCount > usedCount){
                column.JBSelectBoxDetail.externalHidden = false;
            }else{
                column.JBSelectBoxDetail.externalHidden = true;
            }
        })
    }
    confirmIntent(){
        if( this.intentValue.isValid == true){
            var filterObject = {
                columnCaption:this.intentColumn.caption,
                valueCaption:this.intentValue.caption,
                column:{...this.intentColumn}, //خود ستون
                value:{...this.intentValue} //ابجکت اصلی مقدار
            }
            this._addFilterToList(filterObject);
            this.resetIntent();
        }else{
            //if our intent value is invalid to confirm
            if(this.intentValue.errorMessage && this.intentValue.errorMessage!=''){
                    alert(this.intentValue.errorMessage);
            }else{
                alert("مقدار وارد شده صحیح نمیباشد")
            }
            
        }
    }
    //public triggers to push filter from outside of component
    injectFilterToList(injectFilterObj , callOnChange = true){
        //defualt input is following:
        // injectFilterObj = {
        //     columnId:0,
        //     value:undefined,
        //     valueCaption:'',
        // }
        var findedColumn = this.config.columns.find(x=>x.id==injectFilterObj.columnId);
        if(typeof findedColumn != "object"){
            console.error('the filter you intended to add has invalid "columnId"');
            return false;
        }
        var filterObj = {
            columnCaption:findedColumn.caption,
            valueCaption:injectFilterObj.valueCaption,
            column:findedColumn,
            value:{
                caption:injectFilterObj.valueCaption,
                value:injectFilterObj.value,
                isValid:true
            }
        }
        this._addFilterToList(filterObj,callOnChange);
    }
    _addFilterToList(filterObject,callOnChange = true){
        //add intended filter or injected filter to filter list
        this.filterList.push(filterObject);
        if(this._isComponentMounted){
            this.manageHiddenColumn();
        }
        if(callOnChange){
            this.onFilterListChange(); 
        }
         
        setTimeout(()=>this.autoSize(),0);
    }
    removeFilterFromList(item,index){
        this.filterList.splice(index,1);
        this.onFilterListChange(); 
        this.manageHiddenColumn();
        setTimeout(()=>this.autoSize(),0);
    }
    cancelIntentColumn(){
        this.resetIntent();
    }
    resetIntent(){
        //delete prev added intent and clean the inputs
        this.intentValue = {
            caption:'',
            value:null,
            isValid:false
        }
        switch(this.intentColumn.type){
            case 'list':
            break;
            case 'text':
            break;
            case 'number':
            break;
            case 'date':
            break;
        }
        this.intentColumn = null;

    }
    onFilterBtnClick(event){
        if(this.intentValue.isValid == true){
            this.confirmIntent();
        }
        if(this.isLoading){
            //stop click on search button beforee current load is done;
            return;
        }
        this.startSearch();
    }
    startSearch(){
        //call on search callback and show animation
        if(this._isComponentMounted){
            this.callOnSearchCallBack();
            this.playSearchIconAnimation();
        }
    }
    playSearchIconAnimation(){
        var context = this;
        var ShrinkLineAnimation = this.elements.spinnerLine.current.animate([{ d: 'path("M400 400 L 450 450")' }, { d: 'path("M410 410 L 415 415")' }], {id:'ShrinkLine',duration:400});
        ShrinkLineAnimation.cancel();
        var shrinkLineFunction = function(animation){
            context.elements.spinnerLine.current.setAttribute("d","M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794");
            curveLineAnimation.play();
        }
        ShrinkLineAnimation.onfinish = shrinkLineFunction
        var curveLineAnimation = this.elements.spinnerLine.current.animate([{ d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }, { d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }], {id:'CurveLine',duration:400});
        curveLineAnimation.cancel();
        var curveLineFunction = function(animation){
            context.elements.spinnerLine.current.setAttribute("d","M 255 475 A 220 220 0 0 0 475 255");
            spinAnimation.play();
        }
        curveLineAnimation.onfinish = curveLineFunction;
        var spinAnimation = this.elements.spinnerBox.current.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg)'},{transform:'rotate(360deg)'}], {id:'Spin',duration:1000,iterations: 1})
        spinAnimation.cancel();
        var spinFunction= function(animation){
            if(context.isLoading == true){
                spinAnimation.play();
            }else{
                ReversecurveLineAnimation.play();
            }
        }
        spinAnimation.onfinish = spinFunction;
        var growLineAnimation = this.elements.spinnerLine.current.animate([{ d:'path("M410 410 L 415 415")'  }, { d: 'path("M400 400 L 450 450")' }], {id:'GrowLine',uration:400});
        growLineAnimation.cancel();
        var growLineFunction = function(animation){
            context.elements.spinnerLine.current.setAttribute("d","M400 400 L 450 450");
        }
        growLineAnimation.onfinish = growLineFunction

        var ReversecurveLineAnimation = this.elements.spinnerLine.current.animate([{ d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }, { d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }], {id:'ReverseCurveLine',duration:400});
        ReversecurveLineAnimation.cancel();
            var ReversecurveLineFunction = function(animation){
            context.elements.spinnerLine.current.setAttribute("d","M410 410 L 415 415");
            growLineAnimation.play();
        }
        ReversecurveLineAnimation.onfinish = ReversecurveLineFunction;
        ShrinkLineAnimation.play();
    }
    callOnSearchCallBack(){
        this.isLoading = true;
        var searchPromise = this.onSearch(this.filterList);
        if(Promise.resolve(searchPromise) == searchPromise){
            //check if return type is promise 
            searchPromise.then((e)=>{
                this.isLoading = false;
            }).catch((e)=>{
                this.isLoading = false;
            });
        }else{
            this.isLoading = false; 
        }
            
    }
    onValueInputTextKeyUp(e){
        if(e.keyCode == 13){
            //on Enter key 
            this.confirmIntent();
        }
    }
    searchBarFocus(){
        //focus on current element of searchbar
        if(!this.intentColumn){
            //if we were on select column mode
            this.columnSelectConfig.triggers.focus();
        }
        
    }
    autoSize(){
        //determine is searchbar need expansion
        var InputTop = this.elements.filterInputWrapper.current.offsetTop;
        var searcBarTop = this.elements.filterDynamicWrapper.current.offsetTop;
        let searchBarHeight = InputTop - searcBarTop + 45
        if(searchBarHeight != this.searchBarHeight){
            this.searchBarHeight = searchBarHeight;
            if(typeof this.config.callBacks.onHeightChange == "function"){
                this.config.callBacks.onHeightChange(searchBarHeight);
            }
            
        }
        if(InputTop>searcBarTop){
                      //if we have y-overflow
                      if(typeof this.config.callBacks.onHeightOverflow == "function"){
                        this.config.callBacks.onHeightOverflow(searchBarHeight);
                    }
        }
    }
    onDateInputSubmit(e){
        this.confirmIntent();
    }

}
export default JBSearchBarViewModel;