import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CKOyGSmZ.js";import{A as n,d as r,u as i,v as a}from"./blocks-DEQQYZcV.js";import{t as o}from"./mdx-react-shim-QcUogR78.js";var s,c=e((()=>{s=`# jb-infinite-scroll React Component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-infinite-scroll)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-infinite-scroll/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-infinite-scroll-react)](https://www.npmjs.com/package/jb-infinite-scroll-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-infinite-scroll)

React wrapper for \`jb-infinite-scroll\`, an infinite-scroll container with loading, empty, ended, and stick-to-bottom states.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-jbinfinitescroll)
- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-infinite-scroll)
- [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBInfiniteScroll.tsx)

## Installation

\`\`\`sh
npm i jb-infinite-scroll
\`\`\`

\`\`\`jsx
import { JBInfiniteScroll } from 'jb-infinite-scroll/react';

<JBInfiniteScroll>
  <div slot="content">Content</div>
</JBInfiniteScroll>
\`\`\`

## When to use

Use \`JBInfiniteScroll\` when a React view should load more content as the user reaches the bottom of a scrollable area.

Use \`stickToBottom\` for chat or log views that should stay pinned to the bottom while the user is already near the bottom.

## Props

| prop | type | description |
| --- | --- | --- |
| \`isLoading\` | \`boolean\` | Shows loading UI and prevents \`onScrollEnd\` capture while true. |
| \`isListEmpty\` | \`boolean\` | Shows empty UI, hides content, and prevents \`onScrollEnd\` capture while true. |
| \`isListEnded\` | \`boolean\` | Marks the list as ended and prevents future \`onScrollEnd\` capture while true. |
| \`disableCaptureScroll\` | \`boolean\` | Disables \`onScrollEnd\` capture while true. |
| \`stateChangeWaitingBehavior\` | \`StateChangeWaitingBehavior\` | \`FORCE_WAIT\` or \`NO_WAIT\` behavior after \`onScrollEnd\`. |
| \`stickToBottom\` | \`boolean\` | Keeps the scroll position at the bottom when content changes, unless the user has scrolled away. |

## Events

| prop | event | description |
| --- | --- | --- |
| \`onScrollEnd\` | \`scrollEnd\` | Fired when the internal scroll wrapper reaches the bottom and capture is allowed. |
| \`onInit\` | \`init\` | Fired after initialization. |
| \`onLoad\` | \`load\` | Fired before initialization. |
| \`onScroll\` | \`scroll\` | Fired when the internal content wrapper scrolls. Prefer \`onScrollEnd\` for load-more behavior. |

## Basic usage

\`\`\`jsx
const ref = useRef(null);
const [list, setList] = useState([1, 2, 3, 4, 5]);
const [isLoading, setIsLoading] = useState(false);
const [isListEnded, setIsListEnded] = useState(false);

async function onScrollEnd() {
  setIsLoading(true);

  const nextItems = await loadMoreItems();
  setList((current) => [...current, ...nextItems]);
  setIsListEnded(nextItems.length === 0);
  setIsLoading(false);
}

return (
  <JBInfiniteScroll
    ref={ref}
    isLoading={isLoading}
    isListEnded={isListEnded}
    onScrollEnd={onScrollEnd}
  >
    <div slot="content">
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  </JBInfiniteScroll>
);
\`\`\`

## Content slot

\`\`\`jsx
<JBInfiniteScroll>
  <div slot="content">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
</JBInfiniteScroll>
\`\`\`

## Loading and empty slots

\`\`\`jsx
<JBInfiniteScroll isLoading>
  <div slot="content">{items.map(renderItem)}</div>
  <div slot="loading">Loading...</div>
</JBInfiniteScroll>
\`\`\`

\`\`\`jsx
<JBInfiniteScroll isListEmpty>
  <div slot="empty">No items found</div>
</JBInfiniteScroll>
\`\`\`

## Ended and disabled capture

\`\`\`jsx
<JBInfiniteScroll isListEnded>
  <div slot="content">{items.map(renderItem)}</div>
</JBInfiniteScroll>
\`\`\`

\`\`\`jsx
<JBInfiniteScroll disableCaptureScroll={isPageBusy}>
  <div slot="content">{items.map(renderItem)}</div>
</JBInfiniteScroll>
\`\`\`

## State-change waiting behavior

The default behavior is \`FORCE_WAIT\`, which prevents repeated \`onScrollEnd\` calls until you update a state such as \`isLoading\`, \`isListEnded\`, or \`isListEmpty\`.

\`\`\`jsx
import {
  JBInfiniteScroll,
  StateChangeWaitingBehavior,
} from 'jb-infinite-scroll/react';

<JBInfiniteScroll
  stateChangeWaitingBehavior={StateChangeWaitingBehavior.noWait}
  onScrollEnd={onScrollEnd}
>
  <div slot="content">{items.map(renderItem)}</div>
</JBInfiniteScroll>
\`\`\`

## Stick to bottom

\`\`\`jsx
<JBInfiniteScroll stickToBottom>
  <div slot="content">{messages.map(renderMessage)}</div>
</JBInfiniteScroll>
\`\`\`

If the user scrolls more than 6.25rem away from the bottom, automatic stick-to-bottom pauses. Use the ref when you need to force the bottom position.

\`\`\`jsx
ref.current?.scrollToEnd({ behavior: 'smooth' });
\`\`\`

## Styling

The React component uses the same CSS parts and custom states as the web component.

\`\`\`css
.chat-scroll::part(content-wrapper) {
  scroll-behavior: smooth;
}

.chat-scroll:state(loading)::part(loading-wrapper) {
  padding: 1rem;
}
\`\`\`

\`\`\`jsx
<JBInfiniteScroll className="chat-scroll" />
\`\`\`

## Shared Documentation

For web-component behavior, methods, events, slots, CSS parts, and the full API, see [\`jb-infinite-scroll\`](https://github.com/javadbat/jb-infinite-scroll).

## AI agent notes

- Import \`JBInfiniteScroll\` from \`jb-infinite-scroll/react\`; the wrapper imports and registers the underlying \`jb-infinite-scroll\` web component.
- Put list content inside a child with \`slot="content"\`.
- Use \`onScrollEnd\` for load-more behavior.
- Use \`onScroll\` for regular scroll-position updates.
- In default \`FORCE_WAIT\` mode, update \`isLoading\`, \`isListEnded\`, or \`isListEmpty\` after \`onScrollEnd\`.
- Use \`isListEnded\` when the API has no more data.
- Use \`ref.current.scrollToEnd()\` to force the scroll position to the bottom.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBInfiniteScroll/React Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};