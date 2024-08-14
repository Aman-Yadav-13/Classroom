import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from './Loading';
import axios from 'axios';

const Login = () => {
    // Extracting the 'role' parameter from the URL
    const { role } = useParams();
    // useNavigate hook to programmatically navigate to different routes
    const navigate = useNavigate();
    // State variables to manage the id, password, and loading state
    const [id, setid] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);

    // Function to handle the login click event
    const handleClick = async () => {
        setloading(!loading); // Toggle loading state

        try {
            // Sending a POST request to the login API with id and password
            const response = await axios.post(`https://classroom-ozmt.onrender.com/api/login/${role}`, {
                id: id,
                password: password
            });

            // Navigate to the respective role's dashboard upon successful login
            navigate(`/${role}/${id}`);
        } catch (err) {
            // If a 400 error occurs, navigate to the invalid page
            if (err.response.status === 400) {
                navigate(`/invalid/${role}`);
            }
            
            console.log('Error : ', err);
        }
    };

    // Handler for the id input change event
    const handleChangeId = (event) => {
        setid(event.target.value);
    };

    // Handler for the password input change event
    const handleChangePassword = (event) => {
        setpassword(event.target.value);
    };

    return (
        <div>
            {/* Show Loading component while loading, otherwise show the login form */}
            {loading ? <Loading />
                :
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Log in now to access your classroom!</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            {/* Login form */}
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">{role} Id</span>
                                    </label>
                                    {/* Input field for id */}
                                    <input type="text" placeholder="Enter Your Id" className="input input-bordered" required onChange={handleChangeId} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    {/* Input field for password */}
                                    <input type="password" placeholder="Enter Your Password" className="input input-bordered" required onChange={handleChangePassword} />
                                </div>
                                <div className="form-control mt-6">
                                    {/* Login button */}
                                    <button className="btn btn-primary" onClick={handleClick}>Login as {role}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Login;
