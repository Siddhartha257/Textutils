
import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Nav(props){

    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shits
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/Example">example</NavLink></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
              </ul>
            </li>
          </ul>
            <div className="form-check form-switch mx-3">
                <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <lable for='flexSwitchCheckDefault' style={{color: props.mode==='dark'?'white':'black'}}>Enable Dark mode</lable>
            </div>
        </div>
      </div>
    </nav>
    )
};

