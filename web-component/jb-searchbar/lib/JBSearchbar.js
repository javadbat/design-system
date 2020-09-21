import HTML from './JBSearchbar.html';
import CSS from './JBSearchbar.scss';
import '../../jb-select/lib/JBSelect';
import '../../jb-input/lib/JBInput';
import '../../jb-date-input/lib/JBDateInput'
import { InputFactory } from './InputFactory';
class JBSearchbarWebComponent extends HTMLElement {
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        if((!this._isLoading) && value){
            this.playSearchIconAnimation();
        }
        this._isLoading = value;
        
    }
    get inputState(){
        return this._inputState;
    }
    set inputState(value){
        if(value == "SELECT_COLUMN"){
            this._elements.columnSelect.value = null;
            this._elements.intent.wrapper.classList.add('--hide');
            this._elements.columnSelect.parentElement.classList.remove('--hide');
            this._elements.columnSelect.focus();
        }else if(value == "FILL_VALUE"){
            this._elements.intent.wrapper.classList.remove('--hide');
            this._elements.intent.input.wrapper.innerHTML = "";
            this._elements.columnSelect.parentElement.classList.add('--hide');
        }
        this._inputState = value;
    }
    get value(){
        return this.filterList.map(x=>({column:x.column,value:x.value}));
    }
    get columnList(){
        return this._columnList;
    }
    set columnList(value){
        //TODO: check validation of column to be array ind has neccessary prop
        this.setColumnList(value);
    }
    constructor() {
        super();
        this.initWebComponent();
        this._inputFactory = new InputFactory();
    }
    registerEventListener() {
        this._elements.columnSelect.addEventListener('change',this.onColumnSelected.bind(this));
        this._elements.intent.submitButton.addEventListener('click',this.onIntentSubmited.bind(this));
        this._elements.columnSelect.addEventListener('init',()=>{
            this.setColumnList();
            this._elements.columnSelect.focus();
        });
        this._elements.searchButton.wrapper.addEventListener('click',this.search.bind(this));

    }
    initProp() {
        this.intentColumn = {
            column:null,
            value:null,
            label:null,
            active:false
        };
        this._columnList = [];
        this._inputState = "SELECT_COLUMN";
        this.filterList = this.createFilterList();

    }
    createFilterList(){
        const flProxy = new Proxy([],{
            get:(target, property,receiver)=>{
                if(property == "splice"){
                    const origMethod = target[property];
                    const customSplice = (...args)=>{
                        this._elements.filterListWrapper.children[args[0]].remove();
                        //becuase we apply function like this the get wont call again in proxy
                        //we apply into proxy not orginal obj so setter hooks for splice in setter do their job
                        return origMethod.apply(receiver,args);
                    };
                    return customSplice;
                }
                return target[property];
            },
            set:(target, property, value, receiver)=>{
                if(!(property == "length")){
                    if( parseInt(property) == target.length){
                        //when push
                        const dom = this.createFilterDOM(value);
                        value.dom = dom;
                        this._elements.filterListWrapper.appendChild(dom);
                    }
                    if(!isNaN(property) && parseInt(property) < target.length){
                        //when splice
                        //we do dom delete in proxy getter
                        value.dom.filterIndex = parseInt(property);
                    }
                }
                target[property] = value;
                return true;

            }
        });
        return flProxy;
    }
    createFilterDOM({label,column}){
        const dom= document.createElement('div');
        dom.classList.add('filter-item');
        const deleteButtonDom = document.createElement('div');
        deleteButtonDom.classList.add('delete-btn');
        deleteButtonDom.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve"><g><polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   "/></g></svg>`
        const labelDom = document.createElement('div');
        labelDom.classList.add('filter-label');
        labelDom.innerHTML = `${column.label}: ${label}`;
        const filterIndex = this.filterList.length;
        dom.filterIndex = filterIndex;
        deleteButtonDom.addEventListener('click',(e)=>{
            this.deleteFilter(e.currentTarget.parentElement.filterIndex);
        });
        dom.appendChild(deleteButtonDom);
        dom.appendChild(labelDom);
        return dom;
        
    }
    deleteFilter(filterIndex){
        this.filterList.splice(filterIndex,1);
        this.setColumnListSelectOptionList();
    }
    connectedCallback() {
        // standard web component event that called when all of dom is binded
        this.callOnLoadEvent();
        this.initProp();
        
    }
    callOnLoadEvent() {
        var event = new CustomEvent('load', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    initWebComponent() {
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._html = `<style>${CSS}</style>` + '\n' + HTML
        this._element = document.createElement('template');
        this._element.innerHTML = this._html;
        this._shadowRoot.appendChild(this._element.content.cloneNode(true));
        this._elements = {
            filterListWrapper: this._shadowRoot.querySelector('.filter-list-section'),
            searchButton:{
                wrapper: this._shadowRoot.querySelector('.search-button-wrapper'),
                svg:{
                    spinnerLine:this._shadowRoot.querySelector('.search-button-wrapper .convertable-line'),
                    spinnerBox:this._shadowRoot.querySelector('.search-button-wrapper .spin-line-group')
                }
            },

            columnSelect: this._shadowRoot.querySelector('.column-select'),
            intent:{
                column:this._shadowRoot.querySelector('.intent-wrapper .intent-column'),
                input:{
                    wrapper:this._shadowRoot.querySelector('.intent-wrapper .intent-input-wrapper'),
                    input:null
                },
                submitButton:this._shadowRoot.querySelector('.intent-wrapper .intent-submit-button'),
                wrapper: this._shadowRoot.querySelector('.intent-wrapper')
            }
        }
        this.registerEventListener();
    }
    static get observedAttributes() {
        return ['placeholder'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name, value) {
        switch (name) {
            case 'placeholder':
                this._elements.columnSelect.setAttribute('placeholder',value);
                break;
        }
    }
    setColumnList(columnList){
        this._columnList = columnList;
        this.setColumnListSelectOptionList();

    }
    setColumnListSelectOptionList(){
        const currentFilterKeys = this.filterList.map((filter)=>{
            return filter.column.key;
        });
        const columnList = this.columnList.filter((column)=>{
            const maxUsageCount = column.maxUsageCount || 1;
            const usedCount = currentFilterKeys.filter(key=>key==column.key).length;
            if(usedCount >= maxUsageCount){
                return false;
            }
            return true;
        });
        this._elements.columnSelect.callbacks.getOptionTitle = (column)=>{return column.label};
        this._elements.columnSelect.optionList = columnList;
    }
    onColumnSelected(e){
        const column = e.target.value;
        this.intentColumn.column = column;
        this.inputState = "FILL_VALUE";
        this._elements.intent.column.innerHTML = column.label;
        const inputDom = this.createIntentInputDom(column);
        this._elements.intent.input.input = inputDom;
        this._elements.intent.input.wrapper.appendChild(inputDom);
    }
    createIntentInputDom(column){
        const setIntentActive = (value,err="")=>{
            this.intentColumn.active = value;
            if(value){
                this._elements.intent.submitButton.classList.add('--active');
                this._elements.intent.submitButton.setAttribute('title','ثبت فیلتر');
            }else{
                this._elements.intent.submitButton.classList.remove('--active');  
                this._elements.intent.submitButton.setAttribute('title',err);
            }
        };
        const setIntentColumnValue = (value, label)=>{
            this.intentColumn.value = value;
            this.intentColumn.label = label;
        };
        switch(column.type){
            case 'TEXT':
                return this._inputFactory.createTextInput({onIntentSubmited:this.onIntentSubmited.bind(this), setIntentActive:setIntentActive, setIntentColumnValue});
            case 'NUMBER':
                return this._inputFactory.createNumberInput({onIntentSubmited:this.onIntentSubmited.bind(this), setIntentActive:setIntentActive, setIntentColumnValue});
            case 'SELECT':
                return this._inputFactory.createSelectInput({column,onIntentSubmited:this.onIntentSubmited.bind(this), setIntentActive:setIntentActive, setIntentColumnValue});
            case 'DATE':
                return this._inputFactory.createDateInput({column,onIntentSubmited:this.onIntentSubmited.bind(this), setIntentActive:setIntentActive, setIntentColumnValue});
        }
    }
    onIntentSubmited(){
        if(this.intentColumn.active){
            this.submitIntent(this.intentColumn.column,this.intentColumn.value, this.intentColumn.label);
            this.inputState = "SELECT_COLUMN";
            this.intentColumn = {
                column:null,
                value:null,
                label:null,
                active:false
            };
            this._elements.intent.submitButton.classList.remove('--active');

        }
    }
    submitIntent(column, value, label){
        this.filterList.push({
            column: column,
            value: value,
            label: label
        });
        this.setColumnListSelectOptionList();
    }
    playSearchIconAnimation(){
        const spinnerLine = this._elements.searchButton.svg.spinnerLine;
        const spinnerBox = this._elements.searchButton.svg.spinnerBox;
        var context = this;
        var ShrinkLineAnimation = spinnerLine.animate([{ d: 'path("M400 400 L 450 450")' }, { d: 'path("M410 410 L 415 415")' }], {id:'ShrinkLine',duration:400});
        ShrinkLineAnimation.cancel();
        var shrinkLineFunction = function(animation){
            spinnerLine.setAttribute("d","M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794");
            curveLineAnimation.play();
        };
        ShrinkLineAnimation.onfinish = shrinkLineFunction
        var curveLineAnimation = spinnerLine.animate([{ d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }, { d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }], {id:'CurveLine',duration:400});
        curveLineAnimation.cancel();
        var curveLineFunction = function(animation){
            spinnerLine.setAttribute("d","M 255 475 A 220 220 0 0 0 475 255");
            spinAnimation.play();
        };
        curveLineAnimation.onfinish = curveLineFunction;
        var spinAnimation = spinnerBox.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg)'},{transform:'rotate(360deg)'}], {id:'Spin',duration:1000,iterations: 1})
        spinAnimation.cancel();
        var spinFunction= function(animation){
            if(context.isLoading == true){
                spinAnimation.play();
            }else{
                ReversecurveLineAnimation.play();
            }
        };
        spinAnimation.onfinish = spinFunction;
        var growLineAnimation = spinnerLine.animate([{ d:'path("M410 410 L 415 415")' }, { d: 'path("M400 400 L 450 450")' }], {id:'GrowLine',uration:400});
        growLineAnimation.cancel();
        var growLineFunction = function(animation){
            spinnerLine.setAttribute("d","M400 400 L 450 450");
        };
        growLineAnimation.onfinish = growLineFunction;

        var ReversecurveLineAnimation = spinnerLine.animate([{ d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }, { d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }], {id:'ReverseCurveLine',duration:400});
        ReversecurveLineAnimation.cancel();
        let ReversecurveLineFunction = function(animation){
            spinnerLine.setAttribute("d","M410 410 L 415 415");
            growLineAnimation.play();
        };
        ReversecurveLineAnimation.onfinish = ReversecurveLineFunction;
        ShrinkLineAnimation.play();
    }
    search(){
        const event = new CustomEvent('search');
        this.dispatchEvent(event);
    }
}
const myElementNotExists = !customElements.get('jb-searchbar');
if(myElementNotExists){
    window.customElements.define('jb-searchbar', JBSearchbarWebComponent);
}

