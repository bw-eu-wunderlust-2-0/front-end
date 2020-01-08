import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withRouter } from "react-router-dom";
import Todo from "./Todo";
import PopOver from "./Popover";
import { getTodoList } from "../actionCreator_actionTypes_ReducerStates/actionCreators";
import { connect } from "react-redux";

const TodoList = ({ toDoArray, getTodoList, ...props }) => {
  const options = ["Completed", "Daily", "Monthly"];
  const ITEM_HEIGHT = 48;

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    typography: {
      padding: theme.spacing(2)
    }
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl("");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const classes = useStyles();

  const onLogout = event => {
    event.preventDefault();
    window.localStorage.removeItem("token");
    props.history.push("/");
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const testing = [12, 12, 44, 22];
  console.log(testing);

  console.log(toDoArray);
  return (
    <div>
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <TextField
        style={{ width: "400px" }}
        id="outlined-basicc"
        label="look up a task"
        variant="outlined"
        name="search"
        // value={null}
        // onChange={null}
        type="text"
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<VpnKeyOutlinedIcon />}
        type="submit"
        onClick={onLogout}
      >
        LogOut
      </Button>
      <PopOver />

      {toDoArray.map(item => {
        return <Todo aTask={item} />;
      })}
      {/* <Todo aTask={toDoArray} /> */}
      {/* {testing.map(item => {
        return item;
      })} */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toDoArray: state.toDoList
  };
};

export default connect(mapStateToProps, {
  getTodoList
})(withRouter(TodoList));
