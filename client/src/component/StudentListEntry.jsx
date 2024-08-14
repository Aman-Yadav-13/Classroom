const StudentListEntry = (props) => {
    console.log(props.data)
    return(
        <tr>
            <th>{props.sno}</th>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.classroomid}</td>
            <td>{props.data.teacherid}</td>
        </tr>
    )
}

export default StudentListEntry;