import "./style.css"
import { Component } from "react";

export class Button extends Component {

    render() {
        const { text, onclick, disabled } = this.props;

        return (
            <div className="button-container">
                <button disabled={disabled} className="button" onClick={onclick}>
                    {text}
                </button>
            </div>
        )
    }
}