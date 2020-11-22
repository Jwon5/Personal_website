import { container, title } from "../material-kit-react.js";

const projectPage = {
  container,
  form: {
    margin: "auto",
    maxWidth: "400px",
  },
  brand: {
    color: "black",
    letterSpacing: "2px",
  },
  padded: {
    paddingTop: "10em",
    paddingBottom: "10em",
  },
  button: {
    marginTop: "10px",
    color: "white",
    background: "black",
  },
  spacing: {
    paddingTop: "15px",
  },
  spacing2: {
    paddingTop: "25px",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
};

export default projectPage;
