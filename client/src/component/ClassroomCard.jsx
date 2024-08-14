const ClassroomCard = (props) => {
    return (
            <div className="card bg-neutral text-neutral-content w-96 shadow-xl m-6">
                <div className="card-body">
                    <h2 className="card-title">{props.data.name}</h2>
                    <p>{props.data.id}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Time Table</button>
                    </div>
                </div>
            </div>
    )
}

export default ClassroomCard;