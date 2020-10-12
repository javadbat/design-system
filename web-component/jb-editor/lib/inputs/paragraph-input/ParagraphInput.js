
import CSS from './ParagraphInput.scss';
import { ParserHelper } from '../../ParserHelper';
import { element } from 'prop-types';
class JBButtonWebComponent extends HTMLElement {
    get value(){
        return this.editableElement.innerText;
    }
    set value(value){
        this.editableElement.innerText = value;
    }
    constructor() {
        super();
        this.initWebComponent();
    }
    initWebComponent() {
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._html = `<style>${CSS}</style>` + '\n';
        this._element = document.createElement('template');
        this._element.innerHTML = this._html;
        this._shadowRoot.appendChild(this._element.content.cloneNode(true));
        this.parserHelper = new ParserHelper(); 
        this.initElement();
    }
    initElement() {
        const inputElem = document.createElement('p');
        inputElem.classList.add('paragraph-input');
        inputElem.addEventListener('keypress', this.onKeyPress.bind(this));
        inputElem.addEventListener('paste', this.onPaste.bind(this));
        inputElem.addEventListener('click', ()=>{this.focus();});
        inputElem.addEventListener('blur',()=>{this.onBlur();});
        this.editableElement = inputElem;
        //this.editableElement.contentEditable = true;
        this._shadowRoot.appendChild(inputElem);
    }
    onKeyPress(e) {
        if (e.key == "Enter") {
            e.preventDefault();
            this.callOnEnter();
        }
    }
    onPaste(e) {
        console.log('b');
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
        this.setPasteValue(valueObj, selection);
        e.preventDefault();
    }
    setPasteValue(valueObj,selection){
        let currentBlockHTML = "";

        if(typeof valueObj.value == "string"){
            currentBlockHTML = valueObj.value;
        }else{
            currentBlockHTML = valueObj.value[0].value;
        }
        if(selection.anchorNode.nodeType === 3){
            // user may select from start to end or end to start so we standrad it.
            let selectionStart = Math.min(selection.anchorOffset, selection.extentOffset);
            let selectionEnd = Math.max(selection.anchorOffset, selection.extentOffset);
            //if selection part is pure text
            const text = this.editableElement.innerText;
            let newText = "";
            if(valueObj.value.length > 1){
                //if we have more than one line to paste we cut tail of text and add it to the last item or creae new item for it
                const tailText = text.substr(selectionEnd, text.length-1);
                valueObj.value.push({
                    type:'PARAGRAPH',
                    value:tailText
                });
                newText = text.substr(0,selectionStart)+currentBlockHTML;
            }else{
                newText = text.substr(0,selectionStart)+currentBlockHTML+text.substr(selectionEnd, text.length-1);
            }
            
            this.editableElement.innerText = newText;
            this.callExtraDataEvent(valueObj.value.slice(1,valueObj.value.length),'APPEND_AFTER'); 
        }
    }
    callExtraDataEvent(extraData,action){
        debugger;
        //on paste or enter event or etc we have data that wont place in current block and we want editor to place them in a useful manner
        // in this case we send extra data to the editor so editor do the proper action
        const event = new CustomEvent('extraData',{detail:{
            action:action,
            data:extraData
        }});
        this.dispatchEvent(event);

    }
    callOnEnter() {
        const event = new CustomEvent('enter');
        this.dispatchEvent(event);
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
    focus() {
        this.editableElement.contentEditable = true;
        this.editableElement.focus();
    }
    onBlur(){
        this.editableElement.contentEditable = false;
    }
}
const myElementNotExists = !customElements.get('jb-editor-paragraph-input');
if (myElementNotExists) {
    window.customElements.define('jb-editor-paragraph-input', JBButtonWebComponent);
}

