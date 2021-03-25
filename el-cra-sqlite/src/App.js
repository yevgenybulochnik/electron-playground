import {
  MemoryRouter,
  Switch,
  Route,
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'

import AccountView from './views/Accounts'
import AddUserView from './views/AddUser'
import AddGroupView from './views/AddGroup'


function App() {
  return (
    <MemoryRouter>
      <div className="App">
        <NavBar>
          <Switch>
            <Route exact path='/'>
              <AccountView/>
            </Route>
            <Route exact path='/users'>
              <AddUserView/>
            </Route>
            <Route exact path='/groups'>
              <AddGroupView/>
            </Route>
          </Switch>
        </NavBar>
      </div>
    </MemoryRouter>
  );
}

export default App;
