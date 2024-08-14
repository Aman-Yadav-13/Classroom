import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from './Loading'
import axios from 'axios';

const Login = () => {
    const { role } = useParams();
    const navigate = useNavigate();
    const [id, setid] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);

    const handleClick = async () => {
        setloading(!loading);

        try{
            const response = await axios.post(`https://classroom-ozmt.onrender.com/api/login/${role}`, {
                id : id,
                password : password
            })

            navigate(`/${role}/${id}`);
        }catch(err){
            if(err.response.status == 400){
                navigate(`/invalid/${role}`)
            }
            
            console.log('Error : ', err);
        }
    }

    const handleChangeId = (event) => {
        setid(event.target.value);
    }
    const handleChangePassword = (event) => {
        setpassword(event.target.value);
    }

    return (
        <div>
        {loading ? <Loading />
            :
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Log in now to access your classroom!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">{role} Id</span>
                        </label>
                        <input type="text" placeholder="Enter Your Id" className="input input-bordered" required onChange={handleChangeId}/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered" required onChange={handleChangePassword}/>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary" onClick={handleClick}>Login as {role}</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Login;