import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/formUser.css";

export default function FormUpdateUser(props) {
  return (
    <div>
      <div>
        <form className="form-input" onSubmit={props.handlePostSubmit}>
          <h1>Update User</h1>

          <legend>
            <span className="number">1</span>Your basic info
          </legend>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={props.handleChange}
            name="name"
            required
          />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={props.handleChange}
            name="email"
            required
          />
          <label for="job">Gender:</label>
          <select name="gender" onChange={props.handleChange} required>
            <optgroup label="Nothing">
              <option value="">Choose Gender...</option>
            </optgroup>
            <optgroup label="Gender">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </optgroup>
          </select>

          <label>Status:</label>
          <input
            type="radio"
            value="Active"
            name="status"
            onChange={props.handleChange}
            required
          />
          <label for="status" className="light">
            Active
          </label>
          <input
            type="radio"
            value="Inactive"
            name="status"
            onChange={props.handleChange}
            required
          />
          <label for="status" className="light">
            Inactive
          </label>

          <button className="btn" type="submit">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}
