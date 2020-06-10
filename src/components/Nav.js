import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import styles from "../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import Header from "./Header/Header";

const useStyles = makeStyles(styles);

export default function Navigation() {
  const classes = useStyles();
  return (
    <Header
      brand="John Won"
      color="white"
      rightLinks={
        <List className={classes.list}>
          <ListItem
            button
            component={NavLink}
            to="/"
            className={classes.listItem}
            activeClassName="Mui-selected"
            exact
          >
            <Button color="black" className={classes.navLink} aria-label="Home Page">
              Home
            </Button>
          </ListItem>

          <ListItem
            className={classes.listItem}
            button
            component={NavLink}
            to="/projects"
            className={classes.listItem}
            activeClassName="Mui-selected"
            exact
          >
            <Button
              color="transparent"
              className={classes.navLink}
              aria-label="go to projects"
            >
              Projects
            </Button>
          </ListItem>
          <ListItem
            className={classes.listItem}
            button
            component={NavLink}
            to="/contact"
            className={classes.listItem}
            activeClassName="Mui-selected"
            exact
          >
            <Button
              color="transparent"
              className={classes.navLink}
              aria-label="go to contact page"
            >
              Contact
            </Button>
          </ListItem>
        </List>
      }
    />
  );
}
