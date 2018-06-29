import React from "react";
import { Container } from "semantic-ui-react";
import { ContactDetails } from "./contact";

export function AboutUs(props) {
  return (
    <Container>
      <h1>About us</h1>
      <p> A side project started by personal need. </p>
      <h2>Contact information</h2>
      <ContactDetails />
    </Container>
  );
}
