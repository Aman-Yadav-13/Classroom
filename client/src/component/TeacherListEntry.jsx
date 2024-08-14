const TeacherListEntry = (props) => {
    return(
        <tr>
            <th>{props.sno}</th>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.classroomid}</td>
        </tr>
    )
}

export default TeacherListEntry;