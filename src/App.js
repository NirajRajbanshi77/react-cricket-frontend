// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import AnalyzePage from './components/AnalyzePage';
import HomePage from './components/Home';
import Login from './components/Login';
import CricGuide from './components/CricGuide';

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <Router>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/analyze" element={<AnalyzePage />} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/guide" element={<CricGuide />} />

            </Routes>
          
        </Router>
    );
};

export default App;
