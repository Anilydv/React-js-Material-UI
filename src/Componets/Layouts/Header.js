import React from "react";
import "./Header.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => (
  <AppBar position="static">
    <Toolbar className="header">
      <Typography variant="h5">
        Exercise Database
      </Typography>
    </Toolbar>
  </AppBar>
);
