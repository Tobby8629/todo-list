import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Appli from './Appli';
import Dev from './Dev';

function About() {
  return (
    <div className="all">
      <h2>About page.</h2>
      <div className="more">
        <ul>
          <li>
            <Link to="about-dev">about developer</Link>
          </li>
          <li>
            <Link to="about-app">about App</Link>
          </li>
        </ul>
        <div className="link">
          <Routes>
            <Route path="about-dev" element={<Dev />} />
            <Route path="about-app" element={<Appli />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default About;
