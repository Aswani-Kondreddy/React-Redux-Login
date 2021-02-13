import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './loginPage.css';

const Login = () => {
  const history = useHistory();
  const [password, setPasword] = useState("");
  const [userName, setUserName] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const validUserName = useSelector(state => state.username);
  const validPassword = useSelector(state => state.password);

  const checkLogin = () => {
    if (userName === "" || password === "") {
      setErrMsg("All fields must be filled!");
    }
    else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(userName)) {
      setErrMsg("Invalid email!");
    }
    else if (userName !== validUserName) {
      setErrMsg("Invalid email!")
    }
    else if (password !== validPassword) {
      setErrMsg("Wrong password!")
    }
    else {
      history.push('/home');
    }
  }

  return (
    <div>
      <div className="main-form">
        <h2 style={{ textAlign: "center" }}>Login</h2>

        {
          errMsg ? <p className="error">{errMsg}</p> : ''
        }

        <div className="input-field">
          <label>UserName</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input type="submit" value="Login"
            onClick={() => checkLogin()}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;