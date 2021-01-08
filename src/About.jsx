import React from 'react';
import myLogo from '../src/images/logo/logo1.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import{NavLink} from 'react-router-dom';

const About = () =>{
    return(
        <>
            <div class="container-fluid main_header">
        <div class="row">
            <div class="col-md-12 col-12 mx-auto">
                <div class="row">
                   
                    <div class="col-md-6 col-12 main_header_right align-items-center">
                        <figure>
                            <img className="logo" src={myLogo} alt="Bhavik Sejpal"/>
                        </figure>
                    </div>

                    <div class="col-md-6 col-12 main_header_left">
                            <p>Welcome to my portfolio</p>
                            <h1>I am <span class="text_clr">Web Developer</span></h1>
                            
                            <p className="icon">Connect with me :-
                            <NavLink to={{pathname:"https://www.linkedin.com/in/bhavik-sejpal-2bb0a4129"}} target="_blank">
                                <LinkedInIcon style={{fontSize: 25, color: '#0e76a8', marginLeft : 10}}/>
                            </NavLink>

                            <NavLink to={{pathname:"https://github.com/Bhavik1995"}} target="_blank">
                                   <GitHubIcon style={{fontSize: 25, color: '#333', marginLeft : 10}}/>
                            </NavLink> 

                            <NavLink to={{pathname:"#"}} target="_blank">
                                   <TwitterIcon style={{fontSize: 25, color: '#1da1f2', marginLeft : 10}}/>
                            </NavLink>

                        
                            </p>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>   
        </>
    );
};

export default About;