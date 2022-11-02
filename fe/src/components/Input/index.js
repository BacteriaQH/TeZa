import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Input = ({ isSearch }) => {

    return (
        <div style={{ height: '50%', backgroundColor: '#f0f2f5', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }} className='my-4'>
            {isSearch && <FontAwesomeIcon icon={faSearch} color='#787a7e' className='mx-2' />}
            <input type="text" className="my-4 mx-2" placeholder="Tìm kiếm trên TeZa" style={{ backgroundColor: '#f0f2f5' }} />
        </div >
    );
};

export default Input;
