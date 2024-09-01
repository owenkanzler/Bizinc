# Technical Assessment for Bizinc

## Section 1 - JavaScript

**Q: What are the differences between `==` and `===` in JavaScript?**
**A:** The `==` operator checks for equality of values with type coercion, meaning it converts the values to the same type before comparing them. In contrast, the `===` operator checks for strict equality, meaning it compares both the values and their types without type coercion.

## Section 2 - React

**Q: What is the purpose of React's `useEffect` hook? Provide an example use case.**  
**A:** The `useEffect` hook allows you to perform side effects in function components after the component renders. It can be used for tasks such as data fetching, subscriptions, or manually changing the DOM.  
**Example:** Fetching data from an API after the component mounts.

```javascript
import { useEffect, useState } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```

## Section 3 - Node.js

**Q: How does Node.js handle asynchronous operations, and why is this beneficial?**  
**A:** By using callbacks, and it is beneficial because it is better/faster and simpler/easier to read.

## Section 4 - Next.js

**Q: What is the difference between `getStaticProps` and `getServerSideProps` in Next.js?**  
**A:** `getStaticProps` fetchs data at build time and is used for static apps, while `getServerSideProps` fetches data on each request and is used for server side rendering.

## Section 5 - PostgreSQL

**Q: What is a primary key in PostgreSQL, and why is it important?**  
**A:** A primary key is a unique id for each record in a table. It is important for uniquness so that you're able to find any record in the table individually.

## Section 6 - Azure App Services

**Q: Describe the steps to deploy a simple Node.js application to Azure App Services.**  
**A:**

1. Create a Resource Group
2. Create an Azure App Service Plan
3. Create a Web App
4. Deploy Your Application

**Q: What is a common benefit of using Azure App Services for hosting applications?**  
**A:** Scalability

## Section 7 - WordPress

**I am not familier with WordPress, but I am willing and eager to learn.**
