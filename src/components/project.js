import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import styles from "../assets/jss/material-kit-react/components/typographyStyle";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <div className={classes.typo}>
                <h1>why it work now</h1>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <div className={classes.typo}>
                <h1>why it work now</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
