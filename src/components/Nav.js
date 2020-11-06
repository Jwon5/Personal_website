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
      changeColorOnScroll={{
        height: 200,
        color: "white",
      }}
      rightLinks={
        <List className={classes.list}>
          <ListItem
            button
            className={classes.listItem}
            activeClassName="Mui-selected"
            exact
          >
            <Button
              href="/"
              color="transparent"
              target="_self"
              className={classes.navLink}
            >
              Home
            </Button>
          </ListItem>

          <ListItem className={classes.listItem} activeClassName="Mui-selected" exact>
            <Button
              href="/Projects"
              color="transparent"
              target="_self"
              className={classes.navLink}
            >
              Projects
            </Button>
          </ListItem>
          <ListItem className={classes.listItem} activeClassName="Mui-selected" exact>
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
