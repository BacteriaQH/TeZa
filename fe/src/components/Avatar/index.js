import React from 'react'
import styles from './index.css'

import classNames from 'classnames/bind'


const cx = classNames.bind(styles)

const Avatar = ({ name, image }) => {
    return (
        <>
            {
                image ?
                    <img src={image} alt={name} className={cx('avartar')} />
                    : (
                        <div id="container" style={{ backgroundColor: '#ccd1d6' }} >
                            <div id="name">
                                {name[0]}
                            </div>
                        </div >
                    )
            }
        </>
    )
}

export default Avatar