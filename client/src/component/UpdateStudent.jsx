import { useState } from "react";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateStudent = () => {
    const [email, setemail] = useState(); // State for storing student's email
    const [name, setname] = useState(); // State for storing student's name
    const [password, setpassword] = useState(); // State for storing student's password
    const [classroomid, setclassroomid] = useState(); // State for storing student's classroom ID
    const [teacherid, setteacherid] = useState(); // State for storing student's teacher ID
    const [loading, setloading] = useState(false); // State to handle loading status
    const navigate = useNavigate(); // Hook for navigation
    const { id } = useParams(); // Extracts the `id` parameter from the URL

    // Function to handle the click event for updating the student
    const handleClick = async () => {
        setloading(!loading); // Toggle loading state
        console.log('inside handle click');
        try{
            // Send PUT request to update the student with the provided details
            const response = await axios.put('https://classroom-ozmt.onrender.com/api/update-student', {
                id : email,
                name : name,
                password : password,
                classroomid : classroomid,
                teacherid : teacherid
            })

            alert('Student updated successfully...');
            navigate(`/principal/${id}`); // Redirect to the principal view
        }catch(err){
            console.log('Student not updated : ', err);
            alert('Student not updated try again...');
            setloading(!loading); // Toggle loading state back
        }
    }

    return (
        <div>
        {loading ? <Loading /> : // Show loading component if `loading` is true
        <div className="flex justify-center items-center h-screen">
            <div className="artboard h-[90%] w-[20%] bg-base-300 flex items-center flex-wrap justify-center m-[5%] rounded-lg">
                {/* Input for student's email */}
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
                {/* Input for student's name */}
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
                {/* Input for teacher's ID */}
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
                {/* Input for classroom's ID */}
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
                {/* Input for password */}
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
                <div>
                    {/* Button to trigger the update */}
                    <button className="btn hover:bg-primary text-white" onClick={handleClick}>Update Student</button>
                </div>
            </div>
        </div>}
        </div>
    )
}

export default UpdateStudent;
