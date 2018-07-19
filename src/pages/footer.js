import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Grid, List, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <Segment vertical style={{ padding: "5em 0em" }}>
        <Divider section />
        <Divider hidden />
        <Container>
          <Grid centered stackable>
            <List horizontal divided link>
              <List.Item>
                <Link to="/about-us"> About us </Link>
              </List.Item>
              <List.Item>
                <Link to="/contact-us"> Contact us </Link>
              </List.Item>
              <List.Item>
                <Link to="/terms-and-conditions"> Terms and Conditions </Link>
              </List.Item>
              <List.Item>
                <Link to="/privacy-policy"> Privacy Policy </Link>
              </List.Item>
              <List.Item>
                <Link to="/disclaimer-policy"> Disclaimer Policy </Link>
              </List.Item>
            </List>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
