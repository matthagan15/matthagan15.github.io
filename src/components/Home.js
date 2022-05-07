import { Component } from "react";
import Navbar from "./Navbar";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>
                    This is a homepage component. This will just be a bunch of bs
                </p>
            </div>
        );
    }
}

export default Home;