import React                from 'react'
import JBSearchBarViewModel   from './JBSearchBarViewModel'
import JBSelect          from '../../../react-component/jb-select/JBSelect'
import { observer }         from 'mobx-react'
import './JBSearchBar.scss'
import JBDateInput          from '../../../react-component/jb-date-input/JBDateInput';
@observer
class JBSearchBar extends React.Component {

    constructor(props){
        super(props);
        this.vm = new JBSearchBarViewModel(props)
    }
    componentDidMount(){
        this.vm.onComponentDidMount();
    }
    render () {
        const {vm} = this;
        return(
            <div className={"jb-search-bar-component "+(this.props.className != undefined?this.props.className:'')}>
                <section className="filter-dynamic-wrapper" ref={vm.elements.filterDynamicWrapper}>
                    <section className="filter-list-section">
                    {
                        vm.filterList.map((item,index)=>{
                            return(
                                <div className="item" key="index">
                                <span className="close-icon" onClick={(e)=>vm.removeFilterFromList(item,index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" id="close" viewBox="0 0 32 32" width="32"><path d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z" /></svg>
                                </span>
                                <span>{item.columnCaption}&nbsp;:&nbsp;</span>
                                <span>{item.valueCaption}</span>
                            </div>
                            )
                        })
                    }

                    </section>
                    <section className="filter-input-section" ref={vm.elements.filterInputWrapper}>
                        {
                            //if we are in column select mode
                            !vm.intentColumn && 
                            <div className="column-list-wrapper">
                                <JBSelectBox config={vm.columnSelectConfig} onChange={(e)=>vm.onColumnSelected(e)} ></JBSelectBox>
                            </div>
                            
                        }
                        {
                            //when we are in value input mode
                            vm.intentColumn && 
                            <div className="intent-wrapper" >
                                <div className="cancel-btn" onClick={()=>{vm.cancelIntentColumn()}}>
                                    <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 378.303 378.303">
                                        <polygon style={{fill:'#E04F5F'}} points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "/>
                                    </svg>
                                </div>
                                <div className="intent-column">
                                    <span>{vm.intentColumn.caption}:&nbsp;</span>
                                </div>
                                <div className="input-field-wrapper">
                                  <this.InputFieldWrapper column={vm.intentColumn} value={vm.intentValue} this={vm}/>
                                </div>
                                <div onClick={(e)=>vm.confirmIntent(e)} className={"confirm-btn "+((vm.intentValue&&vm.intentValue.isValid)?'active':'')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 493.464 493.464" xlink="http://www.w3.org/1999/xlink" space="preserve">
                                        <g>
                                            <g>
                                                <path d="M246.736,0C110.692,0,0.004,110.68,0.004,246.732c0,136.06,110.688,246.732,246.732,246.732    c136.048,0,246.724-110.672,246.724-246.732C493.456,110.68,382.78,0,246.736,0z M360.524,208.716L230.98,338.268    c-2.82,2.824-7.816,2.824-10.64,0l-86.908-86.912c-1.412-1.416-2.192-3.3-2.192-5.324c0.004-2.016,0.784-3.912,2.192-5.336    l11.108-11.104c1.412-1.408,3.3-2.18,5.328-2.18c2.016,0,3.908,0.772,5.316,2.18l67.752,67.752c1.5,1.516,3.94,1.516,5.444,0    l110.392-110.392c2.824-2.824,7.828-2.824,10.644,0l11.108,11.124c1.412,1.4,2.208,3.304,2.208,5.308    C362.732,205.412,361.936,207.3,360.524,208.716z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>

                            </div>
                        }   
                    </section>
                </section>
                <section className="filter-btn" onClick={(e)=>vm.onFilterBtnClick(e)}>
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="255" cy="255" r="170"></circle>
                        <g ref={vm.elements.spinnerBox} className="spin-line-group">
                            <rect x="0" y="0" width="512" height="512" />
                            <path ref={vm.elements.spinnerLine} className="convertable-line" d="M400 400 L 450 450"></path>
                        </g>
                    </svg>
                </section>
            </div>
        )
    }
    InputFieldWrapper(input){

        var column = input.column;
        var value = input.value;
        //stupid react dosent recognize this in current function so we replace it with context
        var context = input.this
        var returnValue;
        switch(column.type){
            case 'text':
                returnValue = 
                    <div className="text-input">
                        <input ref={context.elements.valueTextInput} onKeyUp={(e)=>context.onValueInputTextKeyUp(e)}  type="text" onChange={(e)=>context.onTextValueChange(e)} autoFocus={true}/>
                    </div>
            break;
            case 'number':
            returnValue = 
                    <div className="text-input">
                        <input type="number" onChange={(e)=>context.onNumberValueChange(e)} onKeyUp={(e)=>context.onValueInputTextKeyUp(e)} autoFocus={true}/>
                    </div>
            break;
            case 'date':
            returnValue = 
                    <div className="date-input">
                        <JBDateInput config={column.config}  onChange={(e)=>context.onDateValueChange(e)} autoFocus={true} onSubmit={(e)=>{context.onDateInputSubmit(e)}}/>
                    </div>
            break;
            case 'list':
            input.column.config.value = context.intentValue;
            returnValue = 
                    <div className="list-input">
                        <JBSelect value={context.intentValue.value} config={input.column.config} onChange={(e)=>{context.onListValueSelected(e)}} autoFocus={true}/>
                    </div>
            break;

        }
        return returnValue;
    }

}
export default JBSearchBar;