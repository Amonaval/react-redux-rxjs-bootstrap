import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubComponent from './components/subComponent/subComponent.Connect';


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" render={(props) => <SubComponent {...props} />} />
                        </Switch>
                    </div>
                </Router>
        </div>
        );
    }
}

export default App;
