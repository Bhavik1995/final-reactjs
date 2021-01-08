import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import {Switch,Route} from 'react-router-dom';
import Footer from './Footer';

const App = () =>{
    return(
        <>
            <Navbar/>
            <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/about" component={About}/>
            </Switch>
            <Footer/>
          
        </>
    );
};

export default App;