import { useParams, Link, useNavigate } from "react-router-dom";
import StudentList from "./StudentList";
import { useState } from "react";

const TeacherView = () => {
    // Extract 'id' and 'role' from the URL parameters
    const { id, role } = useParams();
    // State to control which view is displayed
    const [view, setview] = useState('Student');
    const navigate = useNavigate();

    // Function to handle view changes
    const handleView = (updatedView) => {
        setview(updatedView);
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 pl-4 shadow">
                            {/* Navigation menu items */}
                            <li className="m-1 hover:scale-110 transition-transform" onClick={() => handleView('Student')}><p>Student's List</p></li>
                            <li className="m-1 hover:scale-110 transition-transform" onClick={() => navigate('/')}><p>Log Out</p></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    {/* Display a welcome message with the teacher's ID */}
                    <a className="btn btn-ghost text-xl">Welcome, {id}</a>
                </div>
                <div className="navbar-end">
                <div className="flex-none shadow-2xl mr-8">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                        <summary>Task</summary>
                        <ul className="bg-primary rounded-t-none p-2 z-10">
                            {/* Task options for the teacher */}
                            <li className="hover:scale-110 transition-transform"><p>Add Student</p></li>
                            <li className="hover:scale-110 transition-transform"><p>Update Student</p></li>
                            <li className="hover:scale-110 transition-transform"><p>Delete Student</p></li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            {/* Render the StudentList component, passing the 'role' and 'id' as props */}
            <StudentList role={role} id={id}/>
        </div>
    )
}

export default TeacherView;
