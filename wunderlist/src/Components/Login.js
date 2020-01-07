import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";

const Login = props => {
  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    }
  });

  const classes = useStyles();

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={null}
      >
        <TextField
          id="outlined-basicc"
          label="UserName"
          variant="outlined"
          name="username"
          value={null}
          onChange={null}
          type="text"
        />

        <TextField
          style={{ color: "white", paddingRight: "40px" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          value={null}
          onChange={null}
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
