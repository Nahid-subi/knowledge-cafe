import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className='div'>
                <h1>Props vs state</h1>
                <p>
                    In React, both props and state are used to manage data and determine what should be rendered in the UI.

                    Props: short for properties, is an object of arbitrary inputs that a React component accepts as the first argument. The component receives props as an immutable object and it should not modify its props directly. Props are passed from parent components to child components, and they are read-only. Once passed, they cannot be modified by the receiving component. If a change to a prop is required, it should be made by the parent component, which would then re-render the child component with the updated prop.

                    State: is an object that belongs to a component, and it determines the behavior of the component. Unlike props, state is mutable and can be modified directly by the component itself using the setState() method. Changes to state cause a component to re-render. State is often used to hold data that can change, such as user input or data fetched from an API.

                    In summary, props are used for passing data from parent components to child components, while state is used for managing the internal state of a component.</p>
            </div>
            <div className='div'>
                <h1>
                    How does useState work?</h1>
                <p>

                    useState is a hook provided by React that allows you to manage state in functional components. It takes an initial value as a parameter and returns an array with two elements: the current state value and a function that allows you to update the state.

                    The function that allows you to update the state is typically named with the prefix "set", followed by the state variable name. For example, if you have a state variable named count, the corresponding function would be named setCount.

                    When you call the function returned by useState to update the state, you can either pass in the new state value directly or a function that calculates the new state based on the previous state. If you pass in a function, it will receive the previous state value as an argument and should return the new state value.</p>
            </div>
            <div className='div'>
                <h1>Purpose of useEffect other than fetching data.</h1>
                <p>
                    The useEffect hook in React is used to handle side effects in a functional component. Here are some common use cases for useEffect other than fetching data:

                    Updating the title of a page: useEffect can be used to update the title of a page based on a component's state or props. This can be useful when you want to dynamically change the title of a page based on user input or some other event.

                    Subscribing to events: useEffect can be used to subscribe to events such as keyboard events, scroll events, or resize events. This allows you to add event listeners to a component and clean them up when the component unmounts.

                    Animations: useEffect can be used to trigger animations when a component mounts or updates. For example, you could use useEffect to add a class to an element when it appears on the screen, triggering a CSS animation.

                    Updating global state: useEffect can be used to update global state in a Redux store or other state management library. This allows you to dispatch actions or update state based on changes in a component's local state or props.

                    Scheduling timers: useEffect can be used to schedule timers such as timeouts or intervals. This can be useful when you want to perform some action after a certain amount of time has elapsed.

                    Overall, useEffect provides a way to handle side effects in functional components that would otherwise require class components or other workarounds.



                </p>
            </div>
            <div className='div'>
                <h1>
                    How Does React work?</h1>
                <p>
                    React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and build complex UIs using a declarative programming model.

                    When a React application is loaded in a browser, it first creates a virtual DOM (Document Object Model) representation of the UI. The virtual DOM is a lightweight copy of the actual DOM, which allows React to perform updates more efficiently.

                    React uses a unidirectional data flow architecture, which means that data flows from parent components to child components through the use of props. When a component's state or props change, React re-renders the component and updates the virtual DOM.

                    React then compares the updated virtual DOM with the previous version of the virtual DOM to identify what has changed. This process is called reconciliation, and it is what allows React to efficiently update the actual DOM with only the necessary changes.

                    React also supports server-side rendering, which allows the initial render of a React application to be done on the server, before the HTML is sent to the client. This can improve performance by reducing the time to first render.

                    Overall, React's efficient rendering and data flow make it a popular choice for building dynamic and complex web applications.




                </p>
            </div>


        </div>
    );
};

export default Blog;