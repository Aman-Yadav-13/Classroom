import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentList from "./StudentList";
import TimeTable from "./TimeTable";

const StudentView = () => {
    // Extract the student ID from the URL parameters
    const { id } = useParams();
    // State to manage the current view: either 'Student' or 'TimeTable'
    const [view, setview] = useState('Student');
    // Hook for navigation
    const navigate = useNavigate();

    // Function to update the current view
    const handleView = (updatedView) => {
        setview(updatedView);
    }

    return (
        <div>
            <div>
                {/* Navbar for the StudentView component */}
                <div className="navbar bg-primary text-primary-content">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                {/* Hamburger icon for the dropdown menu */}
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
                            {/* Dropdown menu items */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 pl-4 shadow">
                                {/* Menu item for switching to the Student List view */}
                                <li className="m-1 hover:scale-110 transition-transform" onClick={() => handleView('Student')}><p>Student's List</p></li>
                                {/* Menu item for logging out */}
                                <li className="m-1 hover:scale-110 transition-transform" onClick={() => navigate('/')}><p>Log Out</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        {/* Welcome message showing the student ID */}
                        <a className="btn btn-ghost text-xl">Welcome, {id}</a>
                    </div>
                    <div className="navbar-end">
                    </div>
                </div>

                {/* Conditional rendering based on the current view */}
                {view == 'Student' ? <StudentList role={'Student'} id={id}/> : <TimeTable />}
            </div>
        </div>
    )
}

export default StudentView;
