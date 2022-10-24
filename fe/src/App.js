import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import userRoutes from './router';
import DefaultLayout from './components/Layout/DefaultLayout';
import BGLayout from './components/Layout/BGLayout';

const App = () => {
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
                                        <Page />
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
