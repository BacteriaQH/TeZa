import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PreLogin = ({ socket }) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    socket.on('login-success', (data) => {
        navigate(`/chat/${data.user._id}`, { state: data });
    });
    return (
        <div>
            Quét mã thành công với người dùng <strong>{state.name}</strong>. <br />
            Vui lòng chọn "Đăng nhập" trên thiết bị di động của bạn
        </div>
    );
};

export default PreLogin;
