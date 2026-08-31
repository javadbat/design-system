import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-BDNDt1nU.js";import{n as r}from"./jb-tooltip-DDzuaMmp.js";import{i,r as a,t as o}from"./react-C6dV_itI.js";var s=e({BasicText:()=>S,CustomContent:()=>E,EventLifecycle:()=>A,FallbackPositions:()=>O,HoverInteraction:()=>C,ImperativeApi:()=>k,Positions:()=>D,RichContent:()=>T,WithTail:()=>w,__namedExportsOrder:()=>j,default:()=>x});function c({content:e,onBeforeToggle:t,onToggle:n,positionArea:r,positionTryFallbacks:i,tail:o,triggerLabel:s}){return(0,h.jsx)(a,{content:e,onBeforeToggle:t,onToggle:n,positionArea:r,positionTryFallbacks:i,tail:o,children:(0,h.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:s})})}function l(e,t=`jb-tooltip`){let n=e.querySelector(t);return g(n).toBeTruthy(),n}function u(e){let t=e.querySelector(`button`);return g(t).toBeTruthy(),t}function d(e){let t=e.shadowRoot?.querySelector(`.tooltip`);return g(t).toBeTruthy(),t}async function f(e){await y(()=>{g(e.open).toBe(!0),g(d(e).matches(`:popover-open`)).toBe(!0)})}async function p(e){await y(()=>{g(e.open).toBe(!1),g(d(e).matches(`:popover-open`)).toBe(!1)})}async function m(e,t){let n=u(e);n.focus(),await f(e),await y(()=>g(d(e).dataset.placement).toBe(t));let r=n.getBoundingClientRect(),i=d(e).getBoundingClientRect();t===`top`?g(i.bottom).toBeLessThanOrEqual(r.top):t===`right`?g(i.left).toBeGreaterThanOrEqual(r.right):t===`bottom`?g(i.top).toBeGreaterThanOrEqual(r.bottom):g(i.right).toBeLessThanOrEqual(r.left),e.hide(),n.blur(),await p(e)}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{r(),o(),h=n(),{expect:g,fn:_,userEvent:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b=[`top`,`right`,`bottom`,`left`],x={title:`Components/JBTooltip`,component:c,parameters:{layout:`centered`},args:{content:`A concise explanation for this control.`,positionArea:`top`,positionTryFallbacks:`flip-block, flip-inline`,tail:!1,triggerLabel:`Focus or hover me`},argTypes:{content:{control:`text`},positionArea:{control:`select`,options:b},positionTryFallbacks:{control:`text`},tail:{control:`boolean`},triggerLabel:{control:`text`}}},S={play:async({canvasElement:e})=>{let t=l(e),n=u(t);n.focus(),await f(t),g(n).toHaveAttribute(`aria-description`,`A concise explanation for this control.`),await v.keyboard(`{Escape}`),await p(t)}},C={args:{content:`The tooltip remains available to pointer users.`,triggerLabel:`Hover me`},play:async({canvasElement:e})=>{let t=l(e),n=u(t);await v.hover(n),await f(t),await v.unhover(n),await p(t)}},w={args:{content:`The triangle follows the resolved placement.`,tail:!0,triggerLabel:`Tooltip with tail`},play:async({canvasElement:e})=>{let t=l(e),n=u(t),r=t.shadowRoot?.querySelector(`.default-message`),i=r?.shadowRoot?.querySelector(`.tooltip-tail`);n.focus(),await f(t),await y(()=>g(d(t).dataset.placement).toBe(`top`)),g(r?.dataset.placement).toBe(`top`),g(i).toBeTruthy(),g(getComputedStyle(i).display).toBe(`block`)}},T={render:()=>(0,h.jsxs)(a,{children:[(0,h.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:`Save`}),(0,h.jsxs)(i,{slot:`content`,children:[(0,h.jsx)(`strong`,{children:`Save changes`}),` `,(0,h.jsx)(`span`,{className:`rich-content-detail`,children:`Stores the current draft.`})]})]}),play:async({canvasElement:e})=>{let t=l(e),n=u(t);n.focus(),await f(t),g(n).toHaveAttribute(`aria-description`,`Save changes Stores the current draft.`),g(t.querySelector(`jb-tooltip-message`)).toBeTruthy()}},E={render:()=>(0,h.jsxs)(a,{positionArea:`bottom`,children:[(0,h.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:`Build status`}),(0,h.jsxs)(`div`,{className:`custom-tooltip-content`,slot:`content`,children:[(0,h.jsx)(`span`,{className:`custom-tooltip-dot`}),`All checks passed`]})]})},D={parameters:{layout:`fullscreen`},render:()=>(0,h.jsx)(`div`,{className:`tooltip-position-gallery`,children:b.map(e=>(0,h.jsxs)(`div`,{className:`tooltip-position-example`,children:[(0,h.jsx)(`span`,{className:`tooltip-position-label`,children:e}),(0,h.jsx)(a,{content:`Tooltip placed at the ${e}`,positionArea:e,positionTryFallbacks:`none`,tail:!0,children:(0,h.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:e})})]},e))}),play:async({canvasElement:e})=>{g(CSS.supports(`position-area`,`top`)).toBe(!0);for(let t of b)await m(l(e,`jb-tooltip[position-area="${t}"]`),t)}},O={parameters:{layout:`fullscreen`},render:()=>(0,h.jsxs)(`div`,{className:`tooltip-fallback-stage`,children:[(0,h.jsxs)(`div`,{className:`tooltip-fallback-case tooltip-fallback-block`,children:[(0,h.jsx)(`span`,{children:`Requested top → resolved bottom`}),(0,h.jsx)(a,{content:`Flipped away from the top viewport edge`,positionArea:`top`,tail:!0,children:(0,h.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:`Top edge`})})]}),(0,h.jsxs)(`div`,{className:`tooltip-fallback-case tooltip-fallback-inline`,children:[(0,h.jsx)(`span`,{children:`Requested left → resolved right`}),(0,h.jsx)(a,{content:`Flipped away from the left viewport edge`,positionArea:`left`,tail:!0,children:(0,h.jsx)(`button`,{className:`tooltip-trigger`,type:`button`,children:`Left edge`})})]})]}),play:async({canvasElement:e})=>{g(CSS.supports(`position-try-fallbacks`,`flip-block, flip-inline`)).toBe(!0);let t=l(e,`jb-tooltip[position-area="top"]`);await m(t,`bottom`),g(t.shadowRoot?.querySelector(`.default-message`)?.dataset.placement).toBe(`bottom`);let n=l(e,`jb-tooltip[position-area="left"]`);await m(n,`right`),g(n.shadowRoot?.querySelector(`.default-message`)?.dataset.placement).toBe(`right`)}},k={args:{content:`Controlled with show(), hide(), and toggle().`,triggerLabel:`Imperative tooltip`},play:async({canvasElement:e})=>{let t=l(e);t.show(),await f(t),t.hide(),await p(t),g(t.toggle()).toBe(!0),await f(t),g(t.toggle()).toBe(!1),await p(t)}},A={args:{content:`Lifecycle events are exposed by the tooltip.`,onBeforeToggle:_(),onToggle:_(),triggerLabel:`Observe lifecycle`},play:async({args:e,canvasElement:t})=>{let n=l(t);u(n).focus(),await f(n),await y(()=>{g(e.onBeforeToggle).toHaveBeenCalledWith(g.objectContaining({newState:`open`})),g(e.onToggle).toHaveBeenCalledWith(g.objectContaining({newState:`open`}))}),await v.keyboard(`{Escape}`),await p(n),await y(()=>{g(e.onBeforeToggle).toHaveBeenCalledWith(g.objectContaining({newState:`closed`})),g(e.onToggle).toHaveBeenCalledWith(g.objectContaining({newState:`closed`}))})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <JBTooltip>
      <button className="tooltip-trigger" type="button">
        Save
      </button>
      <JBTooltipMessage slot="content">
        <strong>Save changes</strong> <span className="rich-content-detail">Stores the current draft.</span>
      </JBTooltipMessage>
    </JBTooltip>,
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <JBTooltip positionArea="bottom">
      <button className="tooltip-trigger" type="button">
        Build status
      </button>
      <div className="custom-tooltip-content" slot="content">
        <span className="custom-tooltip-dot" />
        All checks passed
      </div>
    </JBTooltip>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="tooltip-position-gallery">
      {positions.map(position => <div className="tooltip-position-example" key={position}>
          <span className="tooltip-position-label">{position}</span>
          <JBTooltip content={\`Tooltip placed at the \${position}\`} positionArea={position} positionTryFallbacks="none" tail>
            <button className="tooltip-trigger" type="button">
              {position}
            </button>
          </JBTooltip>
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="tooltip-fallback-stage">
      <div className="tooltip-fallback-case tooltip-fallback-block">
        <span>Requested top → resolved bottom</span>
        <JBTooltip content="Flipped away from the top viewport edge" positionArea="top" tail>
          <button className="tooltip-trigger" type="button">
            Top edge
          </button>
        </JBTooltip>
      </div>
      <div className="tooltip-fallback-case tooltip-fallback-inline">
        <span>Requested left → resolved right</span>
        <JBTooltip content="Flipped away from the left viewport edge" positionArea="left" tail>
          <button className="tooltip-trigger" type="button">
            Left edge
          </button>
        </JBTooltip>
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Lifecycle events are exposed by the tooltip.",
    onBeforeToggle: fn(),
    onToggle: fn(),
    triggerLabel: "Observe lifecycle"
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const tooltip = getTooltip(canvasElement);
    const trigger = getTrigger(tooltip);
    trigger.focus();
    await expectOpen(tooltip);
    await waitFor(() => {
      expect(args.onBeforeToggle).toHaveBeenCalledWith(expect.objectContaining({
        newState: "open"
      }));
      expect(args.onToggle).toHaveBeenCalledWith(expect.objectContaining({
        newState: "open"
      }));
    });
    await userEvent.keyboard("{Escape}");
    await expectClosed(tooltip);
    await waitFor(() => {
      expect(args.onBeforeToggle).toHaveBeenCalledWith(expect.objectContaining({
        newState: "closed"
      }));
      expect(args.onToggle).toHaveBeenCalledWith(expect.objectContaining({
        newState: "closed"
      }));
    });
  }
}`,...A.parameters?.docs?.source}}},j=[`BasicText`,`HoverInteraction`,`WithTail`,`RichContent`,`CustomContent`,`Positions`,`FallbackPositions`,`ImperativeApi`,`EventLifecycle`]}));M();export{S as BasicText,E as CustomContent,A as EventLifecycle,O as FallbackPositions,C as HoverInteraction,k as ImperativeApi,D as Positions,T as RichContent,w as WithTail,j as __namedExportsOrder,x as default,M as n,s as t};