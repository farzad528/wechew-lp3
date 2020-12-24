import React, { useState } from "react";
import { database } from "../../../firebase";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    database
      .collection("contacts")
      .add({
        email: email,
      })
      .then(() => {
        alert("Thanks for joining the WeChew family! 👍");
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
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Be the first to Chew with us!</h2>
          <h4 className={classes.description}>
      WeChew is scheduled for Beta launch in Spring 2021. Signup below to get EXCLUSIVE access when we launch
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
            
              <GridItem xs={12} sm={12} md={6}>
                <input style={{ width: '100%'}}
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              {/* <CustomInput
                onChange={(e) => setMessage(e.target.value)}
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              /> */}
              <GridItem xs={12} sm={12} md={6}>
                <Button type="submit" color="primary" disabled={!email}>
                  Join the Waitlist!
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
