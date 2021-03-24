import {
  MemoryRouter,
  Switch,
  Route,
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'


function App() {
  return (
    <MemoryRouter>
      <div className="App">
        <Navbar>
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
        </Navbar>
      </div>
    </MemoryRouter>
  );
}

export default App;
