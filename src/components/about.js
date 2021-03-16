import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import styles from "../assets/jss/material-kit-react/views/aboutPage.js";
import Footer from "../components/footer.js";
import faceImage from "../assets/img/faces/empty.jpg";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(styles);
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#9e67b8",
  },
}))(LinearProgress);
export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/* About me section */}
      <div
        className={classes.section}
        style={{
          background: "#557A95",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <div className={classes.container}>
          <div id="about">
            <GridContainer justify="center">
              <GridItem md={6} className={classes.marginAuto}>
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
      {/* SKILLS SECTION BABYYYYYY */}
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
              <h1
                className={classes.title2}
                style={{
                  color: "black",
                  letterSpacing: "2px",
                }}
              >
                Skills
              </h1>
            </GridContainer>
            <GridContainer>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    HTML
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={100} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    JavaScript/jQuery
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={100} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    CSS
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={100} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    Java
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={100} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    JSP/Java Servlet
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={70} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    Git
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={80} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    MySql
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={60} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    React.js
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={50} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    Node.js
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={50} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    AWS
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={40} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    Scrum/Agile
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={40} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    BitBucket/JIRA
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={30} />
              </GridItem>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1
                    className={classes.subtitle}
                    style={{
                      color: "black",
                      letterSpacing: "2px",
                      padding: "10px",
                    }}
                  >
                    Swift
                  </h1>
                </div>
                <BorderLinearProgress variant="determinate" value={50} />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
