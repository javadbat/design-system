import HTML from './JBSearchbar.html';
import CSS from './JBSearchbar.scss';
import '../../jb-select/lib/JBSelect';
import '../../jb-input/lib/JBInput';
class JBSearchbarWebComponent extends HTMLElement {
    get isLoading() {
        return this._isLoading
    }
    set isLoading(value) {
        this._isLoading = value;
        if (value == true) {
            this._element.searchButton.classList.add('--loading');
        } else {
            this._element.searchButton.classList.remove('--loading');
        }
    }
    get inputState(){
        return this._inputState;
    }
    set inputState(value){
        if(value == "SELECT_COLUMN"){
            this._elements.intent.wrapper.classList.add('--hide');
            this._elements.columnSelect.parentElement.classList.remove('--hide');
        }else if(value == "FILL_VALUE"){
            this._elements.intent.wrapper.classList.remove('--hide');
            this._elements.intent.input.wrapper.innerHTML = "";
            this._elements.columnSelect.parentElement.classList.add('--hide');
        }
        this._inputState = value;
    }
    get value(){
        return this.filterList
    }
    constructor() {
        super();
        this.initWebComponent();
    }
    registerEventListener() {
        this._elements.columnSelect.addEventListener('init',this.setColumnList.bind(this));
        this._elements.columnSelect.addEventListener('change',this.onColumnSelected.bind(this));
        this._elements.intent.submitButton.addEventListener('click',this.onIntentSubmited.bind(this));

    }
    initProp() {
        this.intentColumn = {
            column:null,
            value:null,
            active:false
        }
        this._inputState = "SELECT_COLUMN";
        this.filterList = this.createFilterList();

    }
    createFilterList(){
        const flProxy = new Proxy([],{
            get:(target, property)=>{
                return target[property];
            },
            set:(target, property, value, receiver)=>{
                target[property] = value;
                if(!(property == "length")){
                    const dom = this.createFilterDOM(value)
                    this._elements.filterListWrapper.appendChild(dom);
                }
                return true;

            }
        });
        return flProxy;
    }
    createFilterDOM({label}){
        const dom= document.createElement('div')
        dom.classList.add('filter-item');
        dom.innerHTML = label;
        return dom;
        
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
            searchButton: this._shadowRoot.querySelector('.search-button-wrapper'),
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
        return [];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name, value) {
        switch (name) {
        }
    }
    setColumnList(){
        this._elements.columnSelect.callbacks.getOptionTitle = (column)=>{return column.label};
        this._elements.columnSelect.optionList = [
            {
                key:'name',
                label:'نام',
                type:'TEXT'
            },
            {
                key:'age',
                label:'سن',
                type:'TEXT'
            },
            {
                key:'fromDate',
                label:'از تاریخ',
                type:'TEXT'
            },
        ]
    }
    onColumnSelected(e){
       const column = e.target.value;
        this.intentColumn.column = column;
        this.inputState = "FILL_VALUE";
        this._elements.intent.column.innerHTML = column.label;
        const inputDom =  this.createIntentInputDom(column);
        this._elements.intent.input.input = inputDom;
        this._elements.intent.input.wrapper.appendChild(inputDom);
    }
    createIntentInputDom(column){
        const setIntentActive = (value)=>{
            this.intentColumn.active = value;
            if(value){
                this._elements.intent.submitButton.classList.add('--active');
            }else{
                this._elements.intent.submitButton.classList.remove('--active');  
            }
        }
        const createTextInput = ()=>{
            const input = document.createElement('jb-input');
            input.addEventListener('keydown',(e)=>{
               if(e.keyCode == 13 && e.target.value.trim()!= ""){
                    this.onIntentSubmited();
               }
            });
            input.addEventListener('keyup',(e)=>{
                this.intentColumn.value = e.target.value;
                if(e.target.value.length>0){
                    setIntentActive(true);
                }else{
                    setIntentActive(false); 
                }
            });
            return input;
        }
        switch(column.type){
            case 'TEXT':
                return createTextInput();
                break;
        }
    }
    onIntentSubmited(){
        if(this.intentColumn.active){
            this.submitIntent(this.intentColumn.column,this.intentColumn.value);
            this.inputState = "SELECT_COLUMN";
            this.intentColumn = {
                column:null,
                value:null,
                active:false
            }

        }
    }
    submitIntent(column, value){
        let label = "";
        switch(column.type){
            case 'TEXT':
                label = value;
        }
        this.filterList.push({
            column: column,
            value: value,
            label: label
        });
    }

}
const myElementNotExists = !customElements.get('jb-searchbar');
if(myElementNotExists){
    window.customElements.define('jb-searchbar', JBSearchbarWebComponent);
}

