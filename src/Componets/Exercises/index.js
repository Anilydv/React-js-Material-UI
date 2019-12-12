import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core/";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({ exercises }) => (
  <Grid container sm>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises]) => (
          <Fragment>
            <Typography variant="h6" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>
            <List component="nav" aria-label="secondary mailbox folders">
              {exercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>
        <Typography variant="h3">Welcome!</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          Please select the exercise from the list on the left...
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
