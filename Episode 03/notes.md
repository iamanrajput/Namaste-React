# Chapter 03 - Laying the Foundation

## What is `JSX`?
- JSX stands for JavaScript XML.
- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
- JSX makes it easier to write and add HTML in React.
- JSX converts HTML tags into react elements.
- JSX is a syntax extension for JavaScript that allows developers to write HTML-like code directly within their JavaScript files.

Many people say JSX is "HTML in JS," but that's not accurate—JSX is a HTML-like syntax.

## Example Comparison

Earlier, people used to write React code like this:

```
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React 🚀"
);
```

 But with JSX syntax, it looks like this:
```
const jsxHeading = <h1 id="heading">Namaste React using JSX🚀</h1>;
```
Both versions work the same way, so people prefer JSX.

## How JSX Works with JavaScript Engines

JavaScript engines understand ES6 (i.e., ECMAScript), so they don't natively understand JSX code. That's where PARCEL comes in—it transpiles JSX code before it reaches the JavaScript engine.

PARCEL does this with the help of Babel. Babel is a JavaScript compiler that is mainly used to convert ECMAScript 2015+ code into a backwards-compatible version of JavaScript that works in current and older browsers or environments.

We can write clss is jsx by -
that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.


## React Components - 
1. Class Based(OLD Way)
2. Function Based (NEW Way)

### Funtional Component - Always starts with Capital Letter and return a jsx 
```
const HeadingComponent = () => {
    return <h1>Namaste from Funtional Component</h1>;
};
```
but we can write this as 
```
const HeadingComponent = () => <h1>Namaste from Funtional Component</h1>;
```
both works same.


### We can write JS code under HTML like code in jsx using {} =>
```
<div id="container">
    <h2>{100+200}</h2>
</div>
```
