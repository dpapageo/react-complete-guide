import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];//.join(' ');
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if(props.persons.length <=2) {
        assignedClasses.push('red');
    }

    if(props.persons.length <=1) {
        assignedClasses.push('bold');
    }
    return (<div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass}
                onClick={props.clicked}>Toggle Persons
        </button>
        <button onClick={props.login}>Log in</button>
    </div>);
};

export default cockpit;
