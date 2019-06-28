import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Menus from './components/Menus';
import Routes from './routes';

class App extends Component {
    loadRoute = (Routes) => {
        var result = null;
        result = Routes.map((route, key) => {
            return  <Route key={key} path={route.path} exact={route.exact} component={route.main} />;
        })
        return result;
    }
    render(){
        return (
        <Router>
            <div>
                <Menus></Menus>
                <div className="container">
                    <Switch>
                        {this.loadRoute(Routes)}
                    </Switch>
                </div>
            </div>
        </Router>
        );
    }
}

export default App;
