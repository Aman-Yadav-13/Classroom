import { useState } from "react";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
    // State variables
    const [email, setemail] = useState(); // Student's email state
    const [name, setname] = useState(); // Student's name state
    const [password, setpassword] = useState(); // Student's password state
    const [classroomid, setclassroomid] = useState(); // Classroom ID state
    const [teacherid, setteacherid] = useState(); // Teacher ID state
    const [loading, setloading] = useState(false); // Loading state
    const navigate = useNavigate(); // Hook to programmatically navigate
    const { role, id } = useParams(); // Hook to get URL parameters

    // Function to handle the button click
    const handleClick = async () => {
        setloading(true); // Set loading to true when the request starts
        console.log('inside handle click');
        try {
            // Make a POST request to add a student
            const response = await axios.post('https://classroom-ozmt.onrender.com/api/add-student', {
                id: email, // Send the email as the student's ID
                name: name, // Send the student's name
                password: password, // Send the student's password
                classroomid: classroomid, // Send the classroom ID
                teacherid: teacherid // Send the teacher ID
            });

            // Notify the user of success and navigate
            alert('Student added successfully...');
            navigate(`/principal/${id}`);
            
        } catch (err) {
            // Handle errors
            console.log('Student not added : ', err);
            alert('Student not added, try again...');
        } finally {
            setloading(false); // Set loading to false after the request completes
        }
    }

    return (
        <div>
        {loading ? <Loading /> : // Show loading component if loading is true
        <div className="flex justify-center items-center h-screen">
            <div className="artboard h-[90%] w-[20%] bg-base-300 flex items-center flex-wrap justify-center m-[5%] rounded-lg">
                {/* Input for Student Email */}
                <label className="input input-bordered flex items-center gap-2 mt-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Student's Email" onChange={(event) => setemail(event.target.value)}/>
                </label>
                {/* Input for Student Name */}
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Student's Name" onChange={(event) => setname(event.target.value)}/>
                </label>
                {/* Input for Teacher ID */}
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Teacher's Id" onChange={(event) => setteacherid(event.target.value)}/>
                </label>
                {/* Input for Classroom ID */}
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Classroom's Id" onChange={(event) => setclassroomid(event.target.value)}/>
                </label>
                {/* Input for Password */}
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder="Password" onChange={(event) => setpassword(event.target.value)}/>
                </label>
                {/* Button to trigger adding a student */}
                <div>
                    <button className="btn hover:bg-primary text-white" onClick={handleClick}>Add Student</button>
                </div>
            </div>
        </div>}
        </div>
    )
}

export default AddStudent;
