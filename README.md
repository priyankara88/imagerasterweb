# Initialize the Project with Vite

Run the following command to create a new Vite project with React and TypeScript:

- npm create vite@latest imgerasterapp -- --template react-ts

Replace "imgerasterapp" with your desired project name.

## Install Dependencies

Navigate into your project directory and install the necessary dependencies:

- cd imgerasterapp
- npm install

## Choose a Vite Plugin for Fast Refresh

Vite offers two plugins to enable Fast Refresh in React, which allows components to update without a full reload:

Option 1: Babel Plugin – This is the default plugin and uses Babel:

- npm install @vitejs/plugin-react

Option 2: SWC Plugin – Uses SWC (a fast alternative to Babel) and can handle large projects more efficiently:

- npm install @vitejs/plugin-react-swc

## 1. Install Tailwind CSS via npm

In your project directory, install Tailwind CSS and its necessary dependencies:

- npm install -D tailwindcss postcss autoprefixer
  Then, initialize the Tailwind CSS configuration files:

- npx tailwindcss init -p
  This creates two files:

- tailwind.config.js - for configuring Tailwind’s settings
- postcss.config.js - for setting up PostCSS plugins

## 2. Configure Tailwind to Remove Unused Styles in Production

In your tailwind.config.js file, add the paths to all your template files under the content key to enable Tailwind’s purge feature:

javascript

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 3. Add Tailwind’s Base Styles

In your CSS file (e.g., src/index.css), add the following lines to include Tailwind’s base, components, and utilities styles:

css

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Start the Development Server

To see Tailwind CSS in action, start the development server:

npm run dev
Now, you can begin using Tailwind classes in your React components. For example:

```javascript
function App() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
    </div>
  );
}

export default App;
```
