import { useEffect, useState } from "react";
import ClassroomCard from "./ClassroomCard";
import axios from "axios";

const Classroom = () => {
    const [list, setlist] = useState([]);

    useEffect(() => {
        async function getClassooms() {
            try{
                const response = await axios.get('https://classroom-ozmt.onrender.com/api/classroom-list');

                setlist(response.data.data);
            }catch(err){
                console.log('Error in getting classroom list : ', err);
            }
        }

        getClassooms()
    }, [])

    return (
        <div>
            <div className="space-y-2 text-center mt-11">
                <h2 className="text-3xl font-bold">Classroom's List</h2>
            </div>
            <div className="flex flex-wrap mt-11 justify-center">
                {list.map((data) => {
                    return <ClassroomCard data={data} key={data._id} />
                })} 
            </div>
        </div>
    )
}

export default Classroom;
