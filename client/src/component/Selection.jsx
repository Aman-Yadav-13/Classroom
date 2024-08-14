import { useNavigate } from "react-router-dom";

const Selection = () => {
    const navigate = useNavigate();

    const handleChange = (event) => {
        navigate(`/login/${event.target.value}`);
    }

    return (
        <div>
            <select className="select select-ghost w-full max-w-xs" onChange={handleChange}>
                <option disabled selected>Select role to sign in</option>
                <option>Principal</option>
                <option>Teacher</option>
                <option>Student</option>
            </select>
        </div>
    )
}

export default Selection;