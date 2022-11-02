import React from 'react';

import { Col, Row, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/imgs/c_logo.png';
import avatar from '../../../assets/imgs/avatar.jpg';
import Input from '../../Input';

const Header = () => {
    return (
        <Row style={{ margin: '0px' }}>
            <Col lg={3}>
                <Row>
                    <Col lg={3}>
                        <Image src={logo} alt="logo" roundedCircle style={{ width: '70px' }} className="" />
                    </Col>
                    <Col lg={9}>
                        <Input isSearch />
                    </Col>
                </Row>
            </Col>
            <Col lg={7}></Col>
            <Col lg={2}>
                <Row>
                    <Col lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '40px', backgroundColor: '#f0f2f5' }} className='mx-0' >
                            <FontAwesomeIcon icon={faBell} style={{ fontSize: '20px' }} className='mx-3 my-3' />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Image src={avatar} alt='avatar' style={{ width: '50px', height: '50px', borderRadius: '50px' }} />
                    </Col>
                </Row>
            </Col>
        </Row >
    );
};

export default Header;
