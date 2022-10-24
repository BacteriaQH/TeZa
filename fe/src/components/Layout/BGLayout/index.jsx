import React from 'react';
import { Row } from 'react-bootstrap';

import './index.css';
const PreLayout = ({ children, isPreLogin }) => {
    return (
        <div className="main">
            <div className="section">
                {isPreLogin && (
                    <Row className="m-0 text-center align-items-center section-header">
                        <h1 className="logo my-3">TeZa</h1>
                    </Row>
                )}
                <Row className="m-0 justify-content-center align-items-center">
                    {isPreLogin ? <div className="content">{children}</div> : children}
                </Row>
            </div>
        </div>
    );
};

export default PreLayout;
