import{j as n,M as o,k as s}from"./index-CSKg4GO5.js";import{useMDXComponents as l}from"./index-DVgGKjXv.js";import"./iframe-DUf3GCZ6.js";import"./index-DwQS_Y10.js";import"./index-BrB0Fkit.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const a=`# jb-infinite-scroll

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-infinite-scroll)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-infinite-scroll/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-infinite-scroll)](https://www.npmjs.com/package/jb-infinite-scroll)

Infinite scroll web-component with  additional features including:

- custom list ui
- empty list state and custom empty list ui
- end of the list state
- enable/disable scroll capture
- support loading state with customizable ui
- works well in chat bots for ability like \`stick-to-bottom\` and history loading

## Demo

- [codepen](https://codepen.io/javadbat/pen/EaYGGEo)    
- [storybook](https://javadbat.github.io/design-system/?path=/story/components-jbinfinitescroll)

## using with JS frameworks

to use this component in **react** see [\`jb-infinite-scroll/react\`](https://github.com/javadbat/jb-infinite-scroll/tree/main/react);

## installation

\`\`\`js
 import "jb-infinite-scroll";
\`\`\`
## usage

\`\`\`html
  <jb-infinite-scroll></jb-infinite-scroll>
\`\`\`

## show content

you can show your content by placing any element with slot attribute \`slot="content"\` like the example below:

\`\`\`html
    <jb-infinite-scroll>
        <div slot="content">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
        </div>
    </jb-infinite-scroll>

\`\`\`

## add scroll callback

you can add your onscroll callback function to \`scrollEnd\` event listener.

if \`is-loading\` ,\`is-list-empty\` ,\`is-list-ended\` or \`disable-capture-scroll\` is true  the callback function won't be executed.

\`\`\`js
    const InfiniteScroll = document.getElementByTagName('jb-infinite-scroll');
    jbInfiniteScroll.addEventListener('scrollEnd',() => {
        //load your content here
        console.log('scroll');
    })
\`\`\`

## set loading

you can show loading by setting \`is-loading ="true"\` attribute or \`isLoading\` property.

\`\`\`js
    const jbInfiniteScroll = document.getElementByTagName('jb-infinite-scroll');
    jbInfiniteScroll.isLoading = true;
\`\`\`
 you can also set your own loading ui by adding a slot with \`slot="loading"\` like the example below:

\`\`\`html
    <jb-infinite-scroll is-loading="true">
        <div slot="loading">
            <p>your loading</p>
        </div>
    </jb-infinite-scroll>

\`\`\`

## set list empty

if there is no data to show you can set \`is-list-empty = "true"\`.

\`\`\`js
    const jbInfiniteScroll = document.getElementByTagName('jb-infinite-scroll');
    jbInfiniteScroll.isListEmpty = true;
\`\`\` 
 you can set your own empty list ui by adding a slot with \`slot="empty"\` like the example below:
\`\`\`html
    <jb-infinite-scroll is-list-empty="true">
        <div slot="empty">
            <p>list is empty</p>
        </div>
    </jb-infinite-scroll>

\`\`\`
## set list ended
if there is no more data to show you can set \`is-list-ended = "true"\`.this disables scroll capturing and \`scrollEnd\` event won't be called after.

\`\`\`js
    const jbInfiniteScroll = document.getElementByTagName('jb-infinite-scroll');
    jbInfiniteScroll.isListEnded = true;
\`\`\` 
\`\`\`html
    <jb-infinite-scroll is-list-ended="true">
    </jb-infinite-scroll>

\`\`\`

## disable scroll capture
in some cases if you want to disable capture scroll you can set \`disable-capture-scroll = "true"\`'

\`\`\`js
    const InfiniteScroll = document.getElementByTagName('jb-infinite-scroll');
    InfiniteScroll.disableCaptureScroll = true;
\`\`\` 




## state-change-waiting-behavior

by default \`state-change-waiting-behavior\` is \`FORCE_WAIT\` thats means when an scroll event fires,scroll is not captured until one of the \`is-loading\` ,\`is-list-empty\` ,\`is-list-ended\` states updates.
if you want to change this behavior you can set \`state-change-waiting-behavior\` to \`NO_WAIT\`. that means the scroll callback in not dependent on \`is-loading\`,\`is-list-empty\`,\`is-list-ended\` state update.

we do this to prevent multiple call for one scroll to the end, because in most cases you would set some loading or list ended state or list is empty state  after the scroll end called. but if you want to handle states by yourself and not use our state manager mechanism you can just set this to \`NO_WAIT\` to handle everything by yourself

### usage overview
\`\`\`html
    <jb-infinite-scroll is-list-empty="true" is-loading="true">
        <div slot="content">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
        </div>
        <div slot="empty">
            <p>list is empty</p>
        </div>
        <div slot="loading">
            <p>loading</p>
        </div>
    </jb-infinite-scroll>
\`\`\`
## change scroll position
\`\`\`js
    const InfiniteScroll = document.getElementByTagName('jb-infinite-scroll');
    InfiniteScroll.scrollTo({ behavior: 'smooth', top: 400 })
    InfiniteScroll.scrollToEnd()
\`\`\`
## styling
you can use \`::part\` to apply style on our web-component part
\`\`\`css
jb-infinite-scroll::part(content-wrapper){
  display:'flex'
}
jb-infinite-scroll:states(loading)::part(loading-wrapper){
  background:red;
}
\`\`\`
we have \`content-wrapper\`, \`loading-wrapper\`, \`empty-list-wrapper\`, \`default-loading\` as a supported part in our component. you can also combine them with \`loading\`, \`empty\` states for different style in different states.
if you want to style default loading see [jb-loading](https://github.com/javadbat/jb-loading) styling section.

## Stick To Bottom

in some cases like chat boxes we need component scroll to stick to the bottom of the component so when ne message or content comes at the end box will automatically scroll to the end. to achieve this you just have to add \`stick-to-bottom\` attribute to the web component.
\`\`\`html
<jb-infinite-scroll stick-to-bottom>
    <!-- your html content -->
</jb-infinite-scroll>
<!-- OR -->
 <jb-infinite-scroll stick-to-bottom="true">
    <!-- your html content -->
</jb-infinite-scroll>
\`\`\`
> Attention: scroll down only occurs when user also is on the bottom of the chat box. when new content comes. if user scrolled top (>100px) it will not stick to the bottom and respect user choice who need to read the top sections. if you need to scroll to the end in any cases please call \`scrollToEnd()\` method.

## Other Related Docs:

- see [jb-infinite-scroll/react](https://github.com/javadbat/jb-infinite-scroll/tree/main/react) if you want to use this component in react.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function i(t){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/JBInfiniteScroll/Readme"}),`
`,n.jsx(s,{children:a})]})}function f(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i()}export{f as default};
