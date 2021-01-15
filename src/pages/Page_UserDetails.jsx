import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/profileUser.css";

export default function Page_UserDetails(props) {
  return (
    <div>
      <aside className="profile-card">
        <div className="box-profile">
          <header>
            <h1>{props.user.name}</h1>
            <p>{props.user.email}</p>
          </header>

          <div className="profile-bio">
            <p>{props.user.gender}</p>
          </div>

          <ul className="profile-options">
            <li>
              <Link className="btn-options" to={"/edit/" + props.user.id}>
                <i class="fas fa-edit"></i>
              </Link>
            </li>
            <li>
              <button className="btn-options" onClick={props.deleteUser}>
                <i class="fas fa-trash"></i>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
