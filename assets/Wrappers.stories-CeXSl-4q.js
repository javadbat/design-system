import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{q as n,t as r}from"./iframe-KWIVyJ_k.js";import{a as i,c as a,f as o,i as s,l as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./react-ngjJodjy.js";function g(e){let[t,n]=(0,_.useState)(!1),[r,m]=(0,_.useState)(!1),g=(0,_.useRef)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`button`,{type:`button`,onClick:()=>{n(e=>!e),m(!!g.current)},children:`Update props`}),(0,v.jsx)(`output`,{children:r?`Ref available`:`Ref unchecked`}),(0,v.jsx)(i,{fullscreen:t,onInit:e.onInit,children:(0,v.jsxs)(a,{"aria-label":t?`Updated table`:`Initial table`,onInit:e.onInit,children:[(0,v.jsx)(u,{headerTemplate:[{name:`name`,size:t?`2fr`:`1fr`}],onInit:e.onInit,children:(0,v.jsx)(f,{name:`name`,sortable:!t,sort:t?void 0:`asc`,onSort:e.onSort,onInit:e.onInit,children:`Name`})}),(0,v.jsxs)(l,{ref:g,isOpen:!t,rowTemplate:[{name:`name`,size:t?`2fr`:`1fr`}],onInit:e.onInit,children:[(0,v.jsxs)(c,{name:`name`,ellipsis:t?2:!0,onInit:e.onInit,children:[(0,v.jsx)(p,{onInit:e.onInit}),`Cell content`]}),(0,v.jsx)(`div`,{slot:`expand`,children:`Expanded content`})]}),(0,v.jsx)(h,{max:t?15:10,pageIndex:t?2:1,onInit:e.onInit}),(0,v.jsx)(s,{pageSize:t?20:30,pageSizes:t?void 0:[10,30],startItemIndex:t?21:1,endItemIndex:t?40:30,totalItemsCount:t?60:90,pageItemCountTitle:t?void 0:`Rows`,onPageSizeChange:e.onPageSizeChange,onInit:e.onInit}),(0,v.jsx)(o,{state:t?`exit`:`enter`,onInit:e.onInit}),(0,v.jsx)(d,{title:t?`Updated refresh`:`Refresh`,onInit:e.onInit})]})})]})}var _,v,y,b,x,S,C,w,T,E;e((()=>{_=t(n(),1),m(),v=r(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/JBGrid/Wrappers`,component:g,args:{onInit:b(),onSort:b(),onPageSizeChange:b()}},T={play:async({canvasElement:e,args:t})=>{let n=C(e),r=e.querySelector(`jb-row`),i=e.querySelector(`jb-pagination`),a=e.querySelector(`jb-pagination-info`),o=e.querySelector(`jb-col-header`),s=e.querySelector(`jb-expand-toggle`),c=e.querySelector(`jb-icon-expand`);await S(()=>{y(t.onInit).toHaveBeenCalledTimes(11),y(i.max).toBe(10),y(a.pageSize).toBe(30),y(a.pageSizes).toEqual([10,30]),y(r.isOpen).toBe(!0),y(s.shadowRoot?.querySelector(`button`)?.getAttribute(`aria-expanded`)).toBe(`true`),y(o.sort).toBe(`asc`),y(c.isExpanded).toBe(!1),y(e.querySelector(`jb-cell`)?.getAttribute(`name`)).toBe(`name`)}),await x.click(o.shadowRoot.querySelector(`.column-header`)),y(t.onSort).toHaveBeenCalledOnce(),await x.selectOptions(a.shadowRoot.querySelector(`select`),`10`),y(t.onPageSizeChange).toHaveBeenCalledOnce(),await x.click(n.getByRole(`button`,{name:`Update props`})),await S(()=>{y(i.max).toBe(15),y(i.pageIndex).toBe(2),y(a.pageSize).toBe(20),y(a.pageSizes).toEqual([20,30,50,100]),y(a.startItemIndex).toBe(21),y(a.endItemIndex).toBe(40),y(a.totalItemsCount).toBe(60),y(a.pageItemCountTitle).not.toBe(`Rows`),y(o.sortable).toBe(!1),y(o.sort).toBe(null),y(r.isOpen).toBe(!1),y(r.rowTemplate).toEqual([{name:`name`,size:`2fr`}]),y(e.querySelector(`jb-table-header`)?.headerTemplate).toEqual([{name:`name`,size:`2fr`}]),y(s.shadowRoot?.querySelector(`button`)?.getAttribute(`aria-expanded`)).toBe(`false`),y(e.querySelector(`jb-viewport`)?.fullscreen).toBe(!0),y(c.isExpanded).toBe(!0),y(e.querySelector(`jb-icon-refresh`)?.title).toBe(`Updated refresh`),y(e.querySelector(`jb-grid-layout`)?.getAttribute(`aria-label`)).toBe(`Updated table`),y(n.getByText(`Ref available`)).toBeTruthy(),y(t.onInit).toHaveBeenCalledTimes(11)})}},E=[`InitAndUpdates`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const row = canvasElement.querySelector("jb-row")!;
    const pagination = canvasElement.querySelector("jb-pagination")!;
    const info = canvasElement.querySelector("jb-pagination-info")!;
    const column = canvasElement.querySelector("jb-col-header")!;
    const toggle = canvasElement.querySelector("jb-expand-toggle")!;
    const expandIcon = canvasElement.querySelector("jb-icon-expand")!;
    await waitFor(() => {
      expect(args.onInit).toHaveBeenCalledTimes(11);
      expect(pagination.max).toBe(10);
      expect(info.pageSize).toBe(30);
      expect(info.pageSizes).toEqual([10, 30]);
      expect(row.isOpen).toBe(true);
      expect(toggle.shadowRoot?.querySelector("button")?.getAttribute("aria-expanded")).toBe("true");
      expect(column.sort).toBe("asc");
      expect(expandIcon.isExpanded).toBe(false);
      expect(canvasElement.querySelector("jb-cell")?.getAttribute("name")).toBe("name");
    });
    await userEvent.click(column.shadowRoot!.querySelector<HTMLElement>(".column-header")!);
    expect(args.onSort).toHaveBeenCalledOnce();
    await userEvent.selectOptions(info.shadowRoot!.querySelector("select")!, "10");
    expect(args.onPageSizeChange).toHaveBeenCalledOnce();
    await userEvent.click(canvas.getByRole("button", {
      name: "Update props"
    }));
    await waitFor(() => {
      expect(pagination.max).toBe(15);
      expect(pagination.pageIndex).toBe(2);
      expect(info.pageSize).toBe(20);
      expect(info.pageSizes).toEqual([20, 30, 50, 100]);
      expect(info.startItemIndex).toBe(21);
      expect(info.endItemIndex).toBe(40);
      expect(info.totalItemsCount).toBe(60);
      expect(info.pageItemCountTitle).not.toBe("Rows");
      expect(column.sortable).toBe(false);
      expect(column.sort).toBe(null);
      expect(row.isOpen).toBe(false);
      expect(row.rowTemplate).toEqual([{
        name: "name",
        size: "2fr"
      }]);
      expect(canvasElement.querySelector("jb-table-header")?.headerTemplate).toEqual([{
        name: "name",
        size: "2fr"
      }]);
      expect(toggle.shadowRoot?.querySelector("button")?.getAttribute("aria-expanded")).toBe("false");
      expect(canvasElement.querySelector("jb-viewport")?.fullscreen).toBe(true);
      expect(expandIcon.isExpanded).toBe(true);
      expect(canvasElement.querySelector("jb-icon-refresh")?.title).toBe("Updated refresh");
      expect(canvasElement.querySelector("jb-grid-layout")?.getAttribute("aria-label")).toBe("Updated table");
      expect(canvas.getByText("Ref available")).toBeTruthy();
      expect(args.onInit).toHaveBeenCalledTimes(11);
    });
  }
}`,...T.parameters?.docs?.source}}}}))();export{T as InitAndUpdates,E as __namedExportsOrder,w as default};