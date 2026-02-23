# Project Management App

A robust project management tool built with React and Tailwind CSS. This application allows users to create projects, manage deadlines, and track specific tasks associated with each project.

## Demo

![project-demo](https://github.com/user-attachments/assets/8851dedd-81ae-4a44-a866-42deddcf0d38)

## Features

- **Project Creation:** Add new projects with titles, descriptions, and due dates.
- **Task Management:** Add and remove tasks for each specific project.
- **Dynamic Views:** Switch between project details, project creation forms, and the "no project selected" landing page.
- **Project Deletion:** Remove entire projects along with their associated tasks.
- **Responsive Design:** Fully responsive UI styled with Tailwind CSS for a modern look and feel.

## Technical Highlights

This project focuses on advanced React patterns and state management:

- **State Management:** Uses a single centralized state object to manage projects, tasks, and the selection flow.
- **Uncontrolled Components:** Implements `useRef` and `forwardRef` for optimized form handling and DOM access.
- **Component Communication:** Utilizes prop drilling and lifting state up to maintain a "single source of truth."
- **Immutable State Updates:** Ensures data integrity using the spread operator and functional state updates to manage nested arrays and objects.
- **Imperative Logic:** Uses `useImperativeHandle` to expose child component methods to parent components when necessary.

## Technologies Used

- **React:** For building the user interface and managing component lifecycles.
- **Tailwind CSS:** For utility-first styling and layout.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/porfirr/project-management-app-react.git

2. Install dependencies:
    ```bash
    npm install

3. Run the application:
    ```bash
    npm run dev


