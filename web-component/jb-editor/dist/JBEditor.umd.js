(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var css_248z$1 = ".paragraph-input {\n  min-height: 32px;\n}";

    class ParserHelper {
        /**
        * @param {string} string
        * @return {object}
        */
        textToValueObject(string) {
            const returnObj = {
                type: 'PARAGRAPH',
                value: string
            };
            return returnObj;
        }
        /**
        * @param {string} html
        * @return {object}
        */
        htmlStringToValueObject(html) {
            const elem = document.createRange().createContextualFragment(html);
            const res = this.getStandardObjectFromDom(elem);
            return res;
        }
        /**
        * @param {HTMLElement} dom
        * @return {object}
        */
        htmlDomToValueObject(dom) {
            const obj = {
                type: this.extractType(dom),
                value: []
            };
            if (dom.children.length > 0) {
                dom.children.forEach(element => {
                    const elementValue = this.htmlDomToValueObject(element);
                    //TODO://make flat function smart base on type
                    obj.value.push(elementValue);
                });
            } else {
                obj.value = dom.innerText;
            }
            return obj;
        }
        /**
        * @param {HTMLElement} dom
        * @return {object}
        */
        getStandardObjectFromDom(dom) {
            const obj = this.htmlDomToValueObject(dom);
            const returnObj = this.standardFlatValueObject(obj);
            return returnObj;
        }
        /**
        * @param {HTMLElement} dom
        * @return {string}
        */
        extractType(dom) {
            switch(dom.nodeName.toUpperCase()){
                case 'SPAN':
                case 'EM':
                case 'B':
                    console.log(dom.nodeName);
                    return 'INLINE_TEXT';
                default:
                    return 'PARAGRAPH';  
            }
            
        }
        standardFlatValueObject(valueObject) {
            const standardObj = {
                type: valueObject.type,
                value: []
            };
            if (Array.isArray(valueObject.value)) {
                valueObject.value.forEach((item) => {
                    if (Array.isArray(item.value)) {
                        const standaredArr = this.standardFlatValueObject(item).value;
                        standardObj.value = [...standardObj.value, ...standaredArr];
                    } else {
                        standardObj.value = [...standardObj.value, item];
                    }

                });
            } else {
                standardObj.value = valueObject.value;
            }

            return standardObj;
        }
    }

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
            this._html = `<style>${css_248z$1}</style>` + '\n';
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
            }else {
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
                }else {
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
    const myElementNotExists$1 = !customElements.get('jb-editor-paragraph-input');
    if (myElementNotExists$1) {
        window.customElements.define('jb-editor-paragraph-input', JBButtonWebComponent);
    }

    class InputFactory {
        constructor({ createInput, handleExtraData}) {
            this.createInput = createInput;
            this.handleExtraData =handleExtraData;
        }
        getElementIndex(node) {
            var index = 0;
            while ((node = node.previousElementSibling)) {
                index++;
            }
            return index;
        }
        createParagraphInput(value) {
            const inputElem = document.createElement('jb-editor-paragraph-input');
            if(value){
                inputElem.value = value;
            }
            inputElem.addEventListener('enter', (e) => {
                const newIndex = this.getElementIndex(inputElem);
                const createdElement = this.createInput('PARAGRAPH', null, newIndex);
                createdElement.focus();
            });
            inputElem.addEventListener('extraData',(e)=>{
                this.handleExtraData(e);
            });
            return inputElem;
        }
    }

    var HTML = "<div class=\"jb-editor-web-component\">\r\n    <div class=\"content-wrapper\">\r\n    </div>\r\n</div>";

    var css_248z = ".jb-editor-web-component {\n  direction: rtl;\n  width: 100%;\n  height: 100%;\n  background-color: lightseagreen;\n}\n.jb-editor-web-component .content-wrapper {\n  width: 100%;\n  height: 100%;\n  padding: 16px;\n  box-sizing: border-box;\n}";

    class JBInputWebComponent extends HTMLElement {
        static get formAssociated() { return true; }
        get value() {
            this._elements.content.inputs.map(x=>x.value);
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
            this._html = `<style>${css_248z}</style>` + '\n' + HTML;
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
            if(clipboardData.types.findIndex(x=>x=="text/html") !== -1){
                pastedData = clipboardData.getData('text/html');
                this.parserHelper.htmlStringToValueObject(pastedData);
            }else if(clipboardData.types.findIndex(x=>x=="text/plain") !== -1){
                pastedData = clipboardData.getData('text/plain');
                this.parserHelper.textToValueObject(pastedData);
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
            }else {
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

}));
//# sourceMappingURL=JBEditor.umd.js.map
