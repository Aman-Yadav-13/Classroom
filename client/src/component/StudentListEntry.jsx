const StudentListEntry = (props) => {
    // Log the student data to the console for debugging purposes
    console.log(props.data);

    return (
        <tr>
            {/* Render the serial number for the student */}
            <th>{props.sno}</th>
            {/* Render the student's ID */}
            <td>{props.data.id}</td>
            {/* Render the student's name */}
            <td>{props.data.name}</td>
            {/* Render the ID of the classroom assigned to the student */}
            <td>{props.data.classroomid}</td>
            {/* Render the ID of the teacher assigned to the student */}
            <td>{props.data.teacherid}</td>
        </tr>
    );
}

export default StudentListEntry;
