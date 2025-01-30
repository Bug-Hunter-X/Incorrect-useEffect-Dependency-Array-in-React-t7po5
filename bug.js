```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: setting count to 10 after every render
    setCount(10);
  }, []);

  return <div>Count: {count}</div>;
}
```