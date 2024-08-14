import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import TeacherListEntry from "./TeacherListEntry";

const TeacherList = () => {
    // State to store the list of teachers
    const [list, setlist] = useState([]);
    let sno = 0; // Counter for serial numbers

    useEffect(() => {
        // Function to fetch the list of teachers from the API
        const getList = async () => {
            try{
                // Make a GET request to fetch the teacher list
                const response = await axios.get('https://classroom-ozmt.onrender.com/api/teacher-list');
                console.log(response);
                // Update the state with the fetched data
                setlist(response.data.data);
            }catch(err){
                console.log('Error : ', err);
            }
        }

        getList();
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    return (
        <div>
            {list.length == 0 ? 
                // Show loading indicator while data is being fetched
                <Loading /> 
                :
                <>
                <div className="space-y-2 text-center mt-11">
                    <h2 className="text-3xl font-bold">Teacher's List</h2>
                </div>
                <div className="flex justify-center m-10">
                    <div className="overflow-x-auto w-[80%] shadow-2xl bg-neutral text-neutral-content">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Assigned Classroom</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map((data) => {
                                    sno++;
                                    // Render a row for each teacher in the list
                                    return <TeacherListEntry data={data} key={sno} sno={sno}/>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                </>
            }
        </div>
    )
}

export default TeacherList;
