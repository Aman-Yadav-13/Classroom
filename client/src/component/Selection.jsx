import { useNavigate } from "react-router-dom";

const Selection = () => {
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Handle the change event when a role is selected
    const handleChange = (event) => {
        // Navigate to the login page for the selected role
        navigate(`/login/${event.target.value}`);
    };

    return (
        <div>
            {/* Dropdown select for choosing a role to sign in */}
            <select className="select select-ghost w-full max-w-xs" onChange={handleChange}>
                {/* Disabled option prompting the user to select a role */}
                <option disabled selected>Select role to sign in</option>
                {/* Options for different roles */}
                <option>Principal</option>
                <option>Teacher</option>
                <option>Student</option>
            </select>
        </div>
    );
};

export default Selection;
