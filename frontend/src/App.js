import 'bulma/css/bulma.min.css';
import logo from './logo.svg'
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Create from "./components/Create";
import Popular from "./components/Popular";
import About from "./components/About";

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const countiresQuery = gql` {
  countries {
    name
    population
    inNato
  }
}`

function App() {
  return (
    <div>
      <nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" >
            <img src={logo} width="112" height="28"/>
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="/Home">
              Strona główna
            </a>

            <a class="navbar-item" href="/Create">
              Utwórz wklejkę
            </a>

            <a class="navbar-item" href="/Popular">
              Popularne wklejki
            </a>

            <a class="navbar-item" href="/About">
              O nas
            </a>


          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Zarejestruj się</strong>
                </a>
                <a class="button is-light">
                  Zaloguj się
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Popular" element={<Popular />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>PasteBin</strong> by <a href="https://github.com/Arshereq/Jokerski-git/">Jokerski Team</a>. 
    </p>
  </div>
</footer>
    </div>
  )
}
export default App;