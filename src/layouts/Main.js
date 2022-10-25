import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import LeftSideNav from '../Shared/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4"> <LeftSideNav></LeftSideNav> </Col>
                    <Col lg="8"> <Outlet></Outlet> </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;