import { useState } from "react";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddClassroom = () => {
    // State variables
    const [email, setemail] = useState(); // Email (Classroom ID) state
    const [name, setname] = useState(); // Name state
    const [loading, setloading] = useState(false); // Loading state
    const navigate = useNavigate(); // Hook to programmatically navigate
    const { id } = useParams(); // Hook to get URL parameters

    // Function to handle the button click
    const handleClick = async () => {
        setloading(true); // Set loading to true when the request starts
        console.log('inside handle click');
        try {
            // Make a POST request to add a classroom
            const response = await axios.post('https://classroom-ozmt.onrender.com/api/add-classroom', {
                id: email, // Send the email as the classroom ID
                name: name, // Send the name
            });

            // Notify the user of success and navigate
            alert('Classroom added successfully...');
            navigate(`/principal/${id}`);
        } catch (err) {
            // Handle errors
            console.log('Classroom not added : ', err);
            alert('Classroom not added, try again...');
        } finally {
            setloading(false); // Set loading to false after the request completes
        }
    }

    return (
        <div>
        {loading ? <Loading /> : // Show loading component if loading is true
        <div className="flex justify-center items-center h-screen">
            <div className="artboard h-[50%] w-[20%] bg-base-300 flex items-center flex-wrap justify-center m-[5%] rounded-lg">
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
                <input type="text" className="grow" placeholder="Classroom's id" onChange={(event) => setemail(event.target.value)}/>
                </label>
                {/* Input for Classroom Name */}
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Name" onChange={(event) => setname(event.target.value)}/>
                </label>
                {/* Button to trigger adding a classroom */}
                <div>
                    <button className="btn hover:bg-primary text-white" onClick={handleClick}>Add Classroom</button>
                </div>
            </div>
        </div>}
        </div>
    )
}

export default AddClassroom;
