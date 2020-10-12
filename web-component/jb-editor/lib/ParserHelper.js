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
export { ParserHelper };