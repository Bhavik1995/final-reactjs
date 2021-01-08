import React from 'react';
import {NavLink} from 'react-router-dom';
import myLogo from '../src/images/logo/logo1.png';

const Navbar = () =>{
    return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                          <div className="container-fluid">
                          <span>
                                <img alt="Bhavik Sejpal" src={myLogo} style={{width:'45px', height:'45px'}}/>
                          </span>
                                <NavLink exact className="navbar-brand" to="/">Bhavik Sejpal</NavLink>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">My Portfolio</NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/about">About Me</NavLink>
                            </li>
                        </ul>
                    
                        </div>
                    </div>
        </nav> 
                        </div>
                    </div>
                </div>
            </>
    );
};

export default Navbar;