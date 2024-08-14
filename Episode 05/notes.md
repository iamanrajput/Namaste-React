
# Why React?

Whatever we can do with the help of HTML, CSS, and JS, we can do that with React too. Then why use React?

The main purpose of using React (or any other library/framework) is to make our work easier and more efficient.

## React Hooks

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

### Types of Export/Import

1. **Default Export/Import**
    ```javascript
    export default components;
    import components from "path";
    ```

2. **Named Export/Import**
    ```javascript
    import { components } from "path";
    ```

### React Hooks (They are Normal JS Utility Functions)

There are many hooks in React, but we will mainly use:
- `useState()`
- `useEffect()`

Whenever a state variable changes/updates, React re-renders the components.

## What is React Fiber?

Introduced in React 16, Fiber is a new reconciler algorithm that the React team has culminated over two years of research. It aims to solve many of the problems that came with the original algorithm. So ultimately, React Fiber can be seen as a re-implementation of one of React’s core algorithms.

## Why is React Fast?

Because it does efficient DOM manipulation by using the Virtual DOM.
