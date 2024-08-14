import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const DeleteTeacher = () => {
    const [email, setemail] = useState();
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const { id, role } = useParams();

    async function handleClick(){
        setloading(!loading);
        console.log(email);

        try{
            const response = await axios.delete('https://classroom-ozmt.onrender.com/api/delete-teacher', {data : {id : email}});

            alert('Teacher Deleted Successfully...');
            navigate(`/principal/${id}`);
        }catch(err){
            console.log('Error occure while deleting teacher : ', err);
            alert('Teacher not deleted please try again...')
            setloading(!loading);
            navigate(`teacher/delete/principal/${id}`)
        }
    }

    return (
        <>
        { loading ? <Loading /> :
        <div className="flex justify-center items-center h-screen">
            <div className="artboard h-[30%] w-[20%] bg-base-300 flex items-center flex-wrap justify-center m-[5%] rounded-lg">
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
                <input type="text" className="grow" placeholder="Teacher Id" onChange={(event) => setemail(event.target.value)}/>
            </label>
            <div>
                    <button className="btn hover:bg-primary text-white" onClick={handleClick}>Delete Teacher</button>
                </div>
        </div>
        
        </div>}
        </>
    )
}

export default DeleteTeacher;