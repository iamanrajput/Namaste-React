# Chapter - 01 - Inception

## Q: Difference between a `Library and Framework`?
A `Library` is a collection of pre-written code that provides specific functionalities or features. It is designed to be reused across different projects to save development time and effort.

For instance, React.js is a JavaScript library developed by Facebook.

A `Framework` is a structured, pre-designed architecture that provides a foundation for building an entire application. It dictates the overall structure, flow, and design patterns of the application.

For instance, Angular is a front-end framework developed by Google.

## Q: What is `CDN`? Why do we `use` it?
A: `CDN` stands for Content Delivery Network. It is a network of distributed servers located in various data centers around the world.

The primary purpose of a CDN is to deliver web content, such as images, videos, scripts, stylesheets, and other static or dynamic resources, to users more efficiently and with higher performance.

A CDN solves this problem by replicating the website's content on multiple servers spread across various geographic locations. When a user requests a specific piece of content, the CDN automatically routes the request to the nearest server in its network. This way, the content is delivered from a server closer to the user, reducing latency and ensuring faster loading times.

### Key benefits of using a CDN include:
- **Improved website performance:** Faster load times and reduced latency leads to a better user experience.
- **Scalability:** CDNs can handle large amounts of traffic and distribute it across their network, reducing the load on the origin server.

## Q What is difference between `React and ReactDOM`?
A: `React` is the core library of the React ecosystem. It is a JavaScript library for building user interfaces, focusing on creating reusable UI components and efficiently managing their state. React provides the tools and infrastructure to define components, handle their lifecycle, and manage state changes.

`ReactDOM` is a package that provides the integration between React and the DOM (Document Object Model). It serves as the glue that allows React components to interact with the browser's DOM. ReactDOM is specifically designed for web applications, as it handles rendering React components to the HTML DOM. When you want to display React components in the browser, you need ReactDOM to take care of the rendering process. It provides methods like **`ReactDOM.render()`** to attach a React component to a specific HTML element in the DOM.

Enjoy Learning ⭐
