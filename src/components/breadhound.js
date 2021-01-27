import { Menu } from 'antd';
import '../styles/breadhound.css';
import  icon  from "../assets/breadhound/icon.png";
import  logo from "../assets/breadhound/breadhound-logo.svg";
import  appstoreBadge  from "../assets/breadhound/appstore-badge.png";
import  playstoreBadge from "../assets/breadhound/google-play-badge.svg";
import  screens from "../assets/breadhound/breadhound-screens.png";
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
                    <p>Keeping track of your money is hard, breadhound is here to help!
                        breadhound combines simple money tracking with the easy to follow 
                        <a href="https://www.investopedia.com/ask/answers/022916/what-502030-budget-rule.asp"
                            target="_blank"> 50/30/20 rule</a>.
                        Tracking and budgeting doesn't have to be complicated, with breadhound you'll
                        see where your money is going so you can find more ways to save. Get tracking!</p> 
                </div>
                <div className="app-info-download">
                    <a 
                        href="https://apps.apple.com/us/app/breadhound/id1547190917"
                        target="_blank">
                        <img src={appstoreBadge} className="badge" alt="Appstore badge" /> 
                    </a>
                    <a 
                        href="https://play.google.com/store/apps/details?id=io.lumaki.breadhound"
                        target="_blank">
                        <img src={playstoreBadge} className="badge" alt="Google Play store badge" /> 
                    </a>
                </div>
                <div className="app-info-screenshots">
                    <img src={screens} className="screenshots" alt="screenshots" /> 
                </div>
            </div>
        )
    }
}
export default Breadhound;
