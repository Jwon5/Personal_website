import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import styles from "../assets/jss/material-kit-react/views/homePage.js";
import image from "../assets/img/BG-2.jpeg";

import faceImage from "../assets/img/faces/empty.jpg";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div
        className={classes.section}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundPosition: "center",
          color: "white",
          height: "100vh",
        }}
      >
        <div className={classes.container}>
          <div id="intro">
            <GridContainer justify="center">
              <GridItem>
                <div className={classes.brand}>
                  <h1
                    className={classes.title}
                    style={{
                      paddingTop: "30%",
                      color: "black",
                      letterSpacing: "2px",
                    }}
                  >
                    John Won
                  </h1>
                  <p
                    className={classes.subtitle}
                    style={{
                      color: "black",
                    }}
                  >
                    I am a creative and highly self-motivated computer science graduate
                    specialized in mobile and web development seeking a full-time position
                    where I can utilize my skill set to assist in developing innovative
                    tools and software.
                  </p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <div
        className={classes.section}
        style={{
          background: "#121212",
          justifyContent: "center",
          alignContent: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <div className={classes.container}>
          <div id="about">
            <GridContainer justify="center">
              <GridItem sm={12} md={6} className={classes.marginAuto}>
                <img
                  src={faceImage}
                  alt="Image of my Face"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h2
                    className={classes.title2}
                    style={{
                      letterSpacing: "2px",
                    }}
                  >
                    About Me
                  </h2>
                  <p className={classes.para}>
                    I am a recent graduate with a Computer Science degree at University of
                    North Carolina at Charlotte. I'm just a curious person in which I try
                    to explore everything. As a child I would try to break things apart to
                    learn how to put it back together. Learning how to code is a similar
                    feeling. I learn how to break code up to understand which parts do
                    which. I created this website using React.js and Material UI.
                  </p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <div
        className={classes.section}
        style={{
          background: "white",
          color: "black",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className={classes.container}>
          <div id="skills">
            <GridContainer>
              <GridItem xs={12} sm={12} md={8} lg={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.title2}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                    }}
                  >
                    Skills
                  </h1>
                  <h3
                    className={classes.subtitle}
                    style={{
                      color: "black",
                    }}
                  ></h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
