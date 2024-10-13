import React, { useCallback, useEffect, useRef, useState } from 'react';
import {useEvent} from '../../../common/hooks/use-event.js';
import 'jb-searchbar';
//TODO: replace it after you migrate web-component to typescript
type JBSearchbarWebComponent = any;
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'jb-searchbar': JBSearchbarType;
    }
    interface JBSearchbarType extends React.DetailedHTMLProps<React.HTMLAttributes<JBSearchbarWebComponent>, JBSearchbarWebComponent> {
      "class"?: string,
      "type"?: string,
      "placeholder"?:string,
    }
  }
}
export function JBSearchbar(props:Props) {
  const element = useRef<JBSearchbarWebComponent>();
  const [refChangeCount, refChangeCountSetter] = useState(0);
  useEffect(() => {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  useEffect(() => {
    element.current.columnList = props.columnList;
  }, [props.columnList]);
  useEffect(() => {
    if(props.searchOnChange){
      element.current.searchOnChange = true;
    }else{
      element.current.searchOnChange = false;
    }
  },[props.searchOnChange]);
  const onSearch = useCallback(()=>{
    if(typeof props.onSearch === 'function'){
      props.onSearch();
    }
  },[props.onSearch]);
  useEvent(element.current, 'search', onSearch);
  return (
    <jb-searchbar placeholder={props.placeholder} ref={element}></jb-searchbar>
  );
}
type Props = {
  placeholder: string,
  searchOnChange: boolean,
  //TODO: fix it i dont have time right now
  onSearch: ()=>any,
  columnList:any[],
}
