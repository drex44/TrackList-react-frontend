import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';
import { Container, Segment, Grid, List, Header, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container compact centered>
                    <Grid centered inverted stackable>
                        <List horizontal inverted divided link>
                            <List.Item as='a'>
                                <Link to="/about-us" > About us </Link>
                            </List.Item>
                            <List.Item as='a'>
                                <Link to="/contact-us" > Contact us </Link>
                            </List.Item>
                            <List.Item as='a'>
                                <Link to="/terms-and-conditions" > Terms and Conditions </Link>
                            </List.Item>
                            <List.Item as='a'>
                                <Link to="/privacy-policy" > Privacy Policy </Link>
                            </List.Item>
                            <List.Item as='a'>
                                <Link to="/disclaimer-policy" > Disclaimer Policy </Link>
                            </List.Item>
                        </List>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}