import React, { useRef, useState } from "react";
import { JBInfiniteScroll } from "jb-infinite-scroll/react";
export default {
  title: "Example/JBInfiniteScroll",
  component: JBInfiniteScroll,
};

const Template = (args) => <JBInfiniteScroll {...args}></JBInfiniteScroll>;
export const Normal = Template.bind({});
Normal.args = {
};




export const ActionTemplate = {
  render:
    (args) => {
      const ref = useRef(null);
      const [list, setList] = useState([1,2,3,4,5,6,7,8,9]) ;
      const [isLoading, setIsLoading] = useState(false) ;
      const [isListEnded,setIsListEnded] = useState(false);
      const onScrollEnd = ()=>{
        const i = list.at(-1);
        if(i>100){
          setIsListEnded(true);
        }
        setIsLoading(true);
        setTimeout(()=>{
          setList([...list,...[i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]]);
          setIsLoading(false);
        },1000);
      }
      return (
        <div style={{ height: "10rem", border: "solid 1px #666", overflow:"hidden" }}>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <JBInfiniteScroll {...args} ref={ref} onScrollEnd={onScrollEnd} isLoading={isLoading} isListEnded={isListEnded} disableCaptureScroll={isLoading}>
            <div slot="infinite-scroll-content">
              {
                list.map((item)=>{
                  return(<div key={item} style={{border:'solid 1px #black', fontSize:'3rem', textAlign:'center', padding:'2rem'}}>{item}</div>);
                })
              }
            </div>
          </JBInfiniteScroll>
        </div>
      );
    },
};
ActionTemplate.args = {
};



