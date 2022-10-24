import React from 'react';
import { Row } from 'react-bootstrap';

import './index.css';

import Header from '../../Header';
import Footer from '../../Footer';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Row className="m-3">
                <Header />
            </Row>
            <Row className="body m-3">{children}</Row>
            <Row className="m-3">
                <Footer />
            </Row>
        </>
    );
};

export default DefaultLayout;
