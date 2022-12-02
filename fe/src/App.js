import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

import 'bootstrap/dist/css/bootstrap.min.css';

import userRoutes from './router';
import DefaultLayout from './layout/DefaultLayout';
import BGLayout from './layout/BGLayout';
import { BASE_URL } from './constant';
const App = () => {
    const socket = io(BASE_URL);
    socket.on('your id', (id) => {
        console.log(socket.id);
    })
    return (
        <div className="App">
            <Routes>
                {userRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                route.defaultLayout ? (
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                ) : (
                                    <BGLayout isPreLogin>
                                        <Page socket={socket} />
                                    </BGLayout>
                                )
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
};

export default App;
