import React, { useRef } from "react";
import "./style.css";

export default function Form({ name, hasRememberBox, getParamsCallback }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validateEmail = (value) => {
    if (!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(value)) {
      console.warn(value, "邮箱格式不正确!");
      return false;
    }
    return true;
  };

  const validatePassword = (value) => {
    // {6,12} 之间不能有空格 即{6, 12}
    if (!/^[a-zA-Z0-9_-]{6,12}$/.test(value)) {
      console.warn(value, "密码只支持数字, 字母, 中横线, 下划线, 长度为6到12位!");
      return false;
    }
    return true;
  };

  return (
    <form className="form-horizontal col-sm-6">
      <div className="form-group">
        <label htmlFor="inputEmail3" className="col-sm-2 control-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword3" className="col-sm-2 control-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Password"
          />
        </div>
      </div>
      {hasRememberBox !== false ? (
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
            onClick={(e) => {
              // 阻止form表单默认事件[Type为Email的验证事件, 也将失效, 只好自己另外写验证规则], 否则url多出? http://localhost:3000/?#/register
              e.preventDefault();

              const emailVal = emailRef.current.value;
              const passwordVal = passwordRef.current.value;
              if(!validateEmail(emailVal) || !validatePassword(passwordVal)){
                return;
              }
             
              getParamsCallback({
                email: emailVal,
                password: passwordVal,
              });
            }}
          >
            {name || "click me"}
          </button>
        </div>
      </div>
    </form>
  );
}
