import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../context/slice/authSlice";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../context/api/UserApi";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Admin.css";

const Admin = () => {
  const [toggle, setToggle] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [deleteUser] = useDeleteUserMutation();
  const { data } = useGetUsersQuery();
  let dispatch = useDispatch();

  let UserItem = data?.data?.users?.map((el) => (
    <tr className="admin__card" key={el.id}>
      <td>{el.FirstName}</td>
      <td>{el.LastName}</td>
      <td>{el.phones[0]}</td>
      <td style={{ display: user?.role === "owner" ? "block" : "none" }}>
        <button onClick={() => deleteUser(el.id)}>
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <aside className={`sidebar ${toggle ? "active" : ""}`}>
        <div className="container">
          <div className="sidebar__content">
            <ul className="sidebar__list">
              <li className="sidebar__item">
                <FaRegUser />
                Users
              </li>
              <button
                onClick={() => dispatch(logout())}
                className="sidebar__btn"
              >
                Log Out
              </button>
            </ul>
          </div>
        </div>
      </aside>
      <div className="admin__content">
        <div className="container">
          <div className="admin__titles">
            <h1 className="admin__title">Admin Panel</h1>
            <button onClick={() => setToggle(!toggle)} className="admin__btn">
              <IoMenu />
            </button>
          </div>
          <table className="admin__cards">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                {user?.role === "owner" ? <th>Delete</th> : <></>}
              </tr>
            </thead>
            <tbody>{UserItem}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
