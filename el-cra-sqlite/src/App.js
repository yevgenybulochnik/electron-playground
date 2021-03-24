import {
  MemoryRouter,
  Switch,
  Route,
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'


function App() {
  return (
    <MemoryRouter>
      <div className="App">
        <NavBar>
          <Switch>
            <Route exact path='/'>
              accounts
            </Route>
            <Route exact path='/users'>
              users
            </Route>
            <Route exact path='/groups'>
              groups
            </Route>
          </Switch>
        </NavBar>
      </div>
    </MemoryRouter>
  );
}

export default App;
