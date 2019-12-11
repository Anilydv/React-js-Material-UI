import React from "react";
import "./Header.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Header extends React.Component {
  render() {
    return (
      <div className="header-info">
        <AppBar position="static">
          <Toolbar className="header">
            <Typography variant="h5" gutterBottom>
              Exercise Database
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Header;
