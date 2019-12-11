import React from "react";
import { Grid } from "@material-ui/core/";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane"

const style = {
    Paper: { padding: 20, marginBottom: 10}
}

export default props => (
  <Grid container sm>
    <Grid item sm>
      <LeftPane style={style} />
    </Grid>
    <Grid item sm>
      <RightPane style={style}/>
    </Grid>
  </Grid>
);
