import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Wikistack from './Wikistack';
import Write from './Write';
import SinglePage from './SinglePage';

const Root = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <NavLink to="/wiki">Wikistack</NavLink>
            {/* <NavLink to="/wiki">Index</NavLink> */}
            <NavLink to="/wiki/add">Write</NavLink>
            <NavLink to="/users">Users</NavLink>
          </nav>
          <main>
            <Switch>
              <Route exact path="/wiki" component={Wikistack} />
              <Route exact path="/wiki/add" component={Write} />
              <Route exact path="/wiki/:slug" component={SinglePage} />
              <Route exact path="/wiki/:slug/similar" component={Wikistack} />
            </Switch>
          </main>
          <footer>
            <p>WIKISTACK with React by Molly C. Clarke</p>
          </footer>
        </div>
      </Router>
    </div>
  );
};

export default Root;
