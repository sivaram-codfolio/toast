# Toast Notification System

🚀 **Overview**  
Toast is a lightweight and highly customizable notification system for web applications. It allows you to display toast messages with ease, making it an excellent choice for improving user experience in modern web apps. Built using TypeScript, Tailwind CSS, and optimized with Vite, it provides a smooth and seamless integration.


🎯 **Key Features**
- 🔥 Simple API for easy integration
- 🎨 Fully customizable styling with Tailwind CSS
- ⚡ Built-in TypeScript support for type safety
- 🚀 Fast and optimized with Vite
- 📱 Fully responsive design for any screen size


📦 **Installation**  
Clone the repository and install dependencies:

```bash
git clone https://github.com/sivaram-codfolio/toast.git
cd toast
npm install
```


🛠️ **Usage**  
To use the Toast notification system in your React application, follow these steps:

1. Import the useToast hook in your component:

```typescript
import { useToast } from "@app/hooks";
```

2. Use the useToast hook to show toast notifications:

```typescript
const ToastComponent = () => {
  const showToast = useToast();

  const successToast = () => {
    showToast("✅ Success! Your changes have been saved.", { variant: "success", duration: 3000 });
  };

  const errorToast = () => {
    showToast("❌ Error! Something went wrong.", { variant: "error" });
  };

  return (
    <>
      <button onClick={successToast}>Show Success Toast</button>
      <button onClick={errorToast}>Show Error Toast</button>
    </>
  );
};
```


🖌️ **Customization**  
You can customize the toast’s appearance and behavior by modifying the toast.tsx file. Tailwind CSS classes can be updated directly in the component, or you can override them in a custom CSS file for more flexibility.

Here’s an example for custom configurations:

```bash
const customToast = (message: string) => {
  showToast(message, { variant: "info", duration: 5000 });
};
```


🤝 **Contributing**  
We welcome contributions to improve the Toast Notification System. Feel free to fork the repository, report bugs, or submit pull requests.


📜 **License**  
This project is licensed under the MIT License. See the LICENSE file for more information.
