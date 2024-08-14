import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const DeleteClassroom = () => {
    // State to hold the email input value
    const [email, setemail] = useState();
    // State to manage the loading spinner
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const { id, role } = useParams();

    // Function to handle the click event for deleting a classroom
    async function handleClick(){
        // Toggle loading state
        setloading(!loading);
        console.log(email);

        try{
            // Send DELETE request to the server
            const response = await axios.delete('https://classroom-ozmt.onrender.com/api/delete-classroom', { data : { id : email } });

            // Alert user on successful deletion and navigate to the principal page
            alert('Classroom Deleted Successfully...');
            navigate(`/principal/${id}`);
        }catch(err){
            // Log error and alert user on failure
            console.log('Error occurred while deleting classroom : ', err);
            alert('Classroom not deleted, please try again...');
            // Reset loading state and navigate to the delete page
            setloading(!loading);
            navigate(`classroom/delete/principal/${id}`);
        }
    }

    return (
        <>
        { loading ? <Loading /> :
        <div className="flex justify-center items-center h-screen">
            <div className="artboard h-[30%] w-[20%] bg-base-300 flex items-center flex-wrap justify-center m-[5%] rounded-lg">
                {/* Input field for classroom ID */}
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
                    <input type="text" className="grow" placeholder="Classroom Id" onChange={(event) => setemail(event.target.value)}/>
                </label>
                <div>
                    {/* Button to trigger the delete operation */}
                    <button className="btn hover:bg-primary text-white" onClick={handleClick}>Delete Classroom</button>
                </div>
            </div>
        </div>}
        </>
    )
}

export default DeleteClassroom;
