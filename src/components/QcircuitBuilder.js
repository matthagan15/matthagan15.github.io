import { Component } from "react";
import Navbar from "./Navbar";

class QcircuitBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table: Array(3 * 3).fill(0),
        };
    }
    
    renderWire(ix) {
        return (
            <button>{this.state.table[ix]}</button>
        );
    }

    render() {
        return (
            <div>
                <Navbar />
                <p>
                    This is where the QCircuit Builder GUI will go.
                </p>
                <button>add wire</button>
                <div className="horizontal_circuit_slice">
                    {this.renderWire(0)}
                <div className="horizontal_circuit_slice">
                    {this.renderWire(1)}
                </div>
                <div className="horizontal_circuit_slice">
                    {this.renderWire(2)}
                </div>
                </div>
            </div>
        );
    }
}

export default QcircuitBuilder;