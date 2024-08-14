import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import StudentListEntry from "./StudentListEntry";
import { useParams } from "react-router-dom";

const StudentList = (props) => {
    // State to store the list of students
    const [list, setlist] = useState(null);
    // Variable to keep track of the serial number (sno) for the table rows
    let sno = 0;

    // useEffect hook to fetch the student list when the component mounts
    useEffect(() => {
        const getList = async () => {
            try {
                // Fetch the student list based on the user's role (Principal, Student, Teacher)
                if (props.role == "Principal") {
                    console.log('principal', props.role, props.id);
                    const response = await axios.get('https://classroom-ozmt.onrender.com/api/student-list');
                    console.log(response);
                    // Update the state with the fetched student list
                    setlist(response.data.data);
                } else if (props.role == 'Student') {
                    console.log("student", props.role, props.id);
                    const response = await axios.get(`https://classroom-ozmt.onrender.com/api/student/student-list`, { params: { id: props.id } });
                    console.log(response);
                    // Update the state with the fetched student list
                    setlist(response.data.data);
                } else {
                    console.log("teacher", props.role, props.id);
                    const response = await axios.get('https://classroom-ozmt.onrender.com/api/teacher/student-list', { params: { id: props.id } });
                    console.log(response);
                    // Update the state with the fetched student list
                    setlist(response.data.data);
                }
            } catch (err) {
                console.log('Error : ', err);
            }
        };

        // Call the getList function to fetch the student list
        getList();
    }, []); // Empty dependency array ensures this runs only once after the initial render

    return (
        <div>
            {/* Show a loading spinner if the student list is not yet available */}
            {list == null ? <Loading />
                :
                <>
                    <div className="space-y-2 text-center mt-11">
                        <h2 className="text-3xl font-bold">Student's List</h2>
                    </div>
                    <div className="flex justify-center m-10">
                        <div className="overflow-x-auto w-[80%] shadow-2xl bg-neutral text-neutral-content">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Assigned Classroom Id</th>
                                        <th>Assigned Teacher Id</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Map over the list of students and render each one as a row in the table */}
                                    {list.map((data) => {
                                        console.log('DATA : ', data);
                                        sno++;
                                        return <StudentListEntry data={data} key={sno} sno={sno} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default StudentList;
