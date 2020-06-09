import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import styles from "../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import Header from "./Header/Header";
import HeaderLinks from "./Header/HeaderLinks";

const useStyles = makeStyles(styles);

export default function Navigation() {
  const classes = useStyles();
  return (
    <Header
      brand="John Won"
      color="transparent"
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={classes.navLink}
              aria-label="go to about page"
              href="/about"
            >
              About
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={classes.navLink}
              aria-label="go to projects"
              href="/projects"
            >
              Projects
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={classes.navLink}
              aria-label="go to contact page"
              href="/contact"
            >
              Contact
            </Button>
          </ListItem>
        </List>
      }
    />
  );
}
