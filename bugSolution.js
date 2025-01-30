```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: only sets count to 10 on initial mount
    setCount(10);
  }, []);

  return <div>Count: {count}</div>;
}
```