import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Cke0LeCu.js";import{n}from"./jb-tooltip-DhZD8fcx.js";import{i as r,r as i,t as a}from"./react-Bvl9m9RA.js";function o({size:e,tail:t}){return(0,c.jsxs)(i,{positionArea:`top`,tail:t,children:[(0,c.jsxs)(`button`,{className:`tooltip-trigger`,type:`button`,children:[e.toUpperCase(),` message`]}),(0,c.jsxs)(r,{size:e,slot:`content`,children:[e.toUpperCase(),` tooltip message`]})]})}async function s({canvasElement:e}){let t=e.querySelector(`jb-tooltip`),n=t?.querySelector(`button`),r=t?.querySelector(`jb-tooltip-message`),i=r?.shadowRoot?.querySelector(`.tooltip-tail`);l(t).toBeTruthy(),l(n).toBeTruthy(),l(r).toBeTruthy(),n.focus(),await u(()=>l(t.open).toBe(!0)),await u(()=>l(r.dataset.placement).toBe(`top`)),l(getComputedStyle(i).display).toBe(`block`)}var c,l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{n(),a(),c=t(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d=[`xs`,`sm`,`md`,`lg`,`xl`],f={title:`Components/JBTooltip/Message`,component:o,parameters:{layout:`centered`},args:{size:`md`,tail:!0},argTypes:{size:{control:`select`,options:d},tail:{control:`boolean`}}},p={render:e=>(0,c.jsx)(`div`,{className:`tooltip-message-size-gallery`,children:d.map(t=>(0,c.jsx)(o,{size:t,tail:e.tail},t))})},m={args:{size:`xs`},play:s},h={args:{size:`sm`},play:s},g={args:{size:`md`},play:s},_={args:{size:`lg`},play:s},v={args:{size:`xl`},play:s},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="tooltip-message-size-gallery">
      {sizes.map(size => <TooltipMessageSample key={size} size={size} tail={args.tail} />)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xs"
  },
  play: openMessage
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  play: openMessage
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  play: openMessage
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  play: openMessage
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xl"
  },
  play: openMessage
}`,...v.parameters?.docs?.source}}},y=[`Sizes`,`ExtraSmall`,`Small`,`Medium`,`Large`,`ExtraLarge`]}));b();export{v as ExtraLarge,m as ExtraSmall,_ as Large,g as Medium,p as Sizes,h as Small,y as __namedExportsOrder,f as default,b as t};