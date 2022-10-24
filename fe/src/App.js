import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

import 'bootstrap/dist/css/bootstrap.min.css';

import userRoutes from './router';
import DefaultLayout from './components/Layout/DefaultLayout';
import BGLayout from './components/Layout/BGLayout';

const App = () => {
    const socket = io('http://localhost:3000');
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
