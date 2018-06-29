import React from "react";
import { Container, Grid, List, Header, Icon } from "semantic-ui-react";
import { StyledIcon } from "../common";

export function ContactUs(props) {
  return (
    <Container>
      <h1>Contact us</h1>
      <ContactDetails />
    </Container>
  );
}

export function ContactDetails(props) {
  return (
    <div>
      <p>Dhanraj Acharya </p>
      <p>Email : dhanrajacharya44@gmail.com </p>
      <List link horizontal>
        <List.Item as="a" href="https://www.facebook.com/drex44" target="_new">
          <StyledIcon name="facebook" />
        </List.Item>
        <List.Item
          as="a"
          href="https://www.linkedin.com/in/dhanraj-acharya"
          target="_new"
        >
          <StyledIcon name="linkedin" />
        </List.Item>
        <List.Item as="a" href="https://github.com/drex44" target="_new">
          <StyledIcon name="github" />
        </List.Item>
        <List.Item as="a" href="https://drex44.github.io/" target="_new">
          <StyledIcon name="world" />
        </List.Item>
        <List.Item
          as="a"
          href="https://stackoverflow.com/cv/dhanraj-acharya"
          target="_new"
        >
          <StyledIcon name="stack overflow" />
        </List.Item>
      </List>
    </div>
  );
}
