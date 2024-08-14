import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import TeacherListEntry from "./TeacherListEntry";

const TeacherList = () => {
    const [list, setlist] = useState([]);
    let sno = 0;

    useEffect(() => {
        const getList = async () => {
            try{
                const response = await axios.get('http://localhost:3000/api/teacher-list');
                console.log(response);
                setlist(response.data.data);
            }catch(err){
                console.log('Error : ', err);
            }
        }

        getList();
        },[]
    )

    return (
        <div>
            {list.length == 0 ? <Loading /> 
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
                                return <TeacherListEntry data={data} key={sno} sno={sno}/>
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            </>}
        </div>
    )
}

export default TeacherList;