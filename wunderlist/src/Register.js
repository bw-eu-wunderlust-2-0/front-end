import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./Login";

const Register = props => {
  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    }
  });

  const classes = useStyles();

  return (
    <div>
         <div>
     
    </div>
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

        <TextField
          style={{ color: "white", paddingRight: "40px" }}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="firstname"
          value={null}
          onChange={null}
          type="text"
        />

        <TextField
          style={{ color: "white", paddingRight: "40px" }}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastname"
          value={null}
          onChange={null}
          type="text"
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
    </div>
  );
};

export default Register;
