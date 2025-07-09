import{j as n,M as o,m as s}from"./index-DNu3q6De.js";import{useMDXComponents as a}from"./index-B8rYRX2K.js";import"./iframe-DTTFZawr.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const l=`# jb-infinite-scroll React Component

infinite scroll react component. 

>this component is a react wrapper for [jb-infinite-scroll](https://github.com/javadbat/jb-infinite-scroll). so for more information read it's doc.

Demo in codeSandBox: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-infinite-scroll) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBInfiniteScroll.tsx) if you want to see and play with code

## usage
first install component in npm or any other package manager

\`\`\`
npm i jb-infinite-scroll
\`\`\`
then import package and use it in react

\`\`\`jsx
import { JBInfiniteScroll } from "jb-infinite-scroll/react";

<JBInfiniteScroll></JBInfiniteScroll>
\`\`\`

here is the overview of the component usage in an app:

\`\`\`jsx
      //using ref is optional but in some cases you may need direct access to web-component you can use this
      const ref = useRef(null);
      const [list, setList] = useState([1,2,3,4,5,6,7,8,9]);
      //loading is optional but you can use it when you load some data from API
      const [isLoading, setIsLoading] = useState(false);
      //isListEnded is optional too but its better to set it so component dont capture scroll anymore
      const [isListEnded,setIsListEnded] = useState(false);
      // when user scroll all the content to the end of list
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
          <JBInfiniteScroll ref={ref} onScrollEnd={onScrollEnd} isLoading={isLoading} isListEnded={isListEnded} disableCaptureScroll={isLoading}>
            <div slot="content">
              {
                list.map((item)=>{
                  return(<div key={item}>{item}</div>);
                })
              }
            </div>
          </JBInfiniteScroll>
      );
\`\`\`

## content

to show content you just have to place a html dom element with \`slot="content"\`prop on it in the component children area:

\`\`\`jsx
<JBInfiniteScroll>
  <div slot="content">
    <div>item 1</div>
    <div>item 2</div>
    <div>item 3</div>
  </div>
</JBInfiniteScroll>

\`\`\`
## onScrollEnd

when user scroll content to the end we dispatch \`onScrollEnd\` event so ypu can load more content on demand

\`\`\`jsx
 <JBInfiniteScroll onScrollEnd={e=>{/*load your content here*/}}></JBInfiniteScroll>
\`\`\`

## set loading

you can show loading by setting \`isLoading ="true"\` prop.

\`\`\`jsx
    <JBInfiniteScroll isLoading={true}></JBInfiniteScroll>
\`\`\`
 you can also implement your own loading ui by adding a slot with \`slot="loading"\` like the example below:

\`\`\`jsx
    <JBInfiniteScroll isLoading={true}>
        <div slot="loading">
            <p>your loading</p>
        </div>
    </JBInfiniteScroll>

\`\`\`
## Empty List

if there is no data to show you can set \`isListEmpty = "true"\`.

\`\`\`jsx
<JBInfiniteScroll isListEmpty={true}></JBInfiniteScroll>
\`\`\` 
 you can set your own empty list ui by adding a slot with \`slot="empty"\` like the example below:
\`\`\`html
    <JBInfiniteScroll isListEmpty={true}>
        <div slot="empty">
            <p>list is empty</p>
        </div>
    </JBInfiniteScroll>

\`\`\`

## set list ended
if there is no more data to show you can set \`isListEnded = "true"\`.this disables scroll capturing and \`onScrollEnd\` event won't be called after.

\`\`\`jsx
    <JBInfiniteScroll isListEnded="true">
    </JBInfiniteScroll>
\`\`\`

## disable scroll capture
in some cases like when you load your content or your page didn't fully load or any other scenario you may want to disable \`onScrollEnd\` event so it does not capture anything. in this cases you can just set \`disableCaptureScroll = "true"\`' to disable event listener.

\`\`\`jsx
    <JBInfiniteScroll disableCaptureScroll="true">
    </JBInfiniteScroll>
\`\`\`

## stateChangeWaitingBehavior

by default \`stateChangeWaitingBehavior\` is \`FORCE_WAIT\` thats means when an scroll event fires, scroll is not captured until on of the \`isLoading\` ,\`isListEmpty\` ,\`isListEnded\` states updates.
if you want to change this behavior you can set \`stateChangeWaitingBehavior\` to \`NO_WAIT\`. thats means the scroll callback in not dependent on \`is-loading\`,\`is-list-empty\`,\`is-list-ended\` state update.

if you are using typeScript set it via \`StateChangeWaitingBehavior\` enum:

\`\`\`jsx
  import {StateChangeWaitingBehavior} from 'jb-infinite-scroll'; 
  <JBInfiniteScroll StateChangeWaitingBehavior={StateChangeWaitingBehavior.noWait}>
  </JBInfiniteScroll>
\`\`\`
## styling

read the [jb-infinite-scroll](https://github.com/javadbat/jb-infinite-scroll) styling section it exactly the same.

`;function i(t){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/JBInfiniteScroll/React Readme"}),`
`,n.jsx(s,{children:l})]})}function g(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i()}export{g as default};
