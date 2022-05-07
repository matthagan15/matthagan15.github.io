import { Component } from "react";
import { Link , NavLink} from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navigation">
                <NavLink to="/" className="navigationLink" >Home</NavLink>
                <NavLink to="/about" className="navigationLink" > About </NavLink>
                <NavLink to="/QcircuitBuilder" className="navigationLink" > QCircuit Builder </NavLink>
            </nav>
        );
    }
}

export default Navbar;