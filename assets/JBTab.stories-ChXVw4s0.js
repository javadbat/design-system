import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DRUIHCJR.js";import{a,c as o,d as s,i as c,l,n as u,o as d,p as f,t as p}from"./jb-tab-Bn2fY7Bq.js";var m=e({Basic:()=>w,ColoredIndicators:()=>E,ControlledReact:()=>M,DisabledAndKeyboard:()=>j,DuplicatePanels:()=>A,NestedLayout:()=>O,Nullable:()=>k,RTL:()=>T,SizeVariants:()=>D,__namedExportsOrder:()=>N,default:()=>C});function h({nullable:e=!1}){return(0,_.jsxs)(f,{nullable:e,children:[(0,_.jsxs)(d,{"aria-label":`Account sections`,children:[(0,_.jsx)(c,{value:`home`,children:`Home`}),(0,_.jsx)(c,{value:`about`,children:`About`}),(0,_.jsx)(c,{value:`user`,children:`User`})]}),(0,_.jsx)(l,{value:`home`,children:`Home content`}),(0,_.jsx)(l,{value:`about`,children:`About content`}),(0,_.jsx)(l,{value:`user`,children:`User content`})]})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=t((()=>{g=n(r(),1),s(),o(),a(),u(),p(),_=i(),{expect:v,fn:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/JBTab`,component:f,args:{onChange:y()}},w={render:e=>(0,_.jsxs)(f,{onChange:e.onChange,children:[(0,_.jsxs)(d,{"aria-label":`Account sections`,children:[(0,_.jsx)(c,{value:`home`,children:`Home`}),(0,_.jsx)(c,{value:`about`,children:`About`}),(0,_.jsx)(c,{value:`user`,children:`User`})]}),(0,_.jsx)(l,{value:`home`,children:`Home content`}),(0,_.jsx)(l,{value:`about`,children:`About content`}),(0,_.jsx)(l,{value:`user`,children:`User content`})]}),play:async({canvasElement:e,args:t})=>{let n=e.querySelector(`jb-tab`),r=Array.from(n.querySelectorAll(`jb-tab-trigger`)),i=Array.from(n.querySelectorAll(`jb-tab-content`));await x(()=>v(n.value).toBe(`home`)),v(r[0].selected).toBe(!0),v(i[0].hidden).toBe(!1),v(getComputedStyle(i[1]).display).toBe(`none`),v(r[0].getAttribute(`aria-controls`)).toContain(i[0].id),v(i[0].getAttribute(`aria-labelledby`)).toBe(r[0].id),await b.click(r[1]),v(n.value).toBe(`about`),v(i[0].hidden).toBe(!0),v(i[1].hidden).toBe(!1),v(t.onChange).toHaveBeenCalledOnce(),r[2].selected=!0,v(n.value).toBe(`user`),v(r.filter(e=>e.selected)).toEqual([r[2]]),v(i[2].hidden).toBe(!1),v(t.onChange).toHaveBeenCalledOnce(),i[0].hidden=!1,v(i[0].hidden).toBe(!1),v(r.filter(e=>e.selected)).toEqual([r[2]])}},T={globals:{locale:`fa`,dir:`rtl`},render:()=>(0,_.jsxs)(f,{defaultValue:`profile`,children:[(0,_.jsxs)(d,{"aria-label":`بخش‌های حساب کاربری`,children:[(0,_.jsx)(c,{value:`profile`,children:`پروفایل`}),(0,_.jsx)(c,{value:`security`,children:`امنیت`}),(0,_.jsx)(c,{value:`notifications`,children:`اعلان‌ها`})]}),(0,_.jsx)(l,{value:`profile`,children:`اطلاعات پروفایل شما`}),(0,_.jsx)(l,{value:`security`,children:`تنظیمات امنیت حساب کاربری`}),(0,_.jsx)(l,{value:`notifications`,children:`تنظیمات اعلان‌ها`})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-tab`),n=t.querySelector(`jb-tab-list`),r=t.querySelector(`jb-tab-trigger[value="security"]`);await x(()=>v(getComputedStyle(n).direction).toBe(`rtl`)),v(t.value).toBe(`profile`),await b.click(r),v(t.value).toBe(`security`)}},E={render:()=>(0,_.jsxs)(f,{children:[(0,_.jsxs)(d,{className:`jb-tab-story-colors`,"aria-label":`Colored sections`,children:[(0,_.jsx)(c,{value:`primary`,color:`primary`,children:`Primary`}),(0,_.jsx)(c,{value:`secondary`,color:`secondary`,children:`Secondary`}),(0,_.jsx)(c,{value:`positive`,color:`positive`,children:`Positive`}),(0,_.jsx)(c,{value:`danger`,color:`danger`,children:`Danger`}),(0,_.jsx)(c,{value:`warning`,color:`warning`,children:`Warning`}),(0,_.jsx)(c,{value:`light`,color:`light`,children:`Light`}),(0,_.jsx)(c,{value:`dark`,color:`dark`,children:`Dark`}),(0,_.jsx)(c,{value:`primary-subtle`,color:`primary-subtle`,children:`Primary subtle`}),(0,_.jsx)(c,{value:`secondary-subtle`,color:`secondary-subtle`,children:`Secondary subtle`}),(0,_.jsx)(c,{value:`positive-subtle`,color:`positive-subtle`,children:`Positive subtle`}),(0,_.jsx)(c,{value:`danger-subtle`,color:`danger-subtle`,children:`Danger subtle`}),(0,_.jsx)(c,{value:`warning-subtle`,color:`warning-subtle`,children:`Warning subtle`}),(0,_.jsx)(c,{value:`custom-pink`,color:`#ec4899`,children:`Custom pink`}),(0,_.jsx)(c,{value:`custom-light-green`,color:`#bbf7d0`,children:`Custom light green`})]}),(0,_.jsx)(l,{value:`primary`,children:`Primary content`}),(0,_.jsx)(l,{value:`secondary`,children:`Secondary content`}),(0,_.jsx)(l,{value:`positive`,children:`Positive content`}),(0,_.jsx)(l,{value:`danger`,children:`Danger content`}),(0,_.jsx)(l,{value:`warning`,children:`Warning content`}),(0,_.jsx)(l,{value:`light`,children:`Light content`}),(0,_.jsx)(l,{value:`dark`,children:`Dark content`}),(0,_.jsx)(l,{value:`primary-subtle`,children:`Primary subtle content`}),(0,_.jsx)(l,{value:`secondary-subtle`,children:`Secondary subtle content`}),(0,_.jsx)(l,{value:`positive-subtle`,children:`Positive subtle content`}),(0,_.jsx)(l,{value:`danger-subtle`,children:`Danger subtle content`}),(0,_.jsx)(l,{value:`warning-subtle`,children:`Warning subtle content`}),(0,_.jsx)(l,{value:`custom-pink`,children:`Custom pink content`}),(0,_.jsx)(l,{value:`custom-light-green`,children:`Custom light green content`})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-tab-list`),n=e.querySelector(`jb-tab-trigger[value="primary"]`),r=e.querySelector(`jb-tab-trigger[value="danger"]`),i=e.querySelector(`jb-tab-trigger[value="dark"]`),a=e.querySelector(`jb-tab-trigger[value="primary-subtle"]`),o=e.querySelector(`jb-tab-trigger[value="custom-pink"]`),s=e.querySelector(`jb-tab-trigger[value="custom-light-green"]`),c=t.shadowRoot.querySelector(`.selection-indicator`),l=()=>c.style.getPropertyValue(`--indicator-color-from-trigger`),u=e=>getComputedStyle(e).color;await x(()=>v(n.selected).toBe(!0));let d=u(n);await b.click(r),v(u(r)).toBe(d),await b.click(i),await x(()=>v(l()).not.toBe(``));let f=l();v(u(i)).toBe(d),await b.click(a),v(u(a)).not.toBe(d),await b.click(o),await x(()=>v(l()).toBe(`#ec4899`)),v(l()).not.toBe(f),v(u(o)).not.toBe(d),await b.click(s),await x(()=>v(l()).toBe(`#bbf7d0`)),v(u(s)).not.toBe(d)}},D={render:()=>(0,_.jsx)(`div`,{className:`jb-tab-story-sizes`,children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,_.jsxs)(f,{children:[(0,_.jsxs)(d,{size:e,"aria-label":`${e} tabs`,children:[(0,_.jsxs)(c,{value:`first`,color:`primary`,children:[e.toUpperCase(),` first`]}),(0,_.jsxs)(c,{value:`second`,color:`primary-subtle`,children:[e.toUpperCase(),` second`]})]}),(0,_.jsxs)(l,{value:`first`,children:[e.toUpperCase(),` first content`]}),(0,_.jsxs)(l,{value:`second`,children:[e.toUpperCase(),` second content`]})]},e))}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`jb-tab-list`));v(t).toHaveLength(5);for(let e of t){let t=e.triggers.map(e=>getComputedStyle(e));v(new Set(t.map(e=>e.height)).size).toBe(1),v(new Set(t.map(e=>e.fontSize)).size).toBe(1),v(new Set(t.map(e=>e.borderTopLeftRadius)).size).toBe(1);let n=e.shadowRoot.querySelector(`.tab-list`),r=getComputedStyle(n),i=Number.parseFloat(r.borderTopLeftRadius),a=Number.parseFloat(t[0].borderTopLeftRadius),o=Number.parseFloat(r.paddingTop);v(i).toBeCloseTo(a+o,3)}}},O={render:()=>(0,_.jsxs)(f,{defaultValue:`about`,className:`jb-tab-story-layout`,children:[(0,_.jsx)(`nav`,{children:(0,_.jsxs)(d,{orientation:`vertical`,"aria-label":`Profile sections`,children:[(0,_.jsx)(c,{value:`home`,children:`Home`}),(0,_.jsx)(c,{value:`about`,children:`About`}),(0,_.jsx)(c,{value:`user`,children:`User`})]})}),(0,_.jsx)(`main`,{children:(0,_.jsxs)(`section`,{className:`jb-tab-story-panel-wrapper`,children:[(0,_.jsx)(l,{className:`jb-tab-story-panel`,value:`home`,children:`Home content`}),(0,_.jsx)(l,{className:`jb-tab-story-panel`,value:`about`,children:`About content`}),(0,_.jsx)(l,{className:`jb-tab-story-panel`,value:`user`,children:`User content`})]})})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-tab`),n=t.querySelector(`jb-tab-list`);await x(()=>v(t.value).toBe(`about`)),v(n.orientation).toBe(`vertical`),v(n.selectedTrigger?.value).toBe(`about`)}},k={render:()=>(0,_.jsx)(h,{nullable:!0}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-tab`),n=Array.from(t.querySelectorAll(`jb-tab-trigger`)),r=Array.from(t.querySelectorAll(`jb-tab-content`));await x(()=>v(t.value).toBeNull()),v(r.every(e=>e.hidden)).toBe(!0),v(n[0].tabIndex).toBe(0),await b.click(n[2]),v(t.value).toBe(`user`),n[2].selected=!1,v(t.value).toBeNull(),v(n.every(e=>!e.selected)).toBe(!0)}},A={render:()=>(0,_.jsxs)(f,{defaultValue:`summary`,children:[(0,_.jsxs)(d,{"aria-label":`Report sections`,children:[(0,_.jsx)(c,{value:`summary`,children:`Summary`}),(0,_.jsx)(c,{value:`details`,children:`Details`})]}),(0,_.jsxs)(`div`,{className:`jb-tab-story-duplicate-panels`,children:[(0,_.jsx)(l,{value:`summary`,children:`Summary chart`}),(0,_.jsx)(l,{value:`summary`,children:`Summary table`}),(0,_.jsx)(l,{value:`details`,children:`Detailed report`})]})]}),play:async({canvasElement:e})=>{let t=()=>e.querySelectorAll(`jb-tab-content[value="summary"]:not([hidden])`);await x(()=>v(t()).toHaveLength(2)),v(e.querySelector(`jb-tab-trigger[value="summary"]`).getAttribute(`aria-controls`)?.split(` `)).toHaveLength(2)}},j={render:()=>(0,_.jsxs)(f,{children:[(0,_.jsxs)(d,{"aria-label":`Keyboard sections`,children:[(0,_.jsx)(c,{value:`first`,children:`First`}),(0,_.jsx)(c,{value:`disabled`,disabled:!0,children:`Disabled`}),(0,_.jsx)(c,{value:`last`,children:`Last`})]}),(0,_.jsx)(l,{value:`first`,children:`First content`}),(0,_.jsx)(l,{value:`disabled`,children:`Disabled content`}),(0,_.jsx)(l,{value:`last`,children:`Last content`})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-tab`),n=Array.from(t.querySelectorAll(`jb-tab-trigger`));await x(()=>v(t.value).toBe(`first`)),n[0].focus(),await b.keyboard(`{ArrowRight}`),v(t.value).toBe(`last`),v(document.activeElement).toBe(n[2]),await b.keyboard(`{Home}`),v(t.value).toBe(`first`),await b.click(n[1]),v(t.value).toBe(`first`)}},M={render:e=>{let[t,n]=(0,g.useState)(`home`);return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`output`,{"data-testid":`value`,children:t}),(0,_.jsxs)(f,{value:t,onChange:t=>{e.onChange?.(t),n(t.detail.value)},children:[(0,_.jsxs)(d,{"aria-label":`Controlled sections`,children:[(0,_.jsx)(c,{value:`home`,children:`Home`}),(0,_.jsx)(c,{value:`about`,children:`About`})]}),(0,_.jsx)(l,{value:`home`,children:`Home content`}),(0,_.jsx)(l,{value:`about`,children:`About content`})]})]})},play:async({canvasElement:e})=>{let t=S(e),n=e.querySelector(`jb-tab-trigger[value="about"]`);await b.click(n),await x(()=>v(t.getByTestId(`value`)).toHaveTextContent(`about`))}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <JBTab onChange={args.onChange}>
      <JBTabList aria-label="Account sections">
        <JBTabTrigger value="home">Home</JBTabTrigger>
        <JBTabTrigger value="about">About</JBTabTrigger>
        <JBTabTrigger value="user">User</JBTabTrigger>
      </JBTabList>
      <JBTabContent value="home">Home content</JBTabContent>
      <JBTabContent value="about">About content</JBTabContent>
      <JBTabContent value="user">User content</JBTabContent>
    </JBTab>,
  play: async ({
    canvasElement,
    args
  }) => {
    const tab = canvasElement.querySelector<JBTabWebComponent>("jb-tab")!;
    const triggers = Array.from(tab.querySelectorAll<JBTabTriggerWebComponent>("jb-tab-trigger"));
    const contents = Array.from(tab.querySelectorAll<JBTabContentWebComponent>("jb-tab-content"));
    await waitFor(() => expect(tab.value).toBe("home"));
    expect(triggers[0].selected).toBe(true);
    expect(contents[0].hidden).toBe(false);
    expect(getComputedStyle(contents[1]).display).toBe("none");
    expect(triggers[0].getAttribute("aria-controls")).toContain(contents[0].id);
    expect(contents[0].getAttribute("aria-labelledby")).toBe(triggers[0].id);
    await userEvent.click(triggers[1]);
    expect(tab.value).toBe("about");
    expect(contents[0].hidden).toBe(true);
    expect(contents[1].hidden).toBe(false);
    expect(args.onChange).toHaveBeenCalledOnce();
    triggers[2].selected = true;
    expect(tab.value).toBe("user");
    expect(triggers.filter(trigger => trigger.selected)).toEqual([triggers[2]]);
    expect(contents[2].hidden).toBe(false);
    expect(args.onChange).toHaveBeenCalledOnce();
    contents[0].hidden = false;
    expect(contents[0].hidden).toBe(false);
    expect(triggers.filter(trigger => trigger.selected)).toEqual([triggers[2]]);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  globals: {
    locale: "fa",
    dir: "rtl"
  },
  render: () => <JBTab defaultValue="profile">
      <JBTabList aria-label="بخش‌های حساب کاربری">
        <JBTabTrigger value="profile">پروفایل</JBTabTrigger>
        <JBTabTrigger value="security">امنیت</JBTabTrigger>
        <JBTabTrigger value="notifications">اعلان‌ها</JBTabTrigger>
      </JBTabList>
      <JBTabContent value="profile">اطلاعات پروفایل شما</JBTabContent>
      <JBTabContent value="security">تنظیمات امنیت حساب کاربری</JBTabContent>
      <JBTabContent value="notifications">تنظیمات اعلان‌ها</JBTabContent>
    </JBTab>,
  play: async ({
    canvasElement
  }) => {
    const tab = canvasElement.querySelector<JBTabWebComponent>("jb-tab")!;
    const list = tab.querySelector<JBTabListWebComponent>("jb-tab-list")!;
    const security = tab.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="security"]')!;
    await waitFor(() => expect(getComputedStyle(list).direction).toBe("rtl"));
    expect(tab.value).toBe("profile");
    await userEvent.click(security);
    expect(tab.value).toBe("security");
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <JBTab>
      <JBTabList className="jb-tab-story-colors" aria-label="Colored sections">
        <JBTabTrigger value="primary" color="primary">
          Primary
        </JBTabTrigger>
        <JBTabTrigger value="secondary" color="secondary">
          Secondary
        </JBTabTrigger>
        <JBTabTrigger value="positive" color="positive">
          Positive
        </JBTabTrigger>
        <JBTabTrigger value="danger" color="danger">
          Danger
        </JBTabTrigger>
        <JBTabTrigger value="warning" color="warning">
          Warning
        </JBTabTrigger>
        <JBTabTrigger value="light" color="light">
          Light
        </JBTabTrigger>
        <JBTabTrigger value="dark" color="dark">
          Dark
        </JBTabTrigger>
        <JBTabTrigger value="primary-subtle" color="primary-subtle">
          Primary subtle
        </JBTabTrigger>
        <JBTabTrigger value="secondary-subtle" color="secondary-subtle">
          Secondary subtle
        </JBTabTrigger>
        <JBTabTrigger value="positive-subtle" color="positive-subtle">
          Positive subtle
        </JBTabTrigger>
        <JBTabTrigger value="danger-subtle" color="danger-subtle">
          Danger subtle
        </JBTabTrigger>
        <JBTabTrigger value="warning-subtle" color="warning-subtle">
          Warning subtle
        </JBTabTrigger>
        <JBTabTrigger value="custom-pink" color="#ec4899">
          Custom pink
        </JBTabTrigger>
        <JBTabTrigger value="custom-light-green" color="#bbf7d0">
          Custom light green
        </JBTabTrigger>
      </JBTabList>
      <JBTabContent value="primary">Primary content</JBTabContent>
      <JBTabContent value="secondary">Secondary content</JBTabContent>
      <JBTabContent value="positive">Positive content</JBTabContent>
      <JBTabContent value="danger">Danger content</JBTabContent>
      <JBTabContent value="warning">Warning content</JBTabContent>
      <JBTabContent value="light">Light content</JBTabContent>
      <JBTabContent value="dark">Dark content</JBTabContent>
      <JBTabContent value="primary-subtle">Primary subtle content</JBTabContent>
      <JBTabContent value="secondary-subtle">Secondary subtle content</JBTabContent>
      <JBTabContent value="positive-subtle">Positive subtle content</JBTabContent>
      <JBTabContent value="danger-subtle">Danger subtle content</JBTabContent>
      <JBTabContent value="warning-subtle">Warning subtle content</JBTabContent>
      <JBTabContent value="custom-pink">Custom pink content</JBTabContent>
      <JBTabContent value="custom-light-green">Custom light green content</JBTabContent>
    </JBTab>,
  play: async ({
    canvasElement
  }) => {
    const list = canvasElement.querySelector<JBTabListWebComponent>("jb-tab-list")!;
    const primary = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="primary"]')!;
    const danger = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="danger"]')!;
    const dark = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="dark"]')!;
    const primarySubtle = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="primary-subtle"]')!;
    const customPink = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="custom-pink"]')!;
    const customLightGreen = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="custom-light-green"]')!;
    const indicator = list.shadowRoot!.querySelector<HTMLElement>(".selection-indicator")!;
    const indicatorColor = () => indicator.style.getPropertyValue("--indicator-color-from-trigger");
    const selectedTextColor = (trigger: JBTabTriggerWebComponent) => getComputedStyle(trigger).color;
    await waitFor(() => expect(primary.selected).toBe(true));
    const lightTextColor = selectedTextColor(primary);
    await userEvent.click(danger);
    expect(selectedTextColor(danger)).toBe(lightTextColor);
    await userEvent.click(dark);
    await waitFor(() => expect(indicatorColor()).not.toBe(""));
    const darkColor = indicatorColor();
    expect(selectedTextColor(dark)).toBe(lightTextColor);
    await userEvent.click(primarySubtle);
    expect(selectedTextColor(primarySubtle)).not.toBe(lightTextColor);
    await userEvent.click(customPink);
    await waitFor(() => expect(indicatorColor()).toBe("#ec4899"));
    expect(indicatorColor()).not.toBe(darkColor);
    expect(selectedTextColor(customPink)).not.toBe(lightTextColor);
    await userEvent.click(customLightGreen);
    await waitFor(() => expect(indicatorColor()).toBe("#bbf7d0"));
    expect(selectedTextColor(customLightGreen)).not.toBe(lightTextColor);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="jb-tab-story-sizes">
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <JBTab key={size}>
          <JBTabList size={size} aria-label={\`\${size} tabs\`}>
            <JBTabTrigger value="first" color="primary">
              {size.toUpperCase()} first
            </JBTabTrigger>
            <JBTabTrigger value="second" color="primary-subtle">
              {size.toUpperCase()} second
            </JBTabTrigger>
          </JBTabList>
          <JBTabContent value="first">{size.toUpperCase()} first content</JBTabContent>
          <JBTabContent value="second">{size.toUpperCase()} second content</JBTabContent>
        </JBTab>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const lists = Array.from(canvasElement.querySelectorAll<JBTabListWebComponent>("jb-tab-list"));
    expect(lists).toHaveLength(5);
    for (const list of lists) {
      const triggers = list.triggers;
      const triggerStyles = triggers.map(trigger => getComputedStyle(trigger));
      expect(new Set(triggerStyles.map(style => style.height)).size).toBe(1);
      expect(new Set(triggerStyles.map(style => style.fontSize)).size).toBe(1);
      expect(new Set(triggerStyles.map(style => style.borderTopLeftRadius)).size).toBe(1);
      const listPart = list.shadowRoot!.querySelector<HTMLElement>(".tab-list")!;
      const listStyle = getComputedStyle(listPart);
      const outerRadius = Number.parseFloat(listStyle.borderTopLeftRadius);
      const triggerRadius = Number.parseFloat(triggerStyles[0].borderTopLeftRadius);
      const listPadding = Number.parseFloat(listStyle.paddingTop);
      expect(outerRadius).toBeCloseTo(triggerRadius + listPadding, 3);
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <JBTab defaultValue="about" className="jb-tab-story-layout">
      <nav>
        <JBTabList orientation="vertical" aria-label="Profile sections">
          <JBTabTrigger value="home">Home</JBTabTrigger>
          <JBTabTrigger value="about">About</JBTabTrigger>
          <JBTabTrigger value="user">User</JBTabTrigger>
        </JBTabList>
      </nav>
      <main>
        <section className="jb-tab-story-panel-wrapper">
          <JBTabContent className="jb-tab-story-panel" value="home">
            Home content
          </JBTabContent>
          <JBTabContent className="jb-tab-story-panel" value="about">
            About content
          </JBTabContent>
          <JBTabContent className="jb-tab-story-panel" value="user">
            User content
          </JBTabContent>
        </section>
      </main>
    </JBTab>,
  play: async ({
    canvasElement
  }) => {
    const tab = canvasElement.querySelector<JBTabWebComponent>("jb-tab")!;
    const list = tab.querySelector<JBTabListWebComponent>("jb-tab-list")!;
    await waitFor(() => expect(tab.value).toBe("about"));
    expect(list.orientation).toBe("vertical");
    expect(list.selectedTrigger?.value).toBe("about");
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <StandardTabs nullable />,
  play: async ({
    canvasElement
  }) => {
    const tab = canvasElement.querySelector<JBTabWebComponent>("jb-tab")!;
    const triggers = Array.from(tab.querySelectorAll<JBTabTriggerWebComponent>("jb-tab-trigger"));
    const contents = Array.from(tab.querySelectorAll<JBTabContentWebComponent>("jb-tab-content"));
    await waitFor(() => expect(tab.value).toBeNull());
    expect(contents.every(content => content.hidden)).toBe(true);
    expect(triggers[0].tabIndex).toBe(0);
    await userEvent.click(triggers[2]);
    expect(tab.value).toBe("user");
    triggers[2].selected = false;
    expect(tab.value).toBeNull();
    expect(triggers.every(trigger => !trigger.selected)).toBe(true);
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <JBTab defaultValue="summary">
      <JBTabList aria-label="Report sections">
        <JBTabTrigger value="summary">Summary</JBTabTrigger>
        <JBTabTrigger value="details">Details</JBTabTrigger>
      </JBTabList>
      <div className="jb-tab-story-duplicate-panels">
        <JBTabContent value="summary">Summary chart</JBTabContent>
        <JBTabContent value="summary">Summary table</JBTabContent>
        <JBTabContent value="details">Detailed report</JBTabContent>
      </div>
    </JBTab>,
  play: async ({
    canvasElement
  }) => {
    const visiblePanels = () => canvasElement.querySelectorAll<JBTabContentWebComponent>('jb-tab-content[value="summary"]:not([hidden])');
    await waitFor(() => expect(visiblePanels()).toHaveLength(2));
    const trigger = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="summary"]')!;
    expect(trigger.getAttribute("aria-controls")?.split(" ")).toHaveLength(2);
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <JBTab>
      <JBTabList aria-label="Keyboard sections">
        <JBTabTrigger value="first">First</JBTabTrigger>
        <JBTabTrigger value="disabled" disabled>
          Disabled
        </JBTabTrigger>
        <JBTabTrigger value="last">Last</JBTabTrigger>
      </JBTabList>
      <JBTabContent value="first">First content</JBTabContent>
      <JBTabContent value="disabled">Disabled content</JBTabContent>
      <JBTabContent value="last">Last content</JBTabContent>
    </JBTab>,
  play: async ({
    canvasElement
  }) => {
    const tab = canvasElement.querySelector<JBTabWebComponent>("jb-tab")!;
    const triggers = Array.from(tab.querySelectorAll<JBTabTriggerWebComponent>("jb-tab-trigger"));
    await waitFor(() => expect(tab.value).toBe("first"));
    triggers[0].focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(tab.value).toBe("last");
    expect(document.activeElement).toBe(triggers[2]);
    await userEvent.keyboard("{Home}");
    expect(tab.value).toBe("first");
    await userEvent.click(triggers[1]);
    expect(tab.value).toBe("first");
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("home");
    return <div>
        <output data-testid="value">{value}</output>
        <JBTab value={value} onChange={event => {
        args.onChange?.(event);
        setValue(event.detail.value);
      }}>
          <JBTabList aria-label="Controlled sections">
            <JBTabTrigger value="home">Home</JBTabTrigger>
            <JBTabTrigger value="about">About</JBTabTrigger>
          </JBTabList>
          <JBTabContent value="home">Home content</JBTabContent>
          <JBTabContent value="about">About content</JBTabContent>
        </JBTab>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const about = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="about"]')!;
    await userEvent.click(about);
    await waitFor(() => expect(canvas.getByTestId("value")).toHaveTextContent("about"));
  }
}`,...M.parameters?.docs?.source}}},N=[`Basic`,`RTL`,`ColoredIndicators`,`SizeVariants`,`NestedLayout`,`Nullable`,`DuplicatePanels`,`DisabledAndKeyboard`,`ControlledReact`]}));P();export{w as Basic,E as ColoredIndicators,M as ControlledReact,j as DisabledAndKeyboard,A as DuplicatePanels,O as NestedLayout,k as Nullable,T as RTL,D as SizeVariants,N as __namedExportsOrder,C as default,P as n,m as t};