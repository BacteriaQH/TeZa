import React from 'react';

import { Col, Row, Image } from 'react-bootstrap';

import logo from '../../../assets/imgs/c_logo.png';
import Input from '../../Input';

const Header = () => {
    return (
        <Row>
            <Col lg={3}>
                <Row>
                    <Col lg={3}>
                        <Image src={logo} alt="logo" roundedCircle style={{ width: '80px' }} className="ml-3" />
                    </Col>
                    <Col lg={9}>
                        <Input />
                    </Col>
                </Row>
            </Col>
            <Col lg={7}>menu</Col>
            <Col lg={2}>setting</Col>
        </Row>
    );
};

export default Header;
