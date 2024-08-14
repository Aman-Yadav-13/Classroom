const TeacherListEntry = (props) => {
    return(
        <tr>
            {/* Display the serial number for the teacher */}
            <th>{props.sno}</th>
            {/* Display the teacher's ID */}
            <td>{props.data.id}</td>
            {/* Display the teacher's name */}
            <td>{props.data.name}</td>
            {/* Display the ID of the classroom assigned to the teacher */}
            <td>{props.data.classroomid}</td>
        </tr>
    )
}

export default TeacherListEntry;
