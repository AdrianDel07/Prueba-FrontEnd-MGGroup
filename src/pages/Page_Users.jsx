import Services from "../services/Services";
import React, { useHistory } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function Page_Users(props) {
  if (props.loading === true) {
    return <Loader />;
  } else {
    return (
      <div>
        <section>
          <div id="chatbox">
            <div id="friendslist">
              <div className="topmenu">
                <span className="friends"></span>
                <span className="chats"></span>
                <div className="add">
                  <Link to="/formUser">
                    <i class="fas fa-plus"></i>
                  </Link>
                </div>
              </div>

              <div className="friends-container">
                {props.data.map((user, index) => (
                  <div className="friend">
                    <Link to={"/users/" + user.id}>
                      <p>
                        <strong
                          onClick={() => props.setActiveUser(user, index)}
                          key={index}
                        >
                          {user.name}
                        </strong>
                        <span>{user.email}</span>
                      </p>
                      <div
                        className={
                          user.status === "Active"
                            ? "status available"
                            : "status away"
                        }
                      ></div>
                    </Link>
                  </div>
                ))}

                <div className="search">
                  <input
                    type="text"
                    id="searchfield"
                    value={props.searchName}
                    onChange={props.handleSearchName}
                  />
                  <button
                    className="search-btn"
                    type="button"
                    onClick={props.findUser}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
