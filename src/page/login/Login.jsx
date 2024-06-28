import React, { useState } from "react";
import axios from "../../api/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slice/authSlice";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    UserName: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("/auth/sign-in", formData);
      localStorage.setItem("x-auth-token", res.data.data.token);
      localStorage.setItem("user-data", JSON.stringify(res.data.data.user));

      dispatch(setToken(res.data.data.token));
      dispatch(setUser(res.data.data.user));

      navigate("/auth/admin");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            <form onSubmit={handleLogin} className="login__form">
              <input
                required
                className="login__input"
                value={formData.UserName}
                onChange={handleChange}
                name="UserName"
                type="text"
                placeholder="UserName"
              />
              <input
                required
                className="login__input"
                value={formData.password}
                onChange={handleChange}
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
