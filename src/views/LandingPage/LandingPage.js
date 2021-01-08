import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import { database } from "firebase.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    database
      .collection("contacts")
      .add({
        email: email,
      })
      .then(() => {
        alert("Thanks we'll be in touch! 👍");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="WeChew"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <h1 className={classes.title}>
                  Spend less time choosing, more time chewing
                </h1>
                <h4>a place where your tastebuds meet the best restaraunts</h4>
                <br />
                <input
                  style={{ width: 300, height: 40, borderRadius: 3 }}
                  value={email}
                  size="lg"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <Button
                  color="danger"
                  size="md"
                  rel="noopener noreferrer"
                  type="submit"
                  disabled={!email}
                >
                  JOIN WAITLIST
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <SectionCarousel /> */}
          <ProductSection />
          <TeamSection />
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
