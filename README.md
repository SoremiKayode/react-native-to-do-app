# React Native To-Do List App

A simple to-do list app built with React Native, allowing users to add and delete tasks.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Adding a Task](#adding-a-task)
  - [Deleting a Task](#deleting-a-task)
- [Components](#components)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [PropTypes](#proptypes)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites
- Node.js and npm installed
- React Native development environment set up

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-native-todo-app.git
   cd react-native-todo-app

2. Install dependencies: npm install
3. Run the app on an Expo Go, Download Expo Go on your Android Device then run  'npm start'

### Usage
## Adding a Task
- Open the app.
- Press the "Add New Task" button.
- Enter the task in the input field.
- Press "Add" to add the task.
The task will appear in the list.

## Deleting a Task
Open the app.
Swipe left on the task you want to delete.
Press the delete button.

### Components
TodoItem: Renders a single to-do item with a delete button.
TodoInput: Input component for adding new tasks.
DisplayImage: Displays an image when there are no tasks.
Header: Header component with a title.

### Styling
Styling is done using React Native's StyleSheet.create for efficient performance. Common styles are centralized in the styles object.
