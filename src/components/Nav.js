import React from "react";
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
      color="transparent"
      style={{
        fontWeight: "bold",
      }}
      fixed
      changeColorOnScroll={{
        height: 50,
        color: "white",
      }}
      rightLinks={
        <List className={classes.list}>
          <ListItem button className={classes.listItem}>
            <Button
              href="/"
              color="transparent"
              target="_self"
              className={classes.navLink}
            >
              Home
            </Button>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <Button
              href="/About"
              color="transparent"
              target="_self"
              className={classes.navLink}
            >
              About
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/Projects"
              color="transparent"
              target="_self"
              className={classes.navLink}
            >
              Projects
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/Contact"
              color="transparent"
              target="_self"
              className={classes.navLink}
            >
              contact
            </Button>
          </ListItem>
        </List>
      }
    />
  );
}
