import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="(" onClick={a => this.props.onClick(a.target.name)}>(</button>
                <button name="CE" onClick={a => this.props.onClick(a.target.name)}>CE</button>
                <button name=")" onClick={a => this.props.onClick(a.target.name)}>)</button>
                <button name="C" onClick={a => this.props.onClick(a.target.name)}>C</button><br/>


                <button name="1" onClick={a => this.props.onClick(a.target.name)}>1</button>
                <button name="2" onClick={a => this.props.onClick(a.target.name)}>2</button>
                <button name="3" onClick={a => this.props.onClick(a.target.name)}>3</button>
                <button name="+" onClick={a => this.props.onClick(a.target.name)}>+</button><br/>


                <button name="4" onClick={a => this.props.onClick(a.target.name)}>4</button>
                <button name="5" onClick={a => this.props.onClick(a.target.name)}>5</button>
                <button name="6" onClick={a => this.props.onClick(a.target.name)}>6</button>
                <button name="-" onClick={a => this.props.onClick(a.target.name)}>-</button><br/>

                <button name="7" onClick={a => this.props.onClick(a.target.name)}>7</button>
                <button name="8" onClick={a => this.props.onClick(a.target.name)}>8</button>
                <button name="9" onClick={a => this.props.onClick(a.target.name)}>9</button>
                <button name="*" onClick={a => this.props.onClick(a.target.name)}>x</button><br/>


                <button name="." onClick={a => this.props.onClick(a.target.name)}>.</button>
                <button name="0" onClick={a => this.props.onClick(a.target.name)}>0</button>
                <button name="=" onClick={a => this.props.onClick(a.target.name)}>=</button>
                <button name="/" onClick={a => this.props.onClick(a.target.name)}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
