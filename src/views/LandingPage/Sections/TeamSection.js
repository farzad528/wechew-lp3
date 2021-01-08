import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/bahrom.jpg";
import team2 from "assets/img/faces/fram.jpg";
import team3 from "assets/img/faces/dana.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>What our chewers are saying</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Bahrom F
                {/* <br />
                <small className={classes.smallTitle}>Co-Founder</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  <i>"Creative and fun way to swipe through restaraunts with my coworkers to pick where we eat for lunch!"</i>
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Fram H
                {/* <br />
                <small className={classes.smallTitle}>Co-Founder</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  <i>"We often spend more time deciding where to eat than actually eating once we’ve decided. WeChew helps us save so much time!"</i>
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Dana F
                {/* <br />
                <small className={classes.smallTitle}>Co-Founder</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  <i>
                    "WeChew gives my friend and me a 'win-win' dining expedrience as all of us get to voice our dietary preferences before choosing where to eat"
                  </i>
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
