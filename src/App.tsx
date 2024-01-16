import React from 'react';
import {Route, Routes} from "react-router-dom";

import Main from "./pages/Main";

import './App.css';
import Events from "./pages/Events";
import RoutesList from "./pages/RoutesList";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

function App() {


    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/events/'} element={<Events/>}/>
            <Route path={'/routes/'} element={<RoutesList/>}/>
            <Route path={'/favorite/'} element={<Favorites/>}/>
            <Route path={'/profile/'} element={<Profile/>}/>
        </Routes>
    );
}

export default App;
