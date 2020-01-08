import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
// import { connect } from "react-redux";
// import { getTodoList } from "../actionCreator_actionTypes_ReducerStates/actionCreators";

const Todo = props => {
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    typography: {
      padding: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
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
  );
};

export default Todo;
