import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithAuth } from "../Utils/axiosAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { BrowserRouter as NavLink } from "react-router-dom";
// import Register from "./Register";
// import Home from "./Home";

const Login = props => {
  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    }
  });

  const classes = useStyles();

  const initialUserCredentials = {
    username: "",
    password: ""
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const onHandleChange = event => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value
    });
  };

  const onLogin = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/auth/login", userCredentials)
      .then(res => {
        console.log(res.data.message);
        setUserCredentials(initialUserCredentials);
      })
      .catch(err => err);
  };

  return (
    <div>
      <p>{userCredentials.username}</p>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onLogin}
      >
        <TextField
          id="outlined-basicc"
          label="UserName"
          variant="outlined"
          name="username"
          value={userCredentials.username}
          onChange={onHandleChange}
          type="text"
        />

        <TextField
          style={{ color: "white", paddingRight: "40px" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          value={userCredentials.password}
          onChange={onHandleChange}
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<VpnKeyOutlinedIcon />}
          type="submit"
        >
          LogIn
        </Button>
      </form>
      <NavLink exact to="/Register">
        <p>Are you Registered ?</p>
      </NavLink>
    </div>
  );
};

export default Login;
