import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import styles from "../assets/jss/material-kit-react/views/footerPage.js";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div
      className={classes.section}
      style={{
        padding: "10px",
      }}
    >
      <div className={classes.container}>
        <div id="footer">
          <GridContainer justify="center">
            {/* social icons */}
            <ul className={classes.spacing}>
              <li className={classes.socialIcon}>
                <a
                  href="https://github.com/Jwon5"
                  target="_blank"
                  style={{
                    color: "Black",
                    padding: "10px 10px 0px 10px",
                  }}
                >
                  <i class="fab fa-github fa-3x" />
                </a>
              </li>
              <li className={classes.socialIcon}>
                <a
                  href="https://www.linkedin.com/in/jwon5/"
                  target="_blank"
                  style={{
                    color: "Black",
                    padding: "10px 10px 0px 10px",
                  }}
                >
                  <i class="fab fa-linkedin fa-3x" />
                </a>
              </li>
            </ul>
          </GridContainer>
          <Divider />
          <GridContainer justify="center">
            {/* copyright stuff */}
            <div className={classes.copyRight}>
              <p>©2020 John Won. All Rights Reserved.</p>
            </div>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
