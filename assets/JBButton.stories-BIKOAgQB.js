import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-x2s4iwIh.js";import{r,t as i}from"./react-DqoUJkO9.js";import{t as a}from"./plus-Bq2sWsT7.js";var o=t((()=>{})),s=e({CancelableClick:()=>_,CustomizedWidth:()=>U,Danger:()=>T,DarkColor:()=>C,Disabled:()=>I,DisabledOutlined:()=>L,ExtraLarge:()=>F,ExtraSmall:()=>j,FormSubmit:()=>g,Ghost:()=>O,HightOverflow:()=>H,JBIconsBySize:()=>y,Large:()=>P,LightColor:()=>S,Loading:()=>R,LoadingDisabled:()=>V,LoadingSecondary:()=>B,LoadingWithText:()=>z,Medium:()=>N,Outline:()=>D,Positive:()=>w,PositiveGhost:()=>A,Primary:()=>m,Secondary:()=>x,Small:()=>M,Square:()=>h,Text:()=>k,Variants:()=>b,Warning:()=>E,WithIcon:()=>v,__namedExportsOrder:()=>W,default:()=>p}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G=t((()=>{o(),i(),a(),c=n(),{expect:l,fn:u,userEvent:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/form elements/JBButton`,component:r,argTypes:{loadingText:{control:`text`},square:{control:`boolean`}},args:{children:`button`}},m={args:{type:`primary`,children:`primary button`,loadingText:`loading text`,disabled:!1,square:!1}},h={args:{square:!0,children:`S`}},g={render:()=>(0,c.jsx)(`form`,{onSubmit:e=>e.preventDefault(),children:(0,c.jsx)(r,{type:`submit`,children:`Submit form`})}),play:async({canvasElement:e})=>{let t=e.querySelector(`form`),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`),r=u(e=>e.preventDefault());l(t).toBeTruthy(),l(n).toBeTruthy(),t?.addEventListener(`submit`,r),await d.click(n),l(r).toHaveBeenCalledOnce()}},_={render:()=>(0,c.jsx)(`form`,{onSubmit:e=>e.preventDefault(),children:(0,c.jsx)(r,{type:`submit`,onClick:e=>e.preventDefault(),children:`Cancel submit from click`})}),play:async({canvasElement:e})=>{let t=e.querySelector(`form`),n=e.querySelector(`jb-button`),r=n?.shadowRoot?.querySelector(`button`),i=u(e=>{}),a=u(e=>e.preventDefault());l(t).toBeTruthy(),l(n).toBeTruthy(),l(r).toBeTruthy(),n?.addEventListener(`click`,i),t?.addEventListener(`submit`,a),await d.click(r),l(i).toHaveBeenCalledOnce(),l(i.mock.calls[0][0].cancelable).toBe(!0),l(i.mock.calls[0][0].defaultPrevented).toBe(!0),l(a).not.toHaveBeenCalled()}},v={render:()=>{let e=(0,c.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,c.jsx)(`title`,{children:`test icon`}),(0,c.jsx)(`path`,{d:`M11.9998 22.6C10.8898 22.6 9.85982 22.13 9.08982 21.29L2.22982 13.75C1.25982 12.69 0.959818 10.82 1.53982 9.51003L4.09983 3.75003C4.79983 2.18003 5.96983 1.41003 7.68983 1.41003H16.2798V2.16003V1.41003C17.9998 1.41003 19.1698 2.17004 19.8698 3.74004L22.4298 9.50003C23.0098 10.81 22.7198 12.68 21.7498 13.74L14.8998 21.29C14.1498 22.13 13.1098 22.6 11.9998 22.6ZM16.2898 2.90004H7.69982C6.38982 2.90004 5.85982 3.48003 5.47982 4.35003L2.91982 10.11C2.57982 10.88 2.77982 12.11 3.33982 12.73L10.1998 20.27C10.6798 20.8 11.3198 21.09 11.9998 21.09C12.6798 21.09 13.3198 20.8 13.7998 20.27L20.6498 12.72C21.2198 12.09 21.4198 10.87 21.0698 10.1L18.5098 4.34003C18.1298 3.48003 17.5998 2.90004 16.2898 2.90004Z`,fill:`currentColor`}),(0,c.jsx)(`path`,{d:`M3.5 8.74999C3.09 8.74999 2.75 8.40999 2.75 7.99999C2.75 7.58999 3.09 7.24999 3.5 7.24999L20.5 7.23999C20.91 7.23999 21.25 7.57999 21.25 7.98999C21.25 8.39999 20.91 8.73999 20.5 8.73999L3.5 8.74999Z`,fill:`currentColor`})]});return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,c.jsxs)(r,{size:`xl`,children:[e,(0,c.jsx)(`div`,{children:`With Icon`})]}),(0,c.jsxs)(r,{size:`lg`,children:[e,(0,c.jsx)(`div`,{children:`With Icon`})]}),(0,c.jsxs)(r,{size:`md`,children:[e,(0,c.jsx)(`div`,{children:`With Icon`})]}),(0,c.jsxs)(r,{size:`sm`,children:[e,(0,c.jsx)(`div`,{children:`With Icon`})]}),(0,c.jsxs)(r,{size:`xs`,children:[e,(0,c.jsx)(`div`,{children:`With Icon`})]})]})}},y={name:`JB icons by button size`,render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`,alignItems:`flex-start`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,c.jsxs)(r,{size:e,children:[(0,c.jsx)(`jb-icon-plus`,{className:`icon`,"aria-hidden":`true`}),e.toUpperCase(),` button`]},e))})},b={render:()=>(0,c.jsxs)(`div`,{className:`variants`,children:[(0,c.jsxs)(`div`,{className:`variant-wrapper`,children:[(0,c.jsx)(r,{variant:`solid`,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`danger`,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`danger`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`danger`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`dark`,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`dark`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`dark`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`light`,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`light`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`light`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`positive`,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`positive`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`positive`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`secondary`,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`secondary`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`secondary`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`warning`,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`warning`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`solid`,color:`warning`,isLoading:!0,children:`Button`})]}),(0,c.jsxs)(`div`,{className:`variant-wrapper`,children:[(0,c.jsx)(r,{variant:`outline`,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`danger`,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`danger`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`danger`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`dark`,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`dark`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`dark`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`light`,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`light`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`light`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`positive`,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`positive`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`positive`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`secondary`,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`secondary`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`secondary`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`warning`,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`warning`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`outline`,color:`warning`,isLoading:!0,children:`Button`})]}),(0,c.jsxs)(`div`,{className:`variant-wrapper`,children:[(0,c.jsx)(r,{variant:`ghost`,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`danger`,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`danger`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`danger`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`dark`,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`dark`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`dark`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`light`,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`light`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`light`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`positive`,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`positive`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`positive`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`secondary`,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`secondary`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`secondary`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`warning`,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`warning`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`ghost`,color:`warning`,isLoading:!0,children:`Button`})]}),(0,c.jsxs)(`div`,{className:`variant-wrapper`,children:[(0,c.jsx)(r,{variant:`text`,children:`Button`}),(0,c.jsx)(r,{variant:`text`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`danger`,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`danger`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`danger`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`dark`,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`dark`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`dark`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`light`,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`light`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`light`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`positive`,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`positive`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`positive`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`secondary`,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`secondary`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`secondary`,isLoading:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`warning`,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`warning`,disabled:!0,children:`Button`}),(0,c.jsx)(r,{variant:`text`,color:`warning`,isLoading:!0,children:`Button`})]})]})},x={args:{color:`secondary`,children:`secondary button`}},S={args:{color:`light`,children:`light button`}},C={args:{color:`dark`,children:`dark button`}},w={args:{color:`positive`,children:`positive button`}},T={args:{color:`danger`,children:`danger button`}},E={args:{color:`warning`,children:`warning button`}},D={args:{variant:`outline`,children:`outline button`}},O={args:{variant:`ghost`,children:`ghost button`}},k={args:{variant:`text`,children:`text button`}},A={args:{variant:`ghost`,color:`positive`,children:`positive ghost button`}},j={args:{size:`xs`,children:`extra small button`}},M={args:{size:`sm`,children:`small button`}},N={args:{size:`md`,children:`medium button`}},P={args:{size:`lg`,children:`large button`}},F={args:{size:`xl`,children:`extra large button`}},I={args:{loadingText:``,disabled:!0},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-button`),n=t?.shadowRoot?.querySelector(`button`),r=u();l(t).toBeTruthy(),l(n).toBeTruthy(),t?.addEventListener(`click`,r),await f(()=>{l(n?.disabled).toBe(!0)}),await d.click(n),l(r).not.toHaveBeenCalled()}},L={args:{loadingText:``,disabled:!0,variant:`outline`,children:`disabled outlined button`}},R={args:{type:`primary`,children:`with loading`,isLoading:!0},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-button`);await f(()=>{l(t.isLoading).toBe(!0),l(t.hasAttribute(`is-loading`)).toBe(!0)})}},z={args:{type:`primary`,children:`with loading`,isLoading:!0,loadingText:`please wait`}},B={args:{type:`secondary`,children:`secondary button`,isLoading:!0,loadingText:`please wait`}},V={args:{children:`disabled button`,isLoading:!0,disabled:!0,loadingText:`please wait`}},H={args:{children:`primary button With Height overflow`,style:{width:`7rem`}},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-button`),n=t?.shadowRoot?.querySelector(`button`),r=2.5*Number.parseFloat(getComputedStyle(document.documentElement).fontSize);l(t).toBeTruthy(),l(n).toBeTruthy(),await f(()=>{l(n.getBoundingClientRect().height).toBeGreaterThan(r)})}},U={args:{children:`with 100% width`,style:{width:`100%`}}},W=`Primary.Square.FormSubmit.CancelableClick.WithIcon.JBIconsBySize.Variants.Secondary.LightColor.DarkColor.Positive.Danger.Warning.Outline.Ghost.Text.PositiveGhost.ExtraSmall.Small.Medium.Large.ExtraLarge.Disabled.DisabledOutlined.Loading.LoadingWithText.LoadingSecondary.LoadingDisabled.HightOverflow.CustomizedWidth`.split(`.`),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "primary",
    children: "primary button",
    loadingText: "loading text",
    disabled: false,
    square: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    square: true,
    children: "S"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <form onSubmit={event => event.preventDefault()}>
      <JBButton type="submit">Submit form</JBButton>
    </form>,
  play: async ({
    canvasElement
  }) => {
    const form = canvasElement.querySelector("form");
    const button = canvasElement.querySelector("jb-button");
    const innerButton = button?.shadowRoot?.querySelector("button");
    const onSubmit = fn((event: SubmitEvent) => event.preventDefault());
    expect(form).toBeTruthy();
    expect(innerButton).toBeTruthy();
    form?.addEventListener("submit", onSubmit);
    await userEvent.click(innerButton!);
    expect(onSubmit).toHaveBeenCalledOnce();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <form onSubmit={event => event.preventDefault()}>
      <JBButton type="submit" onClick={event => event.preventDefault()}>Cancel submit from click</JBButton>
    </form>,
  play: async ({
    canvasElement
  }) => {
    const form = canvasElement.querySelector("form");
    const button = canvasElement.querySelector("jb-button");
    const innerButton = button?.shadowRoot?.querySelector("button");
    const onClick = fn((_event: Event) => {});
    const onSubmit = fn((event: SubmitEvent) => event.preventDefault());
    expect(form).toBeTruthy();
    expect(button).toBeTruthy();
    expect(innerButton).toBeTruthy();
    button?.addEventListener("click", onClick);
    form?.addEventListener("submit", onSubmit);
    await userEvent.click(innerButton!);
    expect(onClick).toHaveBeenCalledOnce();
    expect(onClick.mock.calls[0][0].cancelable).toBe(true);
    expect(onClick.mock.calls[0][0].defaultPrevented).toBe(true);
    expect(onSubmit).not.toHaveBeenCalled();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const icon = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>test icon</title>
        <path d="M11.9998 22.6C10.8898 22.6 9.85982 22.13 9.08982 21.29L2.22982 13.75C1.25982 12.69 0.959818 10.82 1.53982 9.51003L4.09983 3.75003C4.79983 2.18003 5.96983 1.41003 7.68983 1.41003H16.2798V2.16003V1.41003C17.9998 1.41003 19.1698 2.17004 19.8698 3.74004L22.4298 9.50003C23.0098 10.81 22.7198 12.68 21.7498 13.74L14.8998 21.29C14.1498 22.13 13.1098 22.6 11.9998 22.6ZM16.2898 2.90004H7.69982C6.38982 2.90004 5.85982 3.48003 5.47982 4.35003L2.91982 10.11C2.57982 10.88 2.77982 12.11 3.33982 12.73L10.1998 20.27C10.6798 20.8 11.3198 21.09 11.9998 21.09C12.6798 21.09 13.3198 20.8 13.7998 20.27L20.6498 12.72C21.2198 12.09 21.4198 10.87 21.0698 10.1L18.5098 4.34003C18.1298 3.48003 17.5998 2.90004 16.2898 2.90004Z" fill="currentColor" />
        <path d="M3.5 8.74999C3.09 8.74999 2.75 8.40999 2.75 7.99999C2.75 7.58999 3.09 7.24999 3.5 7.24999L20.5 7.23999C20.91 7.23999 21.25 7.57999 21.25 7.98999C21.25 8.39999 20.91 8.73999 20.5 8.73999L3.5 8.74999Z" fill="currentColor" />
      </svg>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <JBButton size='xl'>{icon}<div>With Icon</div></JBButton>
        <JBButton size='lg'>{icon}<div>With Icon</div></JBButton>
        <JBButton size='md'>{icon}<div>With Icon</div></JBButton>
        <JBButton size='sm'>{icon}<div>With Icon</div></JBButton>
        <JBButton size='xs'>{icon}<div>With Icon</div></JBButton>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "JB icons by button size",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    alignItems: "flex-start"
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <JBButton key={size} size={size}>
          <jb-icon-plus className="icon" aria-hidden="true" />
          {size.toUpperCase()} button
        </JBButton>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className='variants'>
        <div className='variant-wrapper'>
          <JBButton variant='solid'>Button</JBButton>
          <JBButton variant='solid' disabled>Button</JBButton>
          <JBButton variant='solid' isLoading>Button</JBButton>
          <JBButton variant='solid' color='danger'>Button</JBButton>
          <JBButton variant='solid' color='danger' disabled>Button</JBButton>
          <JBButton variant='solid' color='danger' isLoading>Button</JBButton>
          <JBButton variant='solid' color='dark'>Button</JBButton>
          <JBButton variant='solid' color='dark' disabled>Button</JBButton>
          <JBButton variant='solid' color='dark' isLoading>Button</JBButton>
          <JBButton variant='solid' color='light'>Button</JBButton>
          <JBButton variant='solid' color='light' disabled>Button</JBButton>
          <JBButton variant='solid' color='light' isLoading>Button</JBButton>
          <JBButton variant='solid' color='positive'>Button</JBButton>
          <JBButton variant='solid' color='positive' disabled>Button</JBButton>
          <JBButton variant='solid' color='positive' isLoading>Button</JBButton>
          <JBButton variant='solid' color='secondary'>Button</JBButton>
          <JBButton variant='solid' color='secondary' disabled>Button</JBButton>
          <JBButton variant='solid' color='secondary' isLoading>Button</JBButton>
          <JBButton variant='solid' color='warning'>Button</JBButton>
          <JBButton variant='solid' color='warning' disabled>Button</JBButton>
          <JBButton variant='solid' color='warning' isLoading>Button</JBButton>
        </div>
        <div className='variant-wrapper'>
          <JBButton variant='outline'>Button</JBButton>
          <JBButton variant='outline' disabled>Button</JBButton>
          <JBButton variant='outline' isLoading>Button</JBButton>
          <JBButton variant='outline' color='danger'>Button</JBButton>
          <JBButton variant='outline' color='danger' disabled>Button</JBButton>
          <JBButton variant='outline' color='danger' isLoading>Button</JBButton>
          <JBButton variant='outline' color='dark'>Button</JBButton>
          <JBButton variant='outline' color='dark' disabled>Button</JBButton>
          <JBButton variant='outline' color='dark' isLoading>Button</JBButton>
          <JBButton variant='outline' color='light'>Button</JBButton>
          <JBButton variant='outline' color='light' disabled>Button</JBButton>
          <JBButton variant='outline' color='light' isLoading>Button</JBButton>
          <JBButton variant='outline' color='positive'>Button</JBButton>
          <JBButton variant='outline' color='positive' disabled>Button</JBButton>
          <JBButton variant='outline' color='positive' isLoading>Button</JBButton>
          <JBButton variant='outline' color='secondary'>Button</JBButton>
          <JBButton variant='outline' color='secondary' disabled>Button</JBButton>
          <JBButton variant='outline' color='secondary' isLoading>Button</JBButton>
          <JBButton variant='outline' color='warning'>Button</JBButton>
          <JBButton variant='outline' color='warning' disabled>Button</JBButton>
          <JBButton variant='outline' color='warning' isLoading>Button</JBButton>
        </div>
        <div className='variant-wrapper'>
          <JBButton variant='ghost'>Button</JBButton>
          <JBButton variant='ghost' disabled>Button</JBButton>
          <JBButton variant='ghost' isLoading>Button</JBButton>
          <JBButton variant='ghost' color='danger'>Button</JBButton>
          <JBButton variant='ghost' color='danger' disabled>Button</JBButton>
          <JBButton variant='ghost' color='danger' isLoading>Button</JBButton>
          <JBButton variant='ghost' color='dark'>Button</JBButton>
          <JBButton variant='ghost' color='dark' disabled>Button</JBButton>
          <JBButton variant='ghost' color='dark' isLoading>Button</JBButton>
          <JBButton variant='ghost' color='light'>Button</JBButton>
          <JBButton variant='ghost' color='light' disabled>Button</JBButton>
          <JBButton variant='ghost' color='light' isLoading>Button</JBButton>
          <JBButton variant='ghost' color='positive'>Button</JBButton>
          <JBButton variant='ghost' color='positive' disabled>Button</JBButton>
          <JBButton variant='ghost' color='positive' isLoading>Button</JBButton>
          <JBButton variant='ghost' color='secondary'>Button</JBButton>
          <JBButton variant='ghost' color='secondary' disabled>Button</JBButton>
          <JBButton variant='ghost' color='secondary' isLoading>Button</JBButton>
          <JBButton variant='ghost' color='warning'>Button</JBButton>
          <JBButton variant='ghost' color='warning' disabled>Button</JBButton>
          <JBButton variant='ghost' color='warning' isLoading>Button</JBButton>
        </div>
        <div className='variant-wrapper'>
          <JBButton variant='text'>Button</JBButton>
          <JBButton variant='text' disabled>Button</JBButton>
          <JBButton variant='text' isLoading>Button</JBButton>
          <JBButton variant='text' color='danger'>Button</JBButton>
          <JBButton variant='text' color='danger' disabled>Button</JBButton>
          <JBButton variant='text' color='danger' isLoading>Button</JBButton>
          <JBButton variant='text' color='dark'>Button</JBButton>
          <JBButton variant='text' color='dark' disabled>Button</JBButton>
          <JBButton variant='text' color='dark' isLoading>Button</JBButton>
          <JBButton variant='text' color='light'>Button</JBButton>
          <JBButton variant='text' color='light' disabled>Button</JBButton>
          <JBButton variant='text' color='light' isLoading>Button</JBButton>
          <JBButton variant='text' color='positive'>Button</JBButton>
          <JBButton variant='text' color='positive' disabled>Button</JBButton>
          <JBButton variant='text' color='positive' isLoading>Button</JBButton>
          <JBButton variant='text' color='secondary'>Button</JBButton>
          <JBButton variant='text' color='secondary' disabled>Button</JBButton>
          <JBButton variant='text' color='secondary' isLoading>Button</JBButton>
          <JBButton variant='text' color='warning'>Button</JBButton>
          <JBButton variant='text' color='warning' disabled>Button</JBButton>
          <JBButton variant='text' color='warning' isLoading>Button</JBButton>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    children: "secondary button"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light",
    children: "light button"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark",
    children: "dark button"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    color: "positive",
    children: "positive button"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    color: "danger",
    children: "danger button"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    color: "warning",
    children: "warning button"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "outline button"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "ghost button"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    children: "text button"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    color: "positive",
    children: "positive ghost button"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xs",
    children: "extra small button"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "small button"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    children: "medium button"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "large button"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xl",
    children: "extra large button"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    loadingText: "",
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector("jb-button");
    const innerButton = button?.shadowRoot?.querySelector("button");
    const onClick = fn();
    expect(button).toBeTruthy();
    expect(innerButton).toBeTruthy();
    button?.addEventListener("click", onClick);
    await waitFor(() => {
      expect(innerButton?.disabled).toBe(true);
    });
    await userEvent.click(innerButton!);
    expect(onClick).not.toHaveBeenCalled();
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    loadingText: "",
    disabled: true,
    variant: "outline",
    children: "disabled outlined button"
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    type: "primary",
    children: "with loading",
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector<JBButtonWebComponent>('jb-button')!;
    await waitFor(() => {
      expect(button.isLoading).toBe(true);
      expect(button.hasAttribute('is-loading')).toBe(true);
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    type: "primary",
    children: "with loading",
    isLoading: true,
    loadingText: "please wait"
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    type: "secondary",
    children: "secondary button",
    isLoading: true,
    loadingText: "please wait"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    children: "disabled button",
    isLoading: true,
    disabled: true,
    loadingText: "please wait"
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    children: "primary button With Height overflow",
    style: {
      width: '7rem'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector("jb-button");
    const innerButton = button?.shadowRoot?.querySelector("button");
    const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
    const defaultButtonHeight = 2.5 * rootFontSize;
    expect(button).toBeTruthy();
    expect(innerButton).toBeTruthy();
    await waitFor(() => {
      expect(innerButton!.getBoundingClientRect().height).toBeGreaterThan(defaultButtonHeight);
    });
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    children: "with 100% width",
    style: {
      width: '100%'
    }
  }
}`,...U.parameters?.docs?.source}}}}));G();export{_ as CancelableClick,U as CustomizedWidth,T as Danger,C as DarkColor,I as Disabled,L as DisabledOutlined,F as ExtraLarge,j as ExtraSmall,g as FormSubmit,O as Ghost,H as HightOverflow,y as JBIconsBySize,P as Large,S as LightColor,R as Loading,V as LoadingDisabled,B as LoadingSecondary,z as LoadingWithText,N as Medium,D as Outline,w as Positive,A as PositiveGhost,m as Primary,x as Secondary,M as Small,h as Square,k as Text,b as Variants,E as Warning,v as WithIcon,W as __namedExportsOrder,p as default,G as n,s as t};