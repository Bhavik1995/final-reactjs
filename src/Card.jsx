import React from 'react';
import {NavLink} from 'react-router-dom';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Card = (props) =>{
    return(
        <>
                <div className="col-md-4">
                <div className="box">
                    <div className="our-services backups">
                        <div className="icon">
                            <img src={props.icon} alt={props.icon}/>
                        </div>
                            <h4>{props.title}</h4> 

                            {/* <h5><NavLink to="" target="_blank">{props.description}</NavLink></h5> */}
                            
                            {/* <Popup trigger={<button className="btn-style">{props.btnName}</button>} position="right center"> */}
                            <NavLink to={{pathname:props.visit}} target="_blank">
                            <button className="btn-style">{props.btnName}</button>
                            </NavLink>
                            {/* </Popup> */}
                            
                                  
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;