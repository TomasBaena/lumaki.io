import logoLight from '../assets/logo/lumaki-light.svg';
import rocket from '../assets/rocket.svg';
import exhaust from '../assets/exhaust.svg';
import breadhoundLogo from '../assets/breadhound/breadhound-right.svg';
import { Button } from 'antd';
import '../styles/home.css';
import { Component } from 'react';


class Home extends Component {
    constructor(props){ 
        super(props); 
        // this.state = { color : '#4cb96b' }; 
    } 
    render () {
        return (
            <div>
                <div className="Star-container">
                    <div className="star star-1"></div>
                    <div className="star star-2"></div>
                    <div className="star star-3"></div>
                    <div className="star star-4"></div>
                    <div className="star star-5"></div>
                    <div className="star star-6"></div>
                    <div className="star star-7"></div>
                    <div className="star star-8"></div>
                    <div className="star star-9"></div>
                    <div className="star star-10"></div>
                    <div className="star star-11"></div>
                    <div className="star star-12"></div>
                    <div className="star star-13"></div>
                    <div className="star star-14"></div>
                    <div className="star star-15"></div>
                    <div className="star star-16"></div>
                </div>
                <div className="Body-container">
                    <div className="Left-container">
                        <div className="Inner-container">
                        <img src={logoLight} className="Lumaki-logo" alt="logo" />
                        <h2 className="Header-text">Taking ideas to new places</h2>
                        <p className="Sub-text">2021 brings the release of our newest creation. Take control of your
                            spending habits by tracking where your money goes. breadhound helps you
                            categorize your transactions and displays how much money has been spent
                            and saved so you can improve month over month. 
                        </p>
                        <div className="Button-group">
                            {/* <Button 
                            type="link" 
                            size="large" 
                            href="/about"
                            style={{ color: "aliceblue" }}>About us</Button> */}
                            <Button 
                            type="primary" 
                            size="large" 
                            href="/breadhound"
                            style={{ background: "#42d77d", border: "none", marginLeft: "10px" }}>
                                Check out breadhound
                                <img 
                                    className="Breadhound-icon"
                                src={breadhoundLogo} 
                                alt="breadhound"/>
                            </Button>
                        </div>
                        </div>
                    </div>
                    <div className="Right-container">
                        <div className="Rocket-container">
                        <img src={exhaust} className="Exhaust" alt="exhaust" />
                        <img src={rocket} className="Rocket" alt="rocket" />      
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
