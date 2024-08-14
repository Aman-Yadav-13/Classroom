# Classroom Project

## Overview

The Classroom project is a full-stack application designed for managing classrooms, teachers, and students. It includes a frontend built with React and a backend built with Express.js and MongoDB. The application supports authentication, CRUD operations for teachers, students, and classrooms, and is deployed on Vercel and Render.

## Features

- **Authentication**: Login functionality for principals, teachers, and students.
- **Teacher Management**: Add, update, delete, and list teachers.
- **Student Management**: Add, update, delete, and list students.
- **Classroom Management**: Add, update, delete, and list classrooms.
- **Student-Teacher Relationship**: View students associated with a particular teacher and vice versa.

## Tech Stack

- **Frontend**: React, React Router, DaisyUI
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Deployment**: Vercel (Frontend), Render (Backend)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database

### Frontend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Aman-Yadav-13/Classroom.git
    ```

2. Navigate to the `client` directory:

    ```bash
    cd Classroom/client
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the `server` directory:

    ```bash
    cd Classroom/server
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    node app.js
    ```

## API Endpoints

### Authentication

- **POST** `/api/login/Principal`: Login endpoint for principals.
- **POST** `/api/login/Student`: Login endpoint for students.
- **POST** `/api/login/Teacher`: Login endpoint for teachers.

### Teacher Management

- **GET** `/api/teacher-list`: Retrieve the list of teachers.
- **POST** `/api/add-teacher`: Add a new teacher.
- **PUT** `/api/update-teacher`: Update an existing teacher.
- **DELETE** `/api/delete-teacher`: Delete a teacher.

### Student Management

- **GET** `/api/student-list`: Retrieve the list of students.
- **POST** `/api/add-student`: Add a new student.
- **PUT** `/api/update-student`: Update an existing student.
- **DELETE** `/api/delete-student`: Delete a student.

### Classroom Management

- **GET** `/api/classroom-list`: Retrieve the list of classrooms.
- **POST** `/api/add-classroom`: Add a new classroom.
- **PUT** `/api/update-classroom`: Update an existing classroom.
- **DELETE** `/api/delete-classroom`: Delete a classroom.

### Student-Teacher Relationship

- **GET** `/api/teacher/student-list`: Retrieve students for a specific teacher.
- **GET** `/api/student/student-list`: Retrieve students for a specific student.

## Deployment

- **Frontend**: Deployed on Vercel. [View on Vercel](https://classroom-coral.vercel.app)
- **Backend**: Deployed on Render. [View on Render](https://classroom-ozmt.onrender.com)

## Contributing

Feel free to open issues or submit pull requests if you would like to contribute to this project. Please make sure to follow the coding standards and include tests where applicable.

## Contact

For any questions or suggestions, please contact me at [aman13092003@gmail.com](mailto:aman13092003@gmail.com).

## Acknowledgments

- Thanks to the open-source community for providing the tools and resources used in this project.
