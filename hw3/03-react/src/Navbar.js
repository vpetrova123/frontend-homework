import { Route, Link, Switch } from 'react-router-dom';

// import views
import Houses from './routes/Houses';
import Home from './routes/Home';
import Search from './routes/Search';
import NoMatch from './routes/NoMatch';

function Navbar(props) {
  const { characters } = props;
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/search">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/houses">
                Houses
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search title="Search for a Character" characters={characters} />
        </Route>
        <Route path="/houses">
          <Houses title="Charts Page" characters={characters} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default Navbar;
