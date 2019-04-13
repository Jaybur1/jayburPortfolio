import React, { Component } from 'react';
import Nav from './components/layout/Nav';
import { Switch,Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashbord';
import ProjectDetails from './components/project/ProjectDetails';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import CreateProject from './components/project/CreateProject';
import Main from './components/layout/Main';
import Projects from './components/layout/Projects';
import About from './components/layout/About';
import Contacts from './components/layout/Contacts';
import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component = { Main } />
          <Route path='/dashboard' component = { Dashboard } />
          <Route path='/login' component = { Login } />
          <Route path='/projects' component = { Projects } />
          <Route path='/about' component = { About } />
          <Route path='/contacts' component = { Contacts } />
          <Route path='/create-project' component ={ CreateProject } />
        </Switch>
        {/*<Switch>
          <Route exact path='/' component = { Dashboard } />
          <Route path='/project/:id' component = { ProjectDetails } />
          <Route path='/login' component = { Login } />
          <Route path='/signup' component = { Signup } />
          <Route path='/create-project' component ={ CreateProject } />
        </Switch>*/}
        </div>
    );
  }
}

export default App;
