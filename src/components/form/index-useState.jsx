// Just for Learning the different between useRef and useState
import React, { useState } from "react";
import "./style.css";

export default function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form-horizontal col-sm-6">
      <div className="form-group">
        <label htmlFor="inputEmail3" className="col-sm-2 control-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword3" className="col-sm-2 control-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Password"
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setPassword(e.currentTarget.value);
            }}
          />
        </div>
      </div>
      {props.hasRememberBox !== false ? (
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
          </div>
        </div>
      ) : null}
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              console.log(email, password);
            }}
          >
            {props.name || "click me"}
          </button>
        </div>
      </div>
    </form>
  );
}
