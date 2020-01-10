import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import { MuiPickersUtilsProvider, InlineDatePicker } from "material-ui-pickers";

import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const PopOver = props => {
  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5"
    }
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      {...props}
    />
  ));
  //   console.log(StyledMenu);

  const StyledMenuItem = withStyles(theme => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white
        }
      }
    }
  }))(MenuItem);

  //   console.log(StyledMenuItem);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    typography: {
      padding: theme.spacing(2)
    }
  }));
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className="pop-over">
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Make a new task/EDIT
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}>
          <form className={classes.root} noValidate autoComplete="off"></form>
          <form
            onSubmit={event => props.onTaskFormSubmit(event, props.formTask)}
          >
            <label>
              Title
              <input
                type="text"
                placeholder="Type in a title"
                name="title"
                onChange={props.onFormValueChange}
                value={props.formTask.title}
              />
            </label>
            <TextareaAutosize
              rowsMax={4}
              aria-label="maximum height"
              placeholder="Type in a task"
              //   defaultValue=""
              onChange={props.onFormValueChange}
              name="task"
              value={props.formTask.task}
            />

            <label class="container">
              Completed ?
              <input type="checkbox" name="completed" onChange={props.onFormValueChange} />
              <span class="checkmark"></span>
            </label>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <InlineDatePicker onChange={console.log} value={new Date()} />
      </div>
    </MuiPickersUtilsProvider> */}
            <button type="submit">Submit this task</button>
          </form>
        </Typography>
      </Popover>
    </div>
  );
};

export default PopOver;
