import { useState } from "react";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddClassroom = () => {
    const [email, setemail] = useState();
    const [name, setname] = useState();
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleClick = async () => {
        setloading(!loading);
        console.log('inside handle click');
        try{
            const response = await axios.post('https://classroom-ozmt.onrender.com/api/add-classroom', {
                id : email,
                name : name,
            })

            alert('Classroom added successfully...');
            navigate(`/principal/${id}`);
        }catch(err){
            console.log('Classroom not added : ', err);
            alert('Classroom not added try again...');
            setloading(!loading);
        }
    }

    return (
        <div>
        {loading ? <Loading /> :
        <div className="flex justify-center items-center h-screen">
            <div className="artboard h-[50%] w-[20%] bg-base-300 flex items-center flex-wrap justify-center m-[5%] rounded-lg">
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
                    <button className="btn hover:bg-primary text-white" onClick={handleClick}>Add Classroom</button>
                </div>
            </div>
        </div>}
        </div>
    )
}

export default AddClassroom;