import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import styles from "../assets/jss/material-kit-react/views/contactPage.js";

const useStyles = makeStyles(styles);

export default function Contact() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="intro">
          <GridContainer className={classes.padded}>
            <GridItem>
              <div className={classes.brand}>
                <h1>Contact</h1>
              </div>
            </GridItem>
            <GridItem className={classes.form}>
              <form Validate autoComplete="on">
                <div className={classes.spacing}>
                  <TextField
                    id="name"
                    label="Full Name"
                    placeholder="John Doe"
                    fullWidth
                    multiline
                  />
                </div>
                <div className={classes.spacing}>
                  <TextField
                    id="email"
                    label="Email"
                    placeholder="Example@example.com"
                    fullWidth
                    multiline
                  />
                </div>
                <div className={classes.spacing}>
                  <TextField
                    id="topic"
                    label="Topic"
                    placeholder="Talking?"
                    fullWidth
                    multiline
                  />
                </div>
                <div className={classes.spacing2}>
                  <TextField
                    id="message"
                    label="Message"
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                  />
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
