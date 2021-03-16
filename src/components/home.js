import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import styles from "../assets/jss/material-kit-react/views/homePage.js";
import Footer from "../components/footer.js";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div
      className={classes.main}
      style={{
        backgroundColor: "#557A95",
        height: "100vh",
      }}
    >
      {/* Top background and name */}
      <div
        className={classes.section}
        style={{
          color: "#5D5C61",
          height: "85vh",
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
                      paddingTop: "15%",
                      color: "#062525 ",
                      letterSpacing: "2px",
                    }}
                  >
                    Hello, I'm John Won.
                  </h1>
                  <p
                    className={classes.subtitle}
                    style={{
                      color: "#010808",
                    }}
                  >
                    I am an advid developer and a coffee addict that yerns to learn to
                    create with modern technologies.
                  </p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
