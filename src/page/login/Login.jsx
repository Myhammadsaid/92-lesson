import React, { useState, useEffect } from "react";
import { usePostSignInMutation } from "../../context/api/UserApi";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [UserName, setUsername] = useState("john32");
  const [password, setPassword] = useState("12345678");
  const navigate = useNavigate();
  const [signUp, { data, isLoading, isSuccess }] = usePostSignInMutation();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("x-auth-token", data.data.token);
      localStorage.setItem("user-data", JSON.stringify(data.data.user));
      navigate("/auth/admin");
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({
      UserName,
      password,
    });
  };

  return (
    <div>
      <section className="login">
        <div className="container">
          <div className="login__style">
            <img
              width={500}
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt="facebook"
            />
            <form onSubmit={handleSubmit} className="login__form">
              <input
                required
                className="login__input"
                value={UserName}
                onChange={(e) => setUsername(e.target.value)}
                name="UserName"
                type="text"
                placeholder="UserName"
              />
              <input
                required
                className="login__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Password"
              />
              <button className="login__btn" type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>
              <a href="#" className="login__link">
                Forgot your password?
              </a>
              <hr />
              <button className="login__create__btn">
                Create a new account
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
