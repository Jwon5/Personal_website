import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import styles from "../assets/jss/material-kit-react/views/homePage.js";
import image from "../assets/img/BG-2.jpeg";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div
      className={classes.section}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundPosition: "center",
        color: "white",
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem>
            <div className={classes.brand}>
              <h1
                className={classes.title}
                style={{
                  paddingTop: "30%",
                  color: "black",
                }}
              >
                John Won
              </h1>
              <h3
                className={classes.subtitle}
                style={{
                  color: "black",
                }}
              >
                Creative and highly self-motivated computer science graduate specialized
                in mobile and web development seeking a full-time position where I can
                utilize my skill set to assist in developing innovative tools and
                software.
              </h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
