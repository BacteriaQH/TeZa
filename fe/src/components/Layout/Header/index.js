import React from 'react';

import { Col, Row, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/imgs/c_logo.png';
import Input from '../../Input';
import Avatar from '../../Avatar';

const Header = () => {
    return (
        <Row style={{ margin: '0px' }}>
            <Col xs={3}>
                <Row>
                    <Col xs={3}>
                        <Image src={logo} alt="logo" roundedCircle style={{ width: '70px' }} className="" />
                    </Col>
                    <Col xs={9}>
                        <Input isSearch />
                    </Col>
                </Row>
            </Col>
            <Col xs={7}></Col>
            <Col xs={2}>
                <Row>
                    <Col xs={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '40px', backgroundColor: '#f0f2f5' }} className='mx-0' >
                            <FontAwesomeIcon icon={faBell} style={{ fontSize: '20px' }} className='mx-3 my-3' />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div style={{ width: '50px' }}><Avatar name={'Phuc'} /></div>
                    </Col>
                </Row>
            </Col>
        </Row >
    );
};

export default Header;
