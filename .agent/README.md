# Component Development Conventions

Use these conventions when creating or updating JB Design System components.

## Web-component properties and accessibility

- Keep each property's state, reflected attribute, and related accessibility state together.
- Do not use a single general method such as `updateAccessibility()` to update accessibility state for unrelated properties.
- When a property can change through both its JavaScript setter and `attributeChangedCallback`, create one property-specific method and call it from both paths. That method should update only that property, its reflected state, and its related ARIA state.
- Give shared derived state its own focused method. For example, if both `selected` and `disabled` affect `tabIndex`, use an `updateTabIndex()` method and call it from both property update paths.
- Keep relationship ARIA attributes in dedicated methods, such as `setAriaControls()` or `setAriaLabelledBy()`.
- Apply the same property and accessibility structure consistently across a component's subcomponents.

## React wrappers

- Keep React wrapper components focused on ref exposure, prop partitioning, hook calls, and rendering.
- Put web-component property synchronization in a component-specific `attributes-hook.ts` file using React effects.
- Put custom-element event registration in a component-specific `events-hook.ts` file using `useEvent` from `jb-core/react`.
- Create an event hook only when the web component has custom events to register. Standard React DOM events should continue through the wrapper's remaining props.
- Define and export focused attribute and event prop types from their hook files, then compose the wrapper's public prop type from those types and `JBElementStandardProps`.
- Preserve declarative JSX attributes where they support initial rendering or server-rendered markup, while hooks keep the web-component properties synchronized after mounting.
- Apply this wrapper structure consistently to the main component and all of its React subcomponent wrappers.

## Verification

- Run Biome on every changed source file.
- Build the narrow web-component and React wrapper entries that were changed.
- Add or update Storybook `play` tests for important state, event, accessibility, and parent-child synchronization behavior.
- Update changelog after you implement something need to be notified for consumer user.
- if you change web-component public interface, css variable, slut ,... update `custom-elements.json` file base on it.
