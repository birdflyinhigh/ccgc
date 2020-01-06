import React from 'react';
import {Container} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Topics from "./components/Words";
import Home from "./components/Home";


class Quiz extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (

            <Router>
                <div className="App">
                    <NavBar/>
                    <Switch>
                        <Route path="/" component={Topics}/>
                        <Route path="/quiz" component={Topics}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default Quiz;
