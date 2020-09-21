class InputFactory {
    constructor() {

    }
    createTextInput({ onIntentSubmited, setIntentColumnValue, setIntentActive }) {
        const input = document.createElement('jb-input');
        input.addEventListener('keydown', (e) => {
            if (e.keyCode == 13 && e.target.value.trim() != "") {
                onIntentSubmited();
            }
        });
        input.addEventListener('keyup', (e) => {
            setIntentColumnValue(e.target.value, e.target.value);
            if (e.target.validation.isValid) {
                setIntentActive(true);
            } else {
                setIntentActive(false,e.target.validation.message);
            }
        });
        input.addEventListener('init', () => {
            input.focus();
            input.validationList = [
                {
                    validator: /.{1}/g,
                    message: 'پر کردن فیلد اجباری است'
                },
            ];
        });
        input.addEventListener('init', () => {
            input.focus();
        });
        return input;
    }
    createNumberInput({ onIntentSubmited, setIntentColumnValue, setIntentActive }){
        const input = document.createElement('jb-input');
        
        input.addEventListener('keydown', (e) => {
            if (e.keyCode == 13 && e.target.value.trim() != "") {
                onIntentSubmited();
            }
        });
        input.addEventListener('keyup', (e) => {
            const value = parseInt(e.target.value);
            setIntentColumnValue(value,e.target.value);
            if (e.target.validation.isValid) {
                setIntentActive(true);
            } else {
                setIntentActive(false,e.target.validation.message);
            }
        });
        input.addEventListener('init', () => {
            input.focus();
            input.validationList = [
                {
                    validator: /.{1}/g,
                    message: 'پر کردن فیلد اجباری است'
                },
                {
                    validator: /^[0-9]*$/g,
                    message: 'تنها میتوانید عدد وارد نمایید'
                },
            ];
        });
        return input;
    }
    createSelectInput({ column, onIntentSubmited, setIntentColumnValue, setIntentActive }) {
        const select = document.createElement('jb-select');
        select.callbacks.getOptionTitle = column.config.getOptionTitle;
        select.callbacks.getOptionValue = column.config.getOptionValue;
        select.optionList = column.config.optionList;
        select.addEventListener('change', (e) => {
            let label = "";
            label = e.target.textValue;
            setIntentColumnValue(e.target.value, label);
            setIntentActive(true);
            onIntentSubmited();
        });
        select.addEventListener('init', () => {
            select.focus();
        });
        return select;
    }
    createDateInput({ column, onIntentSubmited, setIntentColumnValue, setIntentActive }) {
        const dateInput = document.createElement('jb-date-input');
        dateInput.required = true;
        dateInput.addEventListener('init', () => {
            dateInput.focus();
        });
        dateInput.addEventListener('keyup', (e) => {
            if (e.target.validation.isValid) {
                setIntentActive(true);
                const value = e.target.value;
                const label = e.target.inputValue;
                setIntentColumnValue(value, label);
            } else {
                setIntentActive(false,e.target.validation.message);
            }
        });
        dateInput.addEventListener('select', (e) => {
            setIntentActive(true);
            const value = e.target.value;
            const label = e.target.inputValue;
            setIntentColumnValue(value, label);
            onIntentSubmited();
        });
        return dateInput;
    }
}
export { InputFactory };