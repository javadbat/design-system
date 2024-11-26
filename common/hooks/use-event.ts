import { useEffect } from "react";

export function useEvent(dom:HTMLElement, event:any, handler:any, passive = false) {
  useEffect(() => {
    if (dom) {
      // initiate the event handler
      dom.addEventListener(event, handler, passive); 
    }
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      if(dom){
        dom.removeEventListener(event, handler, passive);
      }
    };
  });
}
export function useBindEvent<TRef extends React.MutableRefObject<any|null>,TEvent>(ref:TRef, event:string, handler:(e:TEvent)=>void, passive = false) {
  useEffect(() => {
    const dom = ref.current;
    if (dom) {
      // initiate the event handler
      dom.addEventListener(event, handler, passive); 
    }
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      if(dom){
        dom.removeEventListener(event, handler, passive);
      }
    };
  },[ref,event,handler,passive]);
}