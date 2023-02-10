

## What's the difference between using react.memo and useMemo?

`React.memo` and `useMemo` are two optimization techniques provided by React to improve the performance of your application.

`React.memo` is a higher-order component that is used to wrap a functional component. It memoizes the component, meaning that it only re-renders the component if its props have changed. This is useful when you have a component that is expensive to render, and you want to make sure it's only rendered when necessary. Here's an example:

```javascript
const MyComponent = React.memo(function MyComponent(props) {
  // This component only re-renders if props have changed
  return <div>{props.data}</div>;
});
```

`useMemo`, on the other hand, is a hook that is used inside a functional component. It allows you to memoize a value and only recompute it when specific dependencies change. Here's an example:

```javascript
function MyComponent(props) {
  // only re-compute the value of "computedValue" when "props.data" changes
  const computedValue = useMemo(() => expensiveComputation(props.data), [props.data]);

  return <div>{computedValue}</div>;
}
```

In summary, both `React.memo` and `useMemo` are used to improve the performance of your React application by avoiding unnecessary renderings. However, `React.memo` is used to wrap a functional component and memoize the whole component, while `useMemo` is used to memoize a specific value inside a component.


https://beta.reactjs.org/reference/react/memo

React normally re-renders a component whenever its parent re-renders. With memo, you can create a component that React will not re-render when its parent re-renders so long as its new props are the same as the old props. Such a component is said to be memoized.


To memoize a component, wrap it in a call to memo and use the value that it returns in place of your original component:


```js
// Skip re-rendering when props are unchanged 
const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;
```

A React component should always have [pure rendering logic.](https://beta.reactjs.org/learn/keeping-components-pure) This means that it must return the same output if its props, state, and context haven't changed. By using `memo`, you are telling React that your component complies with this requirement, so React doesn't need to re-render as long as its props haven't changed. When you use `memo`, your component will still re-render if its own state changes or if a context that it's using changes.