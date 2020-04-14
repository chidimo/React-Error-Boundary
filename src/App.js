import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { ColumnLeft } from './columns/ColumnLeft';
import { ColumnRight } from './columns/ColumnRight';

import './App.scss';

export const App = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Error boundaries in react</Navbar.Brand>
      </Navbar>

      <Container fluid>
        <Row>
          <Col className="column" xs="12" md="3">
            <ColumnLeft />
          </Col>

          <Col className="column" xs="12" md="9">
            <ColumnRight />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
