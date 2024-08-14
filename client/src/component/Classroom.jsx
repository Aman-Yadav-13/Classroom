import { useEffect, useState } from "react";
import ClassroomCard from "./ClassroomCard";
import axios from "axios";

const Classroom = () => {
    // State to hold the list of classrooms
    const [list, setlist] = useState([]);

    // useEffect hook to fetch classroom data on component mount
    useEffect(() => {
        async function getClassooms() {
            try {
                // Fetching the classroom list from the API
                const response = await axios.get('https://classroom-ozmt.onrender.com/api/classroom-list');

                // Updating the state with the fetched data
                setlist(response.data.data);
            } catch (err) {
                // Logging error if the request fails
                console.log('Error in getting classroom list : ', err);
            }
        }

        // Call the function to fetch classrooms
        getClassooms()
    }, []) // Empty dependency array means this effect runs once on mount

    return (
        <div>
            {/* Header section */}
            <div className="space-y-2 text-center mt-11">
                <h2 className="text-3xl font-bold">Classroom's List</h2>
            </div>
            
            {/* Displaying a list of classrooms */}
            <div className="flex flex-wrap mt-11 justify-center">
                {list.map((data) => {
                    return <ClassroomCard data={data} key={data._id} />
                })} 
            </div>
        </div>
    )
}

export default Classroom;
