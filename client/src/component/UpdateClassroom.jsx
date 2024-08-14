import { useState } from "react";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateClassroom = () => {
    const [email, setemail] = useState();
    const [name, setname] = useState();
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    // Function to handle the click event for updating the classroom
    const handleClick = async () => {
        setloading(!loading); // Toggle loading state
        console.log('inside handle click');
        try{
            // Send PUT request to update the classroom
            const response = await axios.put('https://classroom-ozmt.onrender.com/api/update-classroom', {
                id : email,
                name : name,
            })

            alert('Classroom updated successfully...');
            navigate(`/principal/${id}`); // Redirect to the principal view
        }catch(err){
            console.log('Classroom not updated : ', err);
            alert('Classroom not updated try again...');
            setloading(!loading); // Toggle loading state back
        }
    }

    return (
        <div>
        {loading ? <Loading /> :
        <div className="flex justify-center items-center h-screen">
            <div className="artboard h-[50%] w-[20%] bg-base-300 flex items-center flex-wrap justify-center m-[5%] rounded-lg">
                {/* Input for classroom id */}
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
                {/* Input for classroom name */}
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
                <div>
                    {/* Button to trigger the update */}
                    <button className="btn hover:bg-primary text-white" onClick={handleClick}>Update Classroom</button>
                </div>
            </div>
        </div>}
        </div>
    )
}

export default UpdateClassroom;
