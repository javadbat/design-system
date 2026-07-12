import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-kacJPVKr.js";import{A as n,_ as ee,d as te,f as r,m as i,v as a}from"./blocks-GMI-_iQo.js";import{t as o}from"./mdx-react-shim-BnxG2iIe.js";import{a as s,c,d as l,h as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b}from"./Styles.stories-Dyiak2-Q.js";import{C as x,S,_ as C,a as w,b as T,c as E,d as D,f as O,g as k,h as A,i as j,l as M,m as N,n as P,o as F,p as I,r as L,s as R,t as z,u as B,v as V,w as H,x as ne,y as U}from"./terminal-BUByT0Nu.js";import{C as W,S as G,_ as K,a as q,b as J,c as Y,d as X,f as Z,g as re,h as ie,i as ae,l as oe,m as se,n as ce,o as le,p as ue,r as de,s as fe,t as pe,u as me,v as he,w as ge,x as _e,y as ve}from"./style-terminal-DFTGBMEp.js";function Q(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(te,{title:`Components/form elements/JBTimePicker/Styling`}),`
`,(0,$.jsx)(ee,{children:`Styling`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.code,{children:`JBTimePicker`}),` is an SVG-based wheel picker. Use common design tokens for page-level consistency, `,(0,$.jsx)(t.code,{children:`--jb-time-picker-*`}),` variables for the stable clock API, and CSS parts for official SVG surfaces such as circles, indicators, and generated time text.`]}),`
`,(0,$.jsx)(t.h2,{id:`live-gallery`,children:`Live Gallery`}),`
`,(0,$.jsx)(i,{of:f}),`
`,(0,$.jsx)(r,{of:f}),`
`,(0,$.jsx)(t.h2,{id:`common-design-tokens`,children:`Common Design Tokens`}),`
`,(0,$.jsx)(t.p,{children:`Use the core theme docs as the source of truth for shared design-system variables:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` explains the general color palette variables, default colors, customization approaches, and color generation helpers.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` explains shared size and radius variables.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`https://javadbat.github.io/design-system/?path=/docs/theme-custom-material--docs`,rel:`nofollow`,children:`Theme Custom Galleries`}),` gathers the shared custom style recipes across components.`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Time picker recipes should use those common tokens where possible, then map them into `,(0,$.jsx)(t.code,{children:`--jb-time-picker-*`}),` variables only where the picker needs a component-specific value.`]}),`
`,(0,$.jsx)(t.h2,{id:`styling-model`,children:`Styling Model`}),`
`,(0,$.jsx)(t.p,{children:`Use three layers when styling time picker examples:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Common design tokens are documented in `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Reusable example theme packs live in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` and can be shared across components.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Component recipe files live in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-time-picker/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`modules/jb-time-picker/stories/styles`})}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Public component variables use the `,(0,$.jsx)(t.code,{children:`--jb-time-picker-*`}),` prefix and are the stable styling API.`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Each example uses one shared example theme pack from `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` and one time-picker-specific recipe from `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-time-picker/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`modules/jb-time-picker/stories/styles`})}),`. The style story applies both classes directly to `,(0,$.jsx)(t.code,{children:`JBTimePicker`}),`.`]}),`
`,(0,$.jsx)(t.h2,{id:`recommended-customization-path`,children:`Recommended Customization Path`}),`
`,(0,$.jsxs)(t.ol,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.code,{children:`--jb-time-picker-*`}),` variables first for size, clock colors, text, indicators, shadow, and SVG filters.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Use common theme variables from `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` when the style should align with the design system.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Put reusable theme-pack values in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` only when they should be shared by multiple component demos.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.code,{children:`::part(...)`}),` for official exposed SVG surfaces such as `,(0,$.jsx)(t.code,{children:`::part(clock)`}),`, `,(0,$.jsx)(t.code,{children:`::part(outer-circle)`}),`, `,(0,$.jsx)(t.code,{children:`::part(inner-circle)`}),`, `,(0,$.jsx)(t.code,{children:`::part(time-text)`}),`, and unit-specific text parts.`]}),`
`,(0,$.jsx)(t.li,{children:`Use custom states for focused-unit and second visibility styling.`}),`
`,(0,$.jsx)(t.li,{children:`Add a new component variable only when a needed SVG value cannot be expressed with the current public variables or official parts.`}),`
`]}),`
`,(0,$.jsx)(t.h2,{id:`parts-and-states`,children:`Parts And States`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Part`}),(0,$.jsx)(`th`,{children:`Element`}),(0,$.jsx)(`th`,{children:`Notes`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`wrapper`})}),(0,$.jsx)(`td`,{children:`Root shadow wrapper`}),(0,$.jsx)(`td`,{children:`Use for wrapper-level size and effects.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`clock`})}),(0,$.jsx)(`td`,{children:`SVG clock element`}),(0,$.jsx)(`td`,{children:`Use for whole-clock SVG effects.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`outer-circle`})}),(0,$.jsx)(`td`,{children:`Outer SVG circle`}),(0,$.jsx)(`td`,{children:`Use for the outer clock surface.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`inner-circle`})}),(0,$.jsx)(`td`,{children:`Inner SVG circle`}),(0,$.jsx)(`td`,{children:`Use for the inner clock surface.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`time-indicators`})}),(0,$.jsx)(`td`,{children:`Indicator group`}),(0,$.jsx)(`td`,{children:`Use for group-level indicator effects.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`time-text`})}),(0,$.jsx)(`td`,{children:`Generated SVG time text`}),(0,$.jsx)(`td`,{children:`Targets all generated hour, minute, and second text nodes.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`hour-text`})}),(0,$.jsx)(`td`,{children:`Generated hour text`}),(0,$.jsx)(`td`,{children:`Use for hour-specific text styling.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`minute-text`})}),(0,$.jsx)(`td`,{children:`Generated minute text`}),(0,$.jsx)(`td`,{children:`Use for minute-specific text styling.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`second-text`})}),(0,$.jsx)(`td`,{children:`Generated second text`}),(0,$.jsx)(`td`,{children:`Use for second-specific text styling.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`currentTime-text`})}),(0,$.jsx)(`td`,{children:`Current row text`}),(0,$.jsx)(`td`,{children:`Use for selected row text styling.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`prevTime-text`})}),(0,$.jsx)(`td`,{children:`Previous row text`}),(0,$.jsx)(`td`,{children:`Use for previous row text styling.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`nextTime-text`})}),(0,$.jsx)(`td`,{children:`Next row text`}),(0,$.jsx)(`td`,{children:`Use for next row text styling.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`substitutePrevTime-text`})}),(0,$.jsx)(`td`,{children:`Far previous row text`}),(0,$.jsx)(`td`,{children:`Use for masked scrolling text styling.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`substituteNextTime-text`})}),(0,$.jsx)(`td`,{children:`Far next row text`}),(0,$.jsx)(`td`,{children:`Use for masked scrolling text styling.`})]})]})]}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Custom State`}),(0,$.jsx)(`th`,{children:`Meaning`}),(0,$.jsx)(`th`,{children:`Example Selector`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`hour-focused`})}),(0,$.jsx)(`td`,{children:`Applied when the hour unit is focused.`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`jb-time-picker:state(hour-focused)::part(hour-text)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`minute-focused`})}),(0,$.jsx)(`td`,{children:`Applied when the minute unit is focused.`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`jb-time-picker:state(minute-focused)::part(minute-text)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`second-focused`})}),(0,$.jsx)(`td`,{children:`Applied when the second unit is focused.`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`jb-time-picker:state(second-focused)::part(second-text)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`second-enabled`})}),(0,$.jsx)(`td`,{children:`Applied when seconds are visible.`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`jb-time-picker:state(second-enabled)::part(clock)`})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`second-disabled`})}),(0,$.jsx)(`td`,{children:`Applied when seconds are hidden.`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`jb-time-picker:state(second-disabled)::part(clock)`})})]})]})]}),`
`,(0,$.jsx)(t.h2,{id:`css-variables`,children:`CSS Variables`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Variable`}),(0,$.jsx)(`th`,{children:`Category`}),(0,$.jsx)(`th`,{children:`Description`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-width`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Picker wrapper width.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-height`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Picker wrapper height.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-clock-padding`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Padding around the SVG clock.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-time-text-font-size`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Generated time text font size.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-separator-text-font-size`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Separator font size.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-hour-indicator-size`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Hour indicator circle radius.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-minute-indicator-size`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Minute indicator circle radius.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-second-indicator-size`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Second indicator circle radius.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-hour-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Focused hour text and indicator color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-minute-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Focused minute text and indicator color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-second-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Focused second text and indicator color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-outer-circle-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Outer clock circle color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-inner-circle-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Inner clock circle color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-separator-text-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Separator text color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-indicator-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Default indicator color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-prev-text-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Previous value text color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-current-text-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Current value text color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-next-text-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Next value text color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-box-shadow`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Wrapper shadow.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-clock-filter`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`SVG clock filter.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-time-text-font-family`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Generated time text font family.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-time-text-font-weight`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Generated time text font weight.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-time-text-cursor`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Generated time text cursor.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-optional-text-opacity`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Optional unit text opacity.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-time-picker-wrapper-border-radius`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Root wrapper border radius.`})]})]})]}),`
`,(0,$.jsx)(t.h2,{id:`style-recipes`,children:`Style Recipes`}),`
`,(0,$.jsx)(t.h3,{id:`carbon`,children:`Carbon`}),`
`,(0,$.jsx)(i,{of:s}),`
`,(0,$.jsx)(r,{of:s}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:A,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:re,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`aurora`,children:`Aurora`}),`
`,(0,$.jsx)(i,{of:m}),`
`,(0,$.jsx)(r,{of:m}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:ne,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:G,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`forest`,children:`Forest`}),`
`,(0,$.jsx)(i,{of:c}),`
`,(0,$.jsx)(r,{of:c}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:M,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:me,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`sunset`,children:`Sunset`}),`
`,(0,$.jsx)(i,{of:g}),`
`,(0,$.jsx)(r,{of:g}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:j,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:ae,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`porcelain`,children:`Porcelain`}),`
`,(0,$.jsx)(i,{of:l}),`
`,(0,$.jsx)(r,{of:l}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:F,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:le,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`candy`,children:`Candy`}),`
`,(0,$.jsx)(i,{of:d}),`
`,(0,$.jsx)(r,{of:d}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:C,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:he,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`terminal`,children:`Terminal`}),`
`,(0,$.jsx)(i,{of:p}),`
`,(0,$.jsx)(r,{of:p}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:P,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:ce,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`material`,children:`Material`}),`
`,(0,$.jsx)(i,{of:b}),`
`,(0,$.jsx)(r,{of:b}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:E,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:Y,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`fluent`,children:`Fluent`}),`
`,(0,$.jsx)(i,{of:v}),`
`,(0,$.jsx)(r,{of:v}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:D,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:Z,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`bootstrap`,children:`Bootstrap`}),`
`,(0,$.jsx)(i,{of:_}),`
`,(0,$.jsx)(r,{of:_}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:U,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:J,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`cupertino`,children:`Cupertino`}),`
`,(0,$.jsx)(i,{of:h}),`
`,(0,$.jsx)(r,{of:h}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:I,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:se,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`ant-design`,children:`Ant Design`}),`
`,(0,$.jsx)(i,{of:y}),`
`,(0,$.jsx)(r,{of:y}),`
`,(0,$.jsx)(t.p,{children:`Shared style:`}),`
`,(0,$.jsx)(r,{code:x,language:`css`}),`
`,(0,$.jsx)(t.p,{children:`Time picker style:`}),`
`,(0,$.jsx)(r,{code:ge,language:`css`}),`
`,(0,$.jsx)(t.h2,{id:`theme-file-pattern`,children:`Theme File Pattern`}),`
`,(0,$.jsxs)(t.p,{children:[`Use `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` as the common design-token guides. Theme-pack files should keep reusable demo variables in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),`, then each component should keep its own style CSS in its story `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-time-picker/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`styles`})}),` folder.`]}),`
`,(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:`language-css`,children:`/* https://github.com/javadbat/design-system/blob/main/docs/styles/carbon.css */
.theme-name-style {
  /* shared design-system variables */
}

/* https://github.com/javadbat/design-system/blob/main/modules/jb-time-picker/stories/styles/style-carbon.css */
.theme-name-time-picker {
  /* time-picker-specific variables and official parts */
}
`})}),`
`,(0,$.jsx)(t.p,{children:`This keeps common theme tokens reusable and lets each component page show only the CSS it needs.`})]})}function ye(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Q,{...e})}):Q(e)}var $;e((()=>{$=t(),o(),a(),u(),H(),S(),T(),V(),k(),N(),O(),B(),R(),w(),L(),z(),W(),_e(),ve(),K(),ie(),ue(),X(),oe(),fe(),q(),de(),pe()}))();export{ye as default};