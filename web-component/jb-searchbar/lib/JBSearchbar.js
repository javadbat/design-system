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
        return this.filterList
    }
    constructor() {
        super();
        this.initWebComponent();
    }
    registerEventListener() {
        this._elements.columnSelect.addEventListener('change',this.onColumnSelected.bind(this));
        this._elements.intent.submitButton.addEventListener('click',this.onIntentSubmited.bind(this));
        this._elements.columnSelect.addEventListener('init',()=>{
            this.setColumnList();
            this._elements.columnSelect.focus();
        });

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
            get:(target, property,receiver)=>{
                if(property == "splice"){
                    const origMethod = target[property];
                    const customSplice = (...args)=>{
                        this._elements.filterListWrapper.children[args[0]].remove();
                        //becuase we apply function like this the get wont call again in proxy
                        //we apply into proxy not orginal obj so setter hooks for splice in setter do their job
                        return origMethod.apply(receiver,args);
                    }
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
        const dom= document.createElement('div')
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
            this.deleteFilter(e.currentTarget.parentElement.filterIndex)
        });
        dom.appendChild(deleteButtonDom);
        dom.appendChild(labelDom);
        return dom;
        
    }
    deleteFilter(filterIndex){
        this.filterList.splice(filterIndex,1);
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
            input.addEventListener('init',()=>{
                input.focus();
            })
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

