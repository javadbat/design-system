import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-D02JOK2M.js";import{n as a,t as o}from"./jb-tooltip-DxLDqjCr.js";var s=e({BasicText:()=>C,CustomContent:()=>D,FallbackPositions:()=>k,HoverInteraction:()=>w,ImperativeApi:()=>A,Positions:()=>O,RichContent:()=>E,WithTail:()=>T,__namedExportsOrder:()=>j,default:()=>S});function c({children:e,content:t,positionArea:n=`top`,positionTryFallbacks:r=`flip-block, flip-inline`,tail:i=!1}){return(0,g.createElement)(`jb-tooltip`,{content:t,"position-area":n,"position-try-fallbacks":r,tail:i?`true`:void 0},e)}function l({content:e,positionArea:t,positionTryFallbacks:n,tail:r,triggerLabel:i}){return(0,_.jsx)(c,{content:e,positionArea:t,positionTryFallbacks:n,tail:r,children:(0,_.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:i})})}function u(e,t=`jb-tooltip`){let n=e.querySelector(t);return v(n).toBeTruthy(),n}function d(e){let t=e.querySelector(`button`);return v(t).toBeTruthy(),t}function f(e){let t=e.shadowRoot?.querySelector(`.tooltip`);return v(t).toBeTruthy(),t}async function p(e){await b(()=>{v(e.open).toBe(!0),v(f(e).matches(`:popover-open`)).toBe(!0)})}async function m(e){await b(()=>{v(e.open).toBe(!1),v(f(e).matches(`:popover-open`)).toBe(!1)})}async function h(e,t){let n=d(e);n.focus(),await p(e),await b(()=>v(f(e).dataset.placement).toBe(t));let r=n.getBoundingClientRect(),i=f(e).getBoundingClientRect();t===`top`?v(i.bottom).toBeLessThanOrEqual(r.top):t===`right`?v(i.left).toBeGreaterThanOrEqual(r.right):t===`bottom`?v(i.top).toBeGreaterThanOrEqual(r.bottom):v(i.right).toBeLessThanOrEqual(r.left),e.hide(),n.blur(),await m(e)}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{a(),o(),g=n(r(),1),_=i(),{expect:v,userEvent:y,waitFor:b}=__STORYBOOK_MODULE_TEST__,x=[`top`,`right`,`bottom`,`left`],S={title:`Components/JBTooltip`,component:l,parameters:{layout:`centered`},args:{content:`A concise explanation for this control.`,positionArea:`top`,positionTryFallbacks:`flip-block, flip-inline`,tail:!1,triggerLabel:`Focus or hover me`},argTypes:{content:{control:`text`},positionArea:{control:`select`,options:x},positionTryFallbacks:{control:`text`},tail:{control:`boolean`},triggerLabel:{control:`text`}}},C={play:async({canvasElement:e})=>{let t=u(e),n=d(t);n.focus(),await p(t),v(n).toHaveAttribute(`aria-description`,`A concise explanation for this control.`),await y.keyboard(`{Escape}`),await m(t)}},w={args:{content:`The tooltip remains available to pointer users.`,triggerLabel:`Hover me`},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await y.hover(n),await p(t),await y.unhover(n),await m(t)}},T={args:{content:`The triangle follows the resolved placement.`,tail:!0,triggerLabel:`Tooltip with tail`},play:async({canvasElement:e})=>{let t=u(e),n=d(t),r=t.shadowRoot?.querySelector(`.default-message`),i=r?.shadowRoot?.querySelector(`.tooltip-tail`);n.focus(),await p(t),await b(()=>v(f(t).dataset.placement).toBe(`top`)),v(r?.dataset.placement).toBe(`top`),v(i).toBeTruthy(),v(getComputedStyle(i).display).toBe(`block`)}},E={render:()=>(0,_.jsxs)(c,{children:[(0,_.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:`Save`}),(0,g.createElement)(`jb-tooltip-message`,{slot:`content`},(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`strong`,{children:`Save changes`}),` `,(0,_.jsx)(`span`,{className:`rich-content-detail`,children:`Stores the current draft.`})]}))]}),play:async({canvasElement:e})=>{let t=u(e),n=d(t);n.focus(),await p(t),v(n).toHaveAttribute(`aria-description`,`Save changes Stores the current draft.`),v(t.querySelector(`jb-tooltip-message`)).toBeTruthy()}},D={render:()=>(0,_.jsxs)(c,{positionArea:`bottom`,children:[(0,_.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:`Build status`}),(0,_.jsxs)(`div`,{className:`custom-tooltip-content`,slot:`content`,children:[(0,_.jsx)(`span`,{className:`custom-tooltip-dot`}),`All checks passed`]})]})},O={parameters:{layout:`fullscreen`},render:()=>(0,_.jsx)(`div`,{className:`tooltip-position-gallery`,children:x.map(e=>(0,_.jsxs)(`div`,{className:`tooltip-position-example`,children:[(0,_.jsx)(`span`,{className:`tooltip-position-label`,children:e}),(0,_.jsx)(c,{content:`Tooltip placed at the ${e}`,positionArea:e,positionTryFallbacks:`none`,tail:!0,children:(0,_.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:e})})]},e))}),play:async({canvasElement:e})=>{v(CSS.supports(`position-area`,`top`)).toBe(!0);for(let t of x)await h(u(e,`jb-tooltip[position-area="${t}"]`),t)}},k={parameters:{layout:`fullscreen`},render:()=>(0,_.jsxs)(`div`,{className:`tooltip-fallback-stage`,children:[(0,_.jsxs)(`div`,{className:`tooltip-fallback-case tooltip-fallback-block`,children:[(0,_.jsx)(`span`,{children:`Requested top → resolved bottom`}),(0,_.jsx)(c,{content:`Flipped away from the top viewport edge`,positionArea:`top`,tail:!0,children:(0,_.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:`Top edge`})})]}),(0,_.jsxs)(`div`,{className:`tooltip-fallback-case tooltip-fallback-inline`,children:[(0,_.jsx)(`span`,{children:`Requested left → resolved right`}),(0,_.jsx)(c,{content:`Flipped away from the left viewport edge`,positionArea:`left`,tail:!0,children:(0,_.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:`Left edge`})})]})]}),play:async({canvasElement:e})=>{v(CSS.supports(`position-try-fallbacks`,`flip-block, flip-inline`)).toBe(!0);let t=u(e,`jb-tooltip[position-area="top"]`);await h(t,`bottom`),v(t.shadowRoot?.querySelector(`.default-message`)?.dataset.placement).toBe(`bottom`);let n=u(e,`jb-tooltip[position-area="left"]`);await h(n,`right`),v(n.shadowRoot?.querySelector(`.default-message`)?.dataset.placement).toBe(`right`)}},A={args:{content:`Controlled with show(), hide(), and toggle().`,triggerLabel:`Imperative tooltip`},play:async({canvasElement:e})=>{let t=u(e);t.show(),await p(t),t.hide(),await m(t),v(t.toggle()).toBe(!0),await p(t),v(t.toggle()).toBe(!1),await m(t)}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const tooltip = getTooltip(canvasElement);
    const trigger = getTrigger(tooltip);
    trigger.focus();
    await expectOpen(tooltip);
    expect(trigger).toHaveAttribute("aria-description", "A concise explanation for this control.");
    await userEvent.keyboard("{Escape}");
    await expectClosed(tooltip);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    content: "The tooltip remains available to pointer users.",
    triggerLabel: "Hover me"
  },
  play: async ({
    canvasElement
  }) => {
    const tooltip = getTooltip(canvasElement);
    const trigger = getTrigger(tooltip);
    await userEvent.hover(trigger);
    await expectOpen(tooltip);
    await userEvent.unhover(trigger);
    await expectClosed(tooltip);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    content: "The triangle follows the resolved placement.",
    tail: true,
    triggerLabel: "Tooltip with tail"
  },
  play: async ({
    canvasElement
  }) => {
    const tooltip = getTooltip(canvasElement);
    const trigger = getTrigger(tooltip);
    const message = tooltip.shadowRoot?.querySelector<HTMLElement>(".default-message");
    const tail = message?.shadowRoot?.querySelector<HTMLElement>(".tooltip-tail");
    trigger.focus();
    await expectOpen(tooltip);
    await waitFor(() => expect(getSurface(tooltip).dataset.placement).toBe("top"));
    expect(message?.dataset.placement).toBe("top");
    expect(tail).toBeTruthy();
    expect(getComputedStyle(tail!).display).toBe("block");
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipElement>
      <button className="tooltip-trigger" type="button">
        Save
      </button>
      {createElement("jb-tooltip-message", {
      slot: "content"
    }, <>
          <strong>Save changes</strong> <span className="rich-content-detail">Stores the current draft.</span>
        </>)}
    </TooltipElement>,
  play: async ({
    canvasElement
  }) => {
    const tooltip = getTooltip(canvasElement);
    const trigger = getTrigger(tooltip);
    trigger.focus();
    await expectOpen(tooltip);
    expect(trigger).toHaveAttribute("aria-description", "Save changes Stores the current draft.");
    expect(tooltip.querySelector("jb-tooltip-message")).toBeTruthy();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipElement positionArea="bottom">
      <button className="tooltip-trigger" type="button">
        Build status
      </button>
      <div className="custom-tooltip-content" slot="content">
        <span className="custom-tooltip-dot" />
        All checks passed
      </div>
    </TooltipElement>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="tooltip-position-gallery">
      {positions.map(position => <div className="tooltip-position-example" key={position}>
          <span className="tooltip-position-label">{position}</span>
          <TooltipElement content={\`Tooltip placed at the \${position}\`} positionArea={position} positionTryFallbacks="none" tail>
            <button className="tooltip-trigger" type="button">
              {position}
            </button>
          </TooltipElement>
        </div>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    expect(CSS.supports("position-area", "top")).toBe(true);
    for (const position of positions) {
      const tooltip = getTooltip(canvasElement, \`jb-tooltip[position-area="\${position}"]\`);
      await expectPosition(tooltip, position);
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="tooltip-fallback-stage">
      <div className="tooltip-fallback-case tooltip-fallback-block">
        <span>Requested top → resolved bottom</span>
        <TooltipElement content="Flipped away from the top viewport edge" positionArea="top" tail>
          <button className="tooltip-trigger" type="button">
            Top edge
          </button>
        </TooltipElement>
      </div>
      <div className="tooltip-fallback-case tooltip-fallback-inline">
        <span>Requested left → resolved right</span>
        <TooltipElement content="Flipped away from the left viewport edge" positionArea="left" tail>
          <button className="tooltip-trigger" type="button">
            Left edge
          </button>
        </TooltipElement>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    expect(CSS.supports("position-try-fallbacks", "flip-block, flip-inline")).toBe(true);
    const blockFallback = getTooltip(canvasElement, 'jb-tooltip[position-area="top"]');
    await expectPosition(blockFallback, "bottom");
    expect(blockFallback.shadowRoot?.querySelector<HTMLElement>(".default-message")?.dataset.placement).toBe("bottom");
    const inlineFallback = getTooltip(canvasElement, 'jb-tooltip[position-area="left"]');
    await expectPosition(inlineFallback, "right");
    expect(inlineFallback.shadowRoot?.querySelector<HTMLElement>(".default-message")?.dataset.placement).toBe("right");
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Controlled with show(), hide(), and toggle().",
    triggerLabel: "Imperative tooltip"
  },
  play: async ({
    canvasElement
  }) => {
    const tooltip = getTooltip(canvasElement);
    tooltip.show();
    await expectOpen(tooltip);
    tooltip.hide();
    await expectClosed(tooltip);
    expect(tooltip.toggle()).toBe(true);
    await expectOpen(tooltip);
    expect(tooltip.toggle()).toBe(false);
    await expectClosed(tooltip);
  }
}`,...A.parameters?.docs?.source}}},j=[`BasicText`,`HoverInteraction`,`WithTail`,`RichContent`,`CustomContent`,`Positions`,`FallbackPositions`,`ImperativeApi`]}));M();export{C as BasicText,D as CustomContent,k as FallbackPositions,w as HoverInteraction,A as ImperativeApi,O as Positions,E as RichContent,T as WithTail,j as __namedExportsOrder,S as default,M as n,s as t};