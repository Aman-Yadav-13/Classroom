import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Identification from "./component/Identification";
import Login from "./component/Login";
import PrincipalView from "./component/PrincipalView"
import StudentView from "./component/StudentView"
import TeacherView from "./component/TeacherView";
import Invalid from "./component/Invalid";
import Error from "./component/Error";
import AddTeacher from "./component/AddTeacher"
import AddStudent from "./component/AddStudent"
import AddClassroom from "./component/AddClassroom"
import UpdateStudent from "./component/UpdateStudent";
import UpdateTeacher from "./component/UpdateTeacher";
import UpdateClassroom from "./component/UpdateClassroom";
import DeleteClassroom from "./component/DeleteClassroom";
import DeleteTeacher from "./component/DeleteTeacher";
import DeleteStudent from "./component/DeleteStudent";

// Create a root element for rendering the React app
const root = createRoot(document.getElementById('root'));

// Define the routes for the application
const router = createBrowserRouter([
    {
        path: '/',
        element: <Identification />
    },
    {
        path: '/login/:role',
        element: <Login />
    },
    {
        path: '/principal/:id',
        element: <PrincipalView />
    },
    {
        path: '/teacher/:id',
        element: <TeacherView />
    },
    {
        path: '/student/:id',
        element: <StudentView />
    },
    {
        path: '/invalid/:role',
        element: <Invalid />
    },
    {
        path: '/teacher/add/:role/:id',
        element: <AddTeacher />
    },
    {
        path: '/student/add/:role/:id',
        element: <AddStudent />
    },
    {
        path: '/classroom/add/:role/:id',
        element: <AddClassroom />
    },
    {
        path: '/student/update/:role/:id',
        element: <UpdateStudent />
    },
    {
        path: '/teacher/update/:role/:id',
        element: <UpdateTeacher />
    },
    {
        path: '/classroom/update/:role/:id',
        element: <UpdateClassroom />
    },
    {
        path: '/classroom/delete/:role/:id',
        element: <DeleteClassroom />
    },
    {
        path: '/teacher/delete/:role/:id',
        element: <DeleteTeacher />
    },
    {
        path: '/student/delete/:role/:id',
        element: <DeleteStudent />
    },
    {
        path: "/*",
        element: <Error />
    }
])

// Render the RouterProvider with the defined routes
root.render(<RouterProvider router={router} />)
