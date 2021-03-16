import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import emailjs from "emailjs-com";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "../assets/jss/material-kit-react/views/contactPage.js";
import Footer from "../components/footer.js";

const useStyles = makeStyles(styles);

export default function Contact() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bm8avo3",
        "template_o1fadmk",
        e.target,
        "user_KbH6XkMJKb53AmocBqXhL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        handleOpen()
      );
    e.target.reset();
  }

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
            <GridItem>
              {/* Dialog box for submitting the contact page. */}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Thank you! Your message has been sent."}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description"></DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </GridItem>
            <GridItem className={classes.form}>
              {/* The form itself */}
              <form Validate autoComplete="on" onSubmit={sendEmail}>
                <div className={classes.spacing}>
                  <TextField
                    name="name"
                    label="Full Name"
                    required
                    placeholder="John Doe"
                    fullWidth
                    multiline
                  />
                </div>
                <div className={classes.spacing}>
                  <TextField
                    name="email"
                    type="email"
                    label="Email"
                    required
                    placeholder="Example@example.com"
                    fullWidth
                    multiline
                  />
                </div>
                <div className={classes.spacing}>
                  <TextField
                    name="subject"
                    label="Subject"
                    placeholder="Talking?"
                    fullWidth
                    multiline
                  />
                </div>
                <div className={classes.spacing2}>
                  <TextField
                    name="message"
                    label="Message"
                    required
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
                    type="submit"
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
      <Footer />
    </div>
  );
}
