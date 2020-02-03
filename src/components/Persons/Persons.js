import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    }

    render() {
        console.log('[Persons.js] rendering');
        return this.props.persons.map((person, index) => {
                return <Person
                    click={this.props.clicked.bind(this, index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated}
                />
            }
        );
    };
}

export default Persons;
