# Incorrect useEffect Dependency Array in React

This repository demonstrates a common error in React's `useEffect` hook: an incorrect dependency array that leads to unexpected behavior. The provided code snippet shows a component where the `useEffect` hook attempts to update the state in a way that creates an infinite render loop. The solution demonstrates the correct way to manage dependencies within `useEffect` to resolve the issue.

## Bug

The `bug.js` file contains the faulty component with the infinite render loop.  The `useEffect` hook sets the state in a way that causes the component to continually re-render. 

## Solution

The `bugSolution.js` file shows the corrected version of the component. The dependency array is updated to correctly handle the component state updates. 
