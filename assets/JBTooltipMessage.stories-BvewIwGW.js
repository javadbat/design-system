import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-D02JOK2M.js";import{n as i,t as a}from"./jb-tooltip-DxLDqjCr.js";function o({size:e,tail:t}){let n={"position-area":`top`,tail:t?`true`:void 0},r={size:e,slot:`content`};return(0,c.createElement)(`jb-tooltip`,n,(0,l.jsxs)(`button`,{className:`tooltip-trigger`,type:`button`,children:[e.toUpperCase(),` message`]}),(0,c.createElement)(`jb-tooltip-message`,r,`${e.toUpperCase()} tooltip message`))}async function s({canvasElement:e}){let t=e.querySelector(`jb-tooltip`),n=t?.querySelector(`button`),r=t?.querySelector(`jb-tooltip-message`),i=r?.shadowRoot?.querySelector(`.tooltip-tail`);u(t).toBeTruthy(),u(n).toBeTruthy(),u(r).toBeTruthy(),n.focus(),await d(()=>u(t.open).toBe(!0)),await d(()=>u(r.dataset.placement).toBe(`top`)),u(getComputedStyle(i).display).toBe(`block`)}var c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{i(),a(),c=t(n(),1),l=r(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f=[`xs`,`sm`,`md`,`lg`,`xl`],p={title:`Components/JBTooltip/Message`,component:o,parameters:{layout:`centered`},args:{size:`md`,tail:!0},argTypes:{size:{control:`select`,options:f},tail:{control:`boolean`}}},m={render:e=>(0,l.jsx)(`div`,{className:`tooltip-message-size-gallery`,children:f.map(t=>(0,l.jsx)(o,{size:t,tail:e.tail},t))})},h={args:{size:`xs`},play:s},g={args:{size:`sm`},play:s},_={args:{size:`md`},play:s},v={args:{size:`lg`},play:s},y={args:{size:`xl`},play:s},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="tooltip-message-size-gallery">
      {sizes.map(size => <TooltipMessageSample key={size} size={size} tail={args.tail} />)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xs"
  },
  play: openMessage
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  play: openMessage
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  play: openMessage
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  play: openMessage
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xl"
  },
  play: openMessage
}`,...y.parameters?.docs?.source}}},b=[`Sizes`,`ExtraSmall`,`Small`,`Medium`,`Large`,`ExtraLarge`]}));x();export{y as ExtraLarge,h as ExtraSmall,v as Large,_ as Medium,m as Sizes,g as Small,b as __namedExportsOrder,p as default,x as t};