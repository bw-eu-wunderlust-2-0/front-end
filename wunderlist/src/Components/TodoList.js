import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Popover from "@material-ui/core/Popover";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const TodoList = props => {
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
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const classes = useStyles();

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
        value={null}
        onChange={null}
        type="text"
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<VpnKeyOutlinedIcon />}
        type="submit"
      >
        LogOut
      </Button>
      <div className="pop-over">
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Make a new task
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
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={null}
            ></form>
            <form>
              <label>
                Title
                <input type="text" />
              </label>
              <TextareaAutosize
                rowsMax={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
              />
            </form>
          </Typography>
        </Popover>
      </div>

      {/* <div className="add-task-button">
        <Fab color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div> */}
      <div className="task-list">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Random image for a task"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Random image for a task"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                work on some project
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
};

export default TodoList;
