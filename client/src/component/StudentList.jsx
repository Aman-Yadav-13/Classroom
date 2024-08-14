import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import StudentListEntry from "./StudentListEntry";
import { useParams } from "react-router-dom";

const StudentList = (props) => {
    const [list, setlist] = useState(null);
    let sno = 0;

    useEffect(() => {
        const getList = async () => {
            try{
                if(props.role == "Principal"){
                    console.log('principal', props.role, props.id);
                    const response = await axios.get('http://localhost:3000/api/student-list');
                    console.log(response);
                    setlist(response.data.data);
                }else if(props.role == 'Student'){
                    console.log("student", props.role, props.id);
                    const response = await axios.get(`http://localhost:3000/api/student/student-list`,{params : {id : props.id}});
                    console.log(response);
                    setlist(response.data.data);
                }else{
                    console.log("teacher", props.role, props.id);
                    const response = await axios.get('http://localhost:3000/api/teacher/student-list', {params : {id : props.id}});
                    console.log(response);
                    setlist(response.data.data);
                }
            }catch(err){
                console.log('Error : ', err);
            }
        }

        getList();
        },[]
    )

    return (
        <div>
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
                            {list.map((data) => {
                                console.log('DATA : ', data);
                                sno++;
                                return <StudentListEntry data={data} key={sno} sno={sno}/>
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