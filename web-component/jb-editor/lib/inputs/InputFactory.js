import './paragraph-input/ParagraphInput';
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
export { InputFactory };