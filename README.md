# Initialize the Project with Vite

Run the following command to create a new Vite project with React and TypeScript:

- npm create vite@latest imgerasterapp -- --template react-ts

Replace "imgerasterapp" with your desired project name.

## Install Dependencies

Navigate into your project directory and install the necessary dependencies:

- cd imgerasterapp
- npm install

### Choose a Vite Plugin for Fast Refresh

Vite offers two plugins to enable Fast Refresh in React, which allows components to update without a full reload:

# Option 1: Babel Plugin – This is the default plugin and uses Babel:

npm install @vitejs/plugin-react

# Option 2: SWC Plugin – Uses SWC (a fast alternative to Babel) and can handle large projects more efficiently:

npm install @vitejs/plugin-react-swc
