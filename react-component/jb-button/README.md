# jb-button-react

simple button component for react with loading ability

## installation

run `npm install jb-button-react` to install package with npm

## usage

use below syntax in your render function

```jsx
<JBButton>your button text</JBButton>
```
### type

types of button: primary and secondary.
example:

```jsx
<JBButton type='primary' >your button text</JBButton>
```

### loading
show or hide loading property.
exapmle:

```jsx
<JBButton isLoading={true} >your button text</JBButton>
```
#### loading text
adding a text for loading property.
exapmle:

```jsx
<JBButton isLoading={true} loading-text='your loading text' >your button text</JBButton>
```
