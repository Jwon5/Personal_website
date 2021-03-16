import { container } from "../material-kit-react.js";

const homePage = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "500",
    display: "inline-block",
    position: "relative",
  },
  title2: {
    fontSize: "2.4rem",
    fontWeight: "500",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: "400",
    maxWidth: "600px",
    margin: "10px 0 0",
  },
  para: {
    fontSize: "1.1em",
    fontWeight: "200",
    margin: "10px 0 0",
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
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  marginAuto: {
    margin: "auto !important",
    textAlign: "center !important",
  },
  imgFluid: {
    maxWidth: "50%",
    height: "auto",
  },
  imgRounded: {
    borderRadius: "6px !important",
  },
  imgRoundedCircle: {
    borderRadius: "50% !important",
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
};

export default homePage;
