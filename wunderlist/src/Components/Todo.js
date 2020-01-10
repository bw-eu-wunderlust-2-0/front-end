import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
          {/* <CardMedia
            component="img"
            alt="Random image for a task"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Random image for a task"
          /> */}
          <CardContent
            style={{
              background: props.aTask.completed ? "green" : "task not completed"
            }}
          >
            <Typography
              gutterBottom
              variant="h3"
              component="h3"
              color="Primary"
            >
              {props.aTask.title}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              {props.aTask.task}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Due for : {props.aTask.setDate}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Created at : {props.aTask.created_at}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Updated at : {props.aTask.updated_at}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Frequency : {props.aTask.notes}
            </Typography>

            <p>
              Status of the task :
              {props.aTask.completed ? "Task completed" : "task not completed"}
            </p>
            <button
              style={{
                background: "red",
                fontWeight: "bold",
                boxShadow: " 5px 5px 5px blue"
              }}
              onClick={() => props.deleteTask(props.aTask.id)}
            >
              delete
            </button>

            <button
              style={{
                background: "green",
                fontWeight: "bold",
                boxShadow: " 5px 5px 5px yellow"
              }}
              onClick={() => props.updateTask(props.aTask.id, props.formTask)}
            >
              Update
            </button>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default Todo;
