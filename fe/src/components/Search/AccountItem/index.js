import React from 'react'
import classNames from 'classnames/bind';
import styles from './index.css';
const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.image} alt={data.name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.name}</span>
                </p>
            </div>
        </div>
    )
}

export default AccountItem