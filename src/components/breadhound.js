import { Menu } from 'antd';
import '../styles/breadhound.css';
import  icon  from "../assets/breadhound/icon.png";
import  logo from "../assets/breadhound/breadhound-logo.svg";
import  screens from "../assets/breadhound/screenshots.png";
import { Component } from 'react';

class Breadhound extends Component {
    constructor(props){ 
        super(props); 
        // this.state = { color : '#4cb96b' }; 
    } 
    render () {
        return (
            <div className="main-container">
                <Menu 
                    onClick={this.handleClick} 
                    mode="horizontal"
                    className="menu-bar"
                    style={{ background: "#f4f5f8"}}>
                    <Menu.Item key="home">
                        <a href="/" rel="noopener noreferrer">
                            Home
                        </a>
                    </Menu.Item>
                    <Menu.Item key="tos">
                        <a href="#/breadhound/policies" rel="noopener noreferrer">
                            Policies
                        </a>
                    </Menu.Item>
                </Menu>
                <div className="app-info-top">
                    <img src={icon} className="icon" alt="icon" /> 
                    <img src={logo} className="logo" alt="logo" /> 
                </div>
                <div className="app-info-text">
                    <p>breadhound helps you track your money. Simply log your transaction and assign them a type: 
                         <b>Income</b>, <b>Fixed</b>, or <b>variable</b>. You'll be able to compare
                        and import from previous months too. With a better idea of where your money is going you can 
                        start working to find ways to spend your money more wisely. Download today!</p> 
                </div>
                <div className="app-info-screenshots">
                    <img src={screens} className="screenshots" alt="screenshots" /> 
                </div>
            </div>
        )
    }
}
export default Breadhound;
