const ClassroomCard = (props) => {
    return (
        <div className="card bg-neutral text-neutral-content w-96 shadow-xl m-6">
            <div className="card-body">
                {/* Title of the card, displaying the classroom name */}
                <h2 className="card-title">{props.data.name}</h2>

                {/* Displaying the classroom ID */}
                <p>{props.data.id}</p>

                {/* Actions section of the card with a button */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Time Table</button>
                </div>
            </div>
        </div>
    )
}

export default ClassroomCard;
