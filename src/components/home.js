import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import styles from "../assets/jss/material-kit-react/components/typographyStyle";
import image from "../assets/img/landing-bg.jpg";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div
        className={classes.container}
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      >
        <GridContainer justify="center">
          <GridItem>
            <div className={classes.brand}>
              <h1
                className={classes.title}
                style={{
                  color: "white",
                  paddingTop: "30%",
                }}
              >
                Material Kit React.
              </h1>
              <h3 className={classes.subtitle}>
                A Badass Material-UI Kit based on Material Design.
              </h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
