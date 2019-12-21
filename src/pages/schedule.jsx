import React, { Component } from 'react';
import {IconButton, Menu, MenuItem} from 'react-mdl';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import Building1 from '../building1.PNG';
import Building2 from '../building2.PNG';
import Building3 from '../building3.PNG';

class Schedule extends Component {
    
    render() {
        return (
            <div className="Schedule" >
                <div className="container1">
                    <img src={ Building1 } alt='building1' className="building1"></img>
                    <Link to='/event'><div className="overlay overlayFade1">
                        <div className="text">EVENT</div>
                    </div></Link>
                </div>
                <div className="container2">
                    <img src={ Building2 } alt='building2' className="building2"></img>
                    <Link to='/FAQ'><div className="overlay overlayFade2">
                        <div className="text">FAQ</div>
                    </div></Link>
                </div>
                <div className="container3">
                    <img src={ Building3 } alt='building3' className="building3"></img>
                    <Link to='/map'><div className="overlay overlayFade3">
                        <div className="text">MAP</div>
                    </div></Link>
                </div>
                <img src={ Logo } alt='Hackillinois icon' className="scheduleLogo"></img>
                <div className="Menu" style={{position: 'absolute'}}>
                    <IconButton name="more_vert" id="demo-menu-lower-left" />
                    <Menu target="demo-menu-lower-left" >
                        <Link to="/"><MenuItem>Home</MenuItem></Link>
                        <MenuItem>Another Action</MenuItem>
                        <MenuItem>Yet Another Action</MenuItem>
                    </Menu>
                </div>
            </div>  
        );
    };
}

export default Schedule;