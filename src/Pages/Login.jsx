import React, {  useContext, useState } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { UserContext } from "../UserContext";

const Login = () => {
  const { user,login,logOut } = useContext(UserContext);

  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = login(input.email, input.password);

    if (res.success) {
      Swal.fire({
        title: "Successfully Login!",
        icon: "success",
        time: 1500,
        showConfirmButton: false,
      });
      navigate("")
    }else{
        setError(res.massage)
        toast.error(res.massage)
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={input.email}
                onChange={e=>setInput({...input,email: e.target.value})}
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                 value={input.password  }
                onChange={e=>setInput({...input,password: e.target.value})}
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              {
                user?.email?(
                    <button onClick={logOut} className="btn btn-neutral mt-4">Login Out</button>
                ):(
                    <button className="btn btn-neutral mt-4">Login</button>
                )
              }
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
