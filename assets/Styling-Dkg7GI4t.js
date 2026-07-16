import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CJEKjAwU.js";import{A as n,_ as ee,d as te,f as r,m as i,v as a}from"./blocks-BSzqjapA.js";import{t as o}from"./mdx-react-shim-D6Em9IKr.js";import{a as s,c,d as l,h as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b}from"./Styles.stories-BbDULnJ5.js";import{C as x,S,_ as C,a as w,b as T,c as E,d as D,f as O,g as k,h as A,i as j,l as M,m as N,n as P,o as F,p as I,r as L,s as R,t as z,u as B,v as V,w as H,x as ne,y as U}from"./terminal-BUByT0Nu.js";import{C as W,S as G,_ as K,a as q,b as J,c as Y,d as X,f as Z,g as re,h as ie,i as ae,l as oe,m as se,n as ce,o as le,p as ue,r as de,s as fe,t as pe,u as me,v as he,w as ge,x as _e,y as ve}from"./style-terminal-eiXo8VBp.js";function Q(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(te,{title:`Components/JBCalendar/Styling`}),`
`,(0,$.jsx)(ee,{children:`Styling`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.code,{children:`JBCalendar`}),` styling is theme-driven. General design tokens are documented in the core theme pages. The shared files in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` are reusable example theme packs built from those common token ideas, and component-specific style files live beside each component's stories.`]}),`
`,(0,$.jsx)(t.h2,{id:`live-gallery`,children:`Live Gallery`}),`
`,(0,$.jsxs)(t.p,{children:[`Start with the gallery to compare the available styling directions. Each item applies one class directly to `,(0,$.jsx)(t.code,{children:`JBCalendar`}),`, so the examples stay scoped and easy to copy.`]}),`
`,(0,$.jsx)(i,{of:f}),`
`,(0,$.jsx)(r,{of:f}),`
`,(0,$.jsx)(t.h2,{id:`common-design-tokens`,children:`Common Design Tokens`}),`
`,(0,$.jsx)(t.p,{children:`Use the core theme docs as the source of truth for shared design-system variables:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` explains the general color palette variables, default colors, customization approaches, and color generation helpers.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` explains shared size and radius variables.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`https://javadbat.github.io/design-system/?path=/docs/theme-custom-material--docs`,rel:`nofollow`,children:`Theme Custom Galleries`}),` gathers the shared custom style recipes across components.`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Calendar recipes should use those common tokens where possible, then map them into `,(0,$.jsx)(t.code,{children:`--jb-calendar-*`}),` variables only where the calendar needs a component-specific value.`]}),`
`,(0,$.jsx)(t.h2,{id:`styling-model`,children:`Styling Model`}),`
`,(0,$.jsx)(t.p,{children:`Use three layers when styling calendar examples:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Common design tokens are documented in `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Reusable example theme packs live in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` and can be shared across components.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Component recipe files live in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-calendar/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`modules/jb-calendar/stories/styles`})}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Public component variables use the `,(0,$.jsx)(t.code,{children:`--jb-calendar-*`}),` prefix and are the stable styling API.`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Each example uses one shared example theme pack from `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` and one calendar-specific recipe from `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-calendar/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`modules/jb-calendar/stories/styles`})}),`. The style story applies both classes directly to `,(0,$.jsx)(t.code,{children:`JBCalendar`}),`.`]}),`
`,(0,$.jsx)(t.h2,{id:`recommended-customization-path`,children:`Recommended Customization Path`}),`
`,(0,$.jsxs)(t.ol,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.code,{children:`--jb-calendar-*`}),` variables first for component internals.`]}),`
`,(0,$.jsx)(t.li,{children:`Use host styles for the outside surface: background, padding, shadow, border, and component-level border radius.`}),`
`,(0,$.jsxs)(t.li,{children:[`Use common theme variables from `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` when the style should align with the design system.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Put reusable theme-pack values in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` only when they should be shared by multiple component demos.`]}),`
`,(0,$.jsx)(t.li,{children:`Add a new component variable only when a needed internal part cannot be customized with the current public variables.`}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Use `,(0,$.jsx)(t.code,{children:`::part(...)`}),` sparingly for exposed surfaces and state tokens that need styling beyond variables, such as `,(0,$.jsx)(t.code,{children:`::part(disabled-day)`}),`, `,(0,$.jsx)(t.code,{children:`::part(today-day)`}),`, or `,(0,$.jsx)(t.code,{children:`::part(navigator)`}),`. The Material, Fluent, Carbon, Candy, and Terminal recipes include small examples.`]}),`
`,(0,$.jsx)(t.h2,{id:`parts-and-surfaces`,children:`Parts And Surfaces`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Part`}),(0,$.jsx)(`th`,{children:`Element`}),(0,$.jsx)(`th`,{children:`Notes`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`root`})}),(0,$.jsx)(`td`,{children:`Root wrapper`}),(0,$.jsx)(`td`,{children:`Main wrapper inside the shadow DOM.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`navigator`})}),(0,$.jsx)(`td`,{children:`Navigator section`}),(0,$.jsx)(`td`,{children:`Contains the previous button, title, and next button.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`arrow-button`}),`, `,(0,$.jsx)(`code`,{children:`prev-button`}),`, `,(0,$.jsx)(`code`,{children:`next-button`})]}),(0,$.jsx)(`td`,{children:`Navigator buttons`}),(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`arrow-button`}),` targets both buttons; `,(0,$.jsx)(`code`,{children:`prev-button`}),` and `,(0,$.jsx)(`code`,{children:`next-button`}),` target each side.`]})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`navigator-title`}),`, `,(0,$.jsx)(`code`,{children:`navigator-month`}),`, `,(0,$.jsx)(`code`,{children:`navigator-year`}),`, `,(0,$.jsx)(`code`,{children:`navigator-year-range`})]}),(0,$.jsx)(`td`,{children:`Navigator labels`}),(0,$.jsx)(`td`,{children:`Month, year, and year-range labels shown for the active section.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`calendar`})}),(0,$.jsx)(`td`,{children:`Selection area`}),(0,$.jsx)(`td`,{children:`Wrapper for day, month, year, and swipe-up sections.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`day-section`}),`, `,(0,$.jsx)(`code`,{children:`week-day-wrapper`}),`, `,(0,$.jsx)(`code`,{children:`week-day`})]}),(0,$.jsx)(`td`,{children:`Day section and weekday labels`}),(0,$.jsx)(`td`,{children:`Use for the visible day-selection structure and weekday label row.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`month-day-container`}),`, `,(0,$.jsx)(`code`,{children:`month-day-wrapper`}),`, `,(0,$.jsx)(`code`,{children:`current-month-day-wrapper`}),`, `,(0,$.jsx)(`code`,{children:`prev-month-day-wrapper`}),`, `,(0,$.jsx)(`code`,{children:`next-month-day-wrapper`})]}),(0,$.jsx)(`td`,{children:`Day grid wrappers`}),(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`month-day-wrapper`}),` targets all day grids; current, previous, and next wrappers are also exposed.`]})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`empty-day`}),`, `,(0,$.jsx)(`code`,{children:`day`}),`, `,(0,$.jsx)(`code`,{children:`today-day`}),`, `,(0,$.jsx)(`code`,{children:`selected-day`}),`, `,(0,$.jsx)(`code`,{children:`disabled-day`})]}),(0,$.jsx)(`td`,{children:`Day items`}),(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`today-day`}),`, `,(0,$.jsx)(`code`,{children:`selected-day`}),`, and `,(0,$.jsx)(`code`,{children:`disabled-day`}),` are state-specific part tokens added to the day item.`]})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`day-button`}),`, `,(0,$.jsx)(`code`,{children:`day-number`}),`, `,(0,$.jsx)(`code`,{children:`status-point`})]}),(0,$.jsx)(`td`,{children:`Day item internals`}),(0,$.jsx)(`td`,{children:`Targets the day visual surface, number label, and today marker.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`month-section`}),`, `,(0,$.jsx)(`code`,{children:`month`}),`, `,(0,$.jsx)(`code`,{children:`month-name`})]}),(0,$.jsx)(`td`,{children:`Month selection`}),(0,$.jsx)(`td`,{children:`Targets the month section, each month item, and the month label.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`year-section`}),`, `,(0,$.jsx)(`code`,{children:`years-wrapper`}),`, `,(0,$.jsx)(`code`,{children:`current-years-wrapper`}),`, `,(0,$.jsx)(`code`,{children:`prev-years-wrapper`}),`, `,(0,$.jsx)(`code`,{children:`next-years-wrapper`})]}),(0,$.jsx)(`td`,{children:`Year selection wrappers`}),(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`years-wrapper`}),` targets all year grids; current, previous, and next wrappers are also exposed.`]})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`year`}),`, `,(0,$.jsx)(`code`,{children:`year-number`})]}),(0,$.jsx)(`td`,{children:`Year items`}),(0,$.jsx)(`td`,{children:`Targets each year item and its label.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsxs)(`td`,{children:[(0,$.jsx)(`code`,{children:`swipe-up`}),`, `,(0,$.jsx)(`code`,{children:`swipe-up-icon`}),`, `,(0,$.jsx)(`code`,{children:`swipe-up-text`})]}),(0,$.jsx)(`td`,{children:`Swipe-up hint`}),(0,$.jsx)(`td`,{children:`Targets the hint shown near the year-selection control.`})]})]})]}),`
`,(0,$.jsx)(t.h2,{id:`css-variables`,children:`CSS Variables`}),`
`,(0,$.jsx)(t.h3,{id:`size-and-shape`,children:`Size And Shape`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Variable`}),(0,$.jsx)(`th`,{children:`Controls`}),(0,$.jsx)(`th`,{children:`Default`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-arrow-button-border-radius`})}),(0,$.jsx)(`td`,{children:`Navigator arrow button radius`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-radius-sm)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-button-border-radius`})}),(0,$.jsx)(`td`,{children:`Day button radius`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-radius-sm)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-month-button-border-radius`})}),(0,$.jsx)(`td`,{children:`Month button radius`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-radius-sm)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-year-button-border-radius`})}),(0,$.jsx)(`td`,{children:`Year button radius`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-radius-sm)`})})]})]})]}),`
`,(0,$.jsx)(t.h3,{id:`theme-and-color`,children:`Theme And Color`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Variable`}),(0,$.jsx)(`th`,{children:`Controls`}),(0,$.jsx)(`th`,{children:`Default`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-color`})}),(0,$.jsx)(`td`,{children:`Main calendar text color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-text-primary)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-arrow-button-bg-color`})}),(0,$.jsx)(`td`,{children:`Navigator arrow button background`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-neutral-10)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-arrow-fill-color`})}),(0,$.jsx)(`td`,{children:`Navigator arrow icon and swipe icon color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-neutral-6)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-text-color`})}),(0,$.jsx)(`td`,{children:`Normal day text color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-neutral-4)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-text-color-disabled`})}),(0,$.jsx)(`td`,{children:`Disabled day text color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-neutral-8)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-status-point-border-color`})}),(0,$.jsx)(`td`,{children:`Today status point border color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-white)`})})]})]})]}),`
`,(0,$.jsx)(t.h3,{id:`state`,children:`State`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Variable`}),(0,$.jsx)(`th`,{children:`Controls`}),(0,$.jsx)(`th`,{children:`Default`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-text-color-today`})}),(0,$.jsx)(`td`,{children:`Today day text color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-green)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-bg-color-hover`})}),(0,$.jsx)(`td`,{children:`Day hover background`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-neutral-10)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-color-hover`})}),(0,$.jsx)(`td`,{children:`Day hover text color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-text-primary)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-bg-color-selected`})}),(0,$.jsx)(`td`,{children:`Selected day background`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-neutral)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-color-selected`})}),(0,$.jsx)(`td`,{children:`Selected day text color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-text-contrast)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-bg-color-selected-hover`})}),(0,$.jsx)(`td`,{children:`Selected day hover background`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-neutral-2)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-day-color-selected-hover`})}),(0,$.jsx)(`td`,{children:`Selected day hover text color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-text-contrast)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-status-point-bg-color-today`})}),(0,$.jsx)(`td`,{children:`Today status point background`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-green)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-month-bg-color-hover`})}),(0,$.jsx)(`td`,{children:`Month hover background`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-neutral-10)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-month-color-hover`})}),(0,$.jsx)(`td`,{children:`Month hover text color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-text-primary)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-year-bg-color-hover`})}),(0,$.jsx)(`td`,{children:`Year hover background`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-neutral-10)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-calendar-year-color-hover`})}),(0,$.jsx)(`td`,{children:`Year hover text color`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`var(--jb-text-primary)`})})]})]})]}),`
`,(0,$.jsx)(t.h3,{id:`demo-only-variables`,children:`Demo-Only Variables`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Variable`}),(0,$.jsx)(`th`,{children:`Used by`}),(0,$.jsx)(`th`,{children:`Notes`})]})}),(0,$.jsx)(`tbody`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--custom-calendar-radius`})}),(0,$.jsx)(`td`,{children:`Story recipe host classes`}),(0,$.jsxs)(`td`,{children:[`Demo helper only. It is not part of the `,(0,$.jsx)(`code`,{children:`JBCalendar`}),` public API.`]})]})})]}),`
`,(0,$.jsx)(t.h2,{id:`starter-recipe`,children:`Starter Recipe`}),`
`,(0,$.jsx)(t.p,{children:`Use this minimal recipe when a product only needs brand color alignment.`}),`
`,(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:`language-css`,children:`jb-calendar.brand-calendar {
  border-radius: 1rem;

  --jb-calendar-color: #111827;
  --jb-calendar-arrow-fill-color: #2563eb;
  --jb-calendar-day-text-color-today: #2563eb;
  --jb-calendar-day-bg-color-selected: #2563eb;
  --jb-calendar-day-color-selected: #ffffff;
  --jb-calendar-status-point-bg-color-today: #f59e0b;
}
`})}),`
`,(0,$.jsx)(t.h2,{id:`style-recipes`,children:`Style Recipes`}),`
`,(0,$.jsx)(t.h3,{id:`carbon`,children:`Carbon`}),`
`,(0,$.jsxs)(t.p,{children:[`Use `,(0,$.jsx)(t.code,{children:`carbon-style carbon-style`}),` directly on the calendar host when you want to style one calendar with shared Carbon tokens and calendar-specific styling.`]}),`
`,(0,$.jsx)(i,{of:s}),`
`,(0,$.jsx)(r,{of:s}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:A,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:re,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`aurora`,children:`Aurora`}),`
`,(0,$.jsx)(i,{of:m}),`
`,(0,$.jsx)(r,{of:m}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-1`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:ne,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-1`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:G,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`forest`,children:`Forest`}),`
`,(0,$.jsx)(i,{of:c}),`
`,(0,$.jsx)(r,{of:c}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-2`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:M,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-2`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:me,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`sunset`,children:`Sunset`}),`
`,(0,$.jsx)(i,{of:g}),`
`,(0,$.jsx)(r,{of:g}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-3`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:j,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-3`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:ae,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`porcelain`,children:`Porcelain`}),`
`,(0,$.jsx)(i,{of:l}),`
`,(0,$.jsx)(r,{of:l}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-4`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:F,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-4`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:le,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`candy`,children:`Candy`}),`
`,(0,$.jsx)(i,{of:d}),`
`,(0,$.jsx)(r,{of:d}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-5`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:C,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-5`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:he,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`terminal`,children:`Terminal`}),`
`,(0,$.jsx)(i,{of:p}),`
`,(0,$.jsx)(r,{of:p}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-6`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:P,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-6`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:ce,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`material`,children:`Material`}),`
`,(0,$.jsx)(i,{of:b}),`
`,(0,$.jsx)(r,{of:b}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-7`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:E,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-7`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:Y,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`fluent`,children:`Fluent`}),`
`,(0,$.jsx)(i,{of:v}),`
`,(0,$.jsx)(r,{of:v}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-8`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:D,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-8`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:Z,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`bootstrap`,children:`Bootstrap`}),`
`,(0,$.jsx)(i,{of:_}),`
`,(0,$.jsx)(r,{of:_}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-9`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:U,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-9`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:J,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`cupertino`,children:`Cupertino`}),`
`,(0,$.jsx)(i,{of:h}),`
`,(0,$.jsx)(r,{of:h}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-10`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:I,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-10`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:se,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`ant-design`,children:`Ant Design`}),`
`,(0,$.jsx)(i,{of:y}),`
`,(0,$.jsx)(r,{of:y}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-11`,children:`Shared Tokens`}),`
`,(0,$.jsx)(r,{code:x,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`calendar-css-11`,children:`Calendar CSS`}),`
`,(0,$.jsx)(r,{code:ge,language:`css`}),`
`,(0,$.jsx)(t.h2,{id:`theme-file-pattern`,children:`Theme File Pattern`}),`
`,(0,$.jsxs)(t.p,{children:[`Use `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` as the common design-token guides. Theme-pack files should keep reusable demo variables in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),`, then each component should keep its own style CSS in its story `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-calendar/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`styles`})}),` folder.`]}),`
`,(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:`language-css`,children:`/* https://github.com/javadbat/design-system/blob/main/docs/styles/carbon.css */
.theme-name-style {
  /* shared design-system variables */
}

/* https://github.com/javadbat/design-system/blob/main/modules/jb-calendar/stories/styles/style-carbon.css */
jb-calendar.theme-name-calendar {
  /* calendar-specific variables */
}
`})}),`
`,(0,$.jsx)(t.p,{children:`This keeps common theme tokens reusable and lets each component page show only the CSS it needs.`})]})}function ye(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Q,{...e})}):Q(e)}var $;e((()=>{$=t(),o(),a(),u(),H(),S(),T(),V(),k(),N(),O(),B(),R(),w(),L(),z(),W(),_e(),ve(),K(),ie(),ue(),X(),oe(),fe(),q(),de(),pe()}))();export{ye as default};