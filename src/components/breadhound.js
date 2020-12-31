import logoLight from '../assets/logo/lumaki-light.svg';
import rocket from '../assets/rocket.svg';
import exhaust from '../assets/exhaust.svg';
import breadhoundLogo from '../assets/breadhound/breadhound-right.svg';
import { Button } from 'antd';
import '../styles/breadhound.css';
import  splash  from "../assets/breadhound/breadhound-splash.svg";
import { Component } from 'react';


class Breadhound extends Component {
    constructor(props){ 
        super(props); 
        // this.state = { color : '#4cb96b' }; 
    } 
    render () {
        return (
            <div style={{ background: "red" }}>
                <img src={splash} className="Splash" alt="splash" />
            </div>
        )
    }
}
export default Breadhound;
