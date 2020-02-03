import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context'

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
        this.state = {
            persons: [
                {id: 'id1', name: 'Kokoriko', age: 28},
                {id: 'id2', name: 'Manu', age: 33},
                {id: 'id3', name: 'Korobos', age: 36}
            ],
            otherState: 'Some other value',
            showPersons: false,
            authenticated: false
        };
    };

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    }

    componentWillMount() {
        console.log('[App.js] componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => person.id === id);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
        // this.setState((prevState, props) => {
        //    return{
        //        person: persons,
        //        changeCounter: prevState.changeCounter + 1;
        //    }
        // });
        // this.setState({
        //     persons: [
        //         {name: 'Max', age: 28},
        //         {name: 'Manu', age: 33},
        //         {name: 'Korobos', age: 36}
        //     ]
        // });
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        //es6:
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    loginHandler = () => {
      this.setState({authenticated: true});
    };

    /* <button onClick={() => this.togglePersonHandler}>Switch Name</button>  */
    render() {
        console.log('[App.js] render');
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                    isAuthenticated={this.state.authenticated}/>
            );
        }

        return (
            <div className="App">
                {/*<AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>*/}
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}
                    login={this.loginHandler}/>
                {persons}
            {/*</AuthContext.Provider>*/}
            </div>
        );
    }
}

export default App;


/*{name: event.target.value, age: 33}, */
/*<Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        click={this.switchNameHandler.bind(this, 'Max!')}
                        changed={this.nameChangeHandler}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Max!!')}
                        changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        click={this.switchNameHandler.bind(this, 'Max!!!')}
                        changed={this.nameChangeHandler}/>

                         switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 33},
                {name: 'Korobos', age: 36}
            ]
        });
    };

    const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        style.backgroundColor = 'red';

*/
{/*{this.state.persons.map((person, index) => {*/
}
{/*   return <Person*/
}
{/*       click={this.deletePersonHandler.bind(this, index)}*/
}
{/*       name={person.name}*/
}
{/*       age={person.age}*/
}
{/*       key={person.id}*/
}
{/*       changed={(event) => this.nameChangeHandler(event, person.id)} />*/
}
{/*})}*/
}
