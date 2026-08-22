import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-B_baI-l0.js";import{f as n,h as r,j as i,p as a,y as o}from"./blocks-BOgK5JcJ.js";import{t as s}from"./mdx-react-shim-kIobHN9U.js";import{FilteredOptions as c,n as l}from"./JBListbox.stories-ButVIhC4.js";function u(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{title:`Components/form elements/JBListbox/Filtering`}),`
`,(0,f.jsx)(t.h1,{id:`build-a-searchable-listbox`,children:`Build a searchable listbox`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`JBListbox`}),` intentionally does not render a search field. This keeps the native web component focused on listbox behavior and lets each application choose its own input, layout, and filtering experience.`]}),`
`,(0,f.jsxs)(t.p,{children:[`In React, compose a regular `,(0,f.jsx)(t.code,{children:`JBInput`}),` with the listbox and keep the filter text in state. When the text changes, dispatch a `,(0,f.jsx)(t.code,{children:`filter-change`}),` event on the listbox ref:`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { useEffect, useRef, useState } from "react";
import { JBInput } from "jb-input/react";
import type { JBListboxWebComponent } from "jb-select/listbox";
import { JBListbox } from "jb-select/listbox/react";
import { JBOption } from "jb-select/option/react";
import "jb-icons/search";

const StringListbox = JBListbox<string>;

export function SearchableListbox() {
  const [filter, setFilter] = useState("");
  const listboxRef = useRef<JBListboxWebComponent<string>>(null);

  useEffect(() => {
    listboxRef.current?.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: { filterText: filter },
      }),
    );
  }, [filter]);

  return (
    <StringListbox ref={listboxRef} label="Environment" name="environment">
      <JBInput
        placeholder="Search environments"
        value={filter}
        onInput={event => setFilter(event.target.value)}
      >
        <jb-icon-search slot="end-section" size="sm" />
      </JBInput>

      <JBOption value="development">Development</JBOption>
      <JBOption value="staging">Staging</JBOption>
      <JBOption value="production">Production</JBOption>
    </StringListbox>
  );
}
`})}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`JBListbox`}),` calls `,(0,f.jsx)(t.code,{children:`setSelectElement`}),` when each `,(0,f.jsx)(t.code,{children:`JBOption`}),` is registered. That connects the option to the listbox's `,(0,f.jsx)(t.code,{children:`filter-change`}),` event. Each option then compares its text with `,(0,f.jsx)(t.code,{children:`detail.filterText`}),` and updates its own `,(0,f.jsx)(t.code,{children:`hidden`}),` state, so the consumer does not need to query or manually update individual options.`]}),`
`,(0,f.jsxs)(t.p,{children:[`The same event can be dispatched from a native web-component application. Keep a reference to `,(0,f.jsx)(t.code,{children:`<jb-listbox>`}),` and send the event whenever the search input changes:`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-js`,children:`listbox.dispatchEvent(
  new CustomEvent("filter-change", {
    detail: { filterText: searchInput.value },
  }),
);
`})}),`
`,(0,f.jsxs)(t.p,{children:[`The listbox remains form-compatible, supports single or multiple selection, and still uses the same `,(0,f.jsx)(t.code,{children:`JBOption`}),` children. The filter only controls which options are visible; selection and validation continue to be handled by `,(0,f.jsx)(t.code,{children:`JBListbox`}),`.`]}),`
`,(0,f.jsx)(r,{of:c}),`
`,(0,f.jsx)(a,{of:c})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),s(),o(),l()}))();export{d as default};