import React, {Component} from "react";
import './Person.css'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    //static contextType = AuthContext;

    componentDidMount() {
        //document.querySelector('input').focus();
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </div>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;
