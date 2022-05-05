import { Component } from "react";
import "./topbar.css";

class TopBar extends Component {
    render() {
        return (
            <header className="navbarHeader">
                <div className="logo">
                    logo here
                </div>
                <nav className="navigation">
                    Home
                    newline
                </nav>
            </header>
        );
    }
}

export default TopBar;