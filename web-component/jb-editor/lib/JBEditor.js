import { InputFactory } from './inputs/InputFactory';
import HTML from './JBEditor.html';
import CSS from './JBEditor.scss';
import { ParserHelper } from './ParserHelper';
class JBInputWebComponent extends HTMLElement {
    static get formAssociated() { return true; }
    get value() {
        const value = this._elements.content.inputs.map(x=>x.value);
        return this.value;
    }
    constructor() {
        super();
        if(typeof this.attachInternals == "function"){
            //some browser dont support attachInternals
            this.internals_ = this.attachInternals();
        }
        this.inputFactory = new InputFactory({
            createInput:this.createInput.bind(this),
            handleExtraData: this.handleExtraData.bind(this)
        });
        this.parserHelper = new ParserHelper();
        this.initWebComponent();
    }
    connectedCallback() {
        // standard web component event that called when all of dom is binded
        this.callOnLoadEvent();
        this.initProp();
        this.callOnInitEvent();
        
    }
    callOnLoadEvent() {
        var event = new CustomEvent('load', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    callOnInitEvent() {
        var event = new CustomEvent('init', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    initWebComponent() {
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this._html = `<style>${CSS}</style>` + '\n' + HTML;
        this._element = document.createElement('template');
        this._element.innerHTML = this._html;
        this._shadowRoot.appendChild(this._element.content.cloneNode(true));
        this._elements = {
            content:{
                wrapper:this._shadowRoot.querySelector('.content-wrapper'),
                inputs:[]
            }
        };
        this.initEditor();
        this.registerEventListener();
    }
    initEditor(){
        this._elements.content.wrapper.addEventListener('paste',this.onPaste.bind(this));
        this.createInput();
    }
    onPaste(e){
        const clipboardData = e.clipboardData || window.clipboardData;
        let pastedData = null;
        let valueObj = null;
        if(clipboardData.types.findIndex(x=>x=="text/html") !== -1){
            pastedData = clipboardData.getData('text/html');
            valueObj = this.parserHelper.htmlStringToValueObject(pastedData);
        }else if(clipboardData.types.findIndex(x=>x=="text/plain") !== -1){
            pastedData = clipboardData.getData('text/plain');
            valueObj = this.parserHelper.textToValueObject(pastedData);
        }
        const selection = this._shadowRoot.getSelection();
        if(selection.type == "Caret"){
            e.preventDefault();
            return;
        }
        console.log('a');
        debugger;
        e.preventDefault();
    }
    createInput(type,value,index){
        //create element and add it to wrapper
        const newIndex = index||this._elements.content.inputs.length;
        const inputElem = this.inputFactory.createParagraphInput(value);
        //we add a uniq symbil to every input element so we can find them later by symbol
        inputElem._JBEditorDetail = {
            uniqSymbol: Symbol(),
        };
        if(newIndex == this._elements.content.inputs.length){
            this._elements.content.wrapper.appendChild(inputElem);
        }else{
            this._elements.content.wrapper.insertBefore(inputElem,this._elements.content.wrapper.children[newIndex+1]);
        }
        this._elements.content.inputs.splice(newIndex, 0, inputElem);

        return inputElem;
    }
    handleExtraData(e){
        debugger;
        const {action, data} = e.detail;
        if(action == "APPEND_AFTER"){
            const elemIndex = this.inputFactory.getElementIndex(e.target);
            data.forEach((item)=>{
                this.createInput(item.type,item.value,elemIndex);
            });
        }
    }
    registerEventListener() {
    }
    initProp() {
    }
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name, value) {
        // switch (name) {
        // }
    }

}
const myElementNotExists = !customElements.get('jb-editor');
if(myElementNotExists){
    window.customElements.define('jb-editor', JBInputWebComponent);
}
