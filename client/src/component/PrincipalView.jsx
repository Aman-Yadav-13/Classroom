import { useParams, Link, useNavigate } from "react-router-dom";
import TeacherList from "./TeacherList";
import StudentList from "./StudentList";
import Classroom from "./Classroom";
import { useState } from "react";

const PrincipalView = () => {
    // Extracting the 'id' parameter from the URL
    const { id } = useParams();
    // useState hook to manage the view state, initializing it to 'Teacher'
    const [view, setview] = useState('Teacher');
    // useNavigate hook to programmatically navigate to different routes
    const navigate = useNavigate();

    // Function to handle the view change based on the menu item clicked
    const handleView = (updatedView) => {
        setview(updatedView);
    };

    return (
        <div>
            {/* Navbar section */}
            <div className="navbar bg-primary text-primary-content">
                <div className="navbar-start">
                    {/* Dropdown menu for different views */}
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
                        {/* Dropdown content for navigation */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 pl-4 shadow">
                            {/* Items for navigating between Teacher, Student, and Classroom views */}
                            <li className="m-1 hover:scale-110 transition-transform" onClick={() => handleView('Teacher')}><p>Teacher's List</p></li>
                            <li className="m-1 hover:scale-110 transition-transform" onClick={() => handleView('Student')}><p>Student's List</p></li>
                            <li className="m-1 hover:scale-110 transition-transform" onClick={() => handleView('Classroom')}><p>Classrooms</p></li>
                            {/* Log Out option */}
                            <li className="m-1 hover:scale-110 transition-transform" onClick={() => navigate('/')}><p>Log Out</p></li>
                        </ul>
                    </div>
                </div>
                {/* Centered title displaying the principal's id */}
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Welcome, {id}</a>
                </div>
                <div className="navbar-end">
                    {/* Dropdown menu for various tasks like adding, updating, and deleting students, teachers, and classrooms */}
                    <div className="flex-none shadow-2xl mr-8">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary>Task</summary>
                                    <ul className="bg-primary rounded-t-none p-2 z-10">
                                        <Link to={`/student/add/principal/${id}`}><li className="hover:scale-110 transition-transform"><p>Add Student</p></li></Link>
                                        <Link to={`/teacher/add/principal/${id}`}><li className="hover:scale-110 transition-transform"><p>Add Teacher</p></li></Link>
                                        <Link to={`/classroom/add/principal/${id}`}><li className="hover:scale-110 transition-transform"><p>Add Classroom</p></li></Link>
                                        <Link to={`/student/update/principal/${id}`}><li className="hover:scale-110 transition-transform"><p>Update Student</p></li></Link>
                                        <Link to={`/teacher/update/principal/${id}`}><li className="hover:scale-110 transition-transform"><p>Update Teacher</p></li></Link>
                                        <Link to={`/classroom/update/principal/${id}`}><li className="hover:scale-110 transition-transform"><p>Update Classroom</p></li></Link>
                                        <Link to={`/student/delete/principal/${id}`}><li className="hover:scale-110 transition-transform"><p>Delete Student</p></li></Link>
                                        <Link to={`/teacher/delete/principal/${id}`}><li className="hover:scale-110 transition-transform"><p>Delete Teacher</p></li></Link>
                                        <Link to={`/classroom/delete/principal/${id}`}><li className="hover:scale-110 transition-transform"><p>Delete Classroom</p></li></Link>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Conditionally rendering the component based on the current view */}
            {view === 'Teacher' ? <TeacherList /> : view === 'Student' ? <StudentList role="Principal" id={id}/> : <Classroom />}
        </div>
    );
}

export default PrincipalView;
