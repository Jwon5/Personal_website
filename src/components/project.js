import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem";
import styles from "../assets/jss/material-kit-react/views/projectPage.js";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} lg={6} justify="center">
            <div id="project_1" className={classes.cards}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="image of project"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Content
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Description of Content
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={6} justify="center">
            <div id="project_2" className={classes.cards}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="image of project"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Content
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Description of Content
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
