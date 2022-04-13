import 'bulma/css/bulma.min.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./view/Home";
import Create from "./view/Create";
import Popular from "./view/Popular";
import About from "./view/About";
import SignUp from "./view/SignUp";
import Register from "./view/Register";
import ReminderPassword from './view/ReminderPassword';
// import ExchangeRates from "./view/ExchangeRates";


function App() {
  return (
    <div>
      <div>
        <nav className="navbar has-background-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://emplocity.com/pl/">
              <img src={logo} width="112" height="28" alt="" />
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/Home">
                Strona główna
              </a>

              <a className="navbar-item" href="/Create">
                Utwórz wklejkę
              </a>

              <a className="navbar-item" href="/Popular">
                Popularne wklejki
              </a>

              <a className="navbar-item" href="/About">
                O nas
              </a>

              {/* <a class="navbar-item" href="/test-graphql">
              TEST-GRAPHQL
              </a>  */}

            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary" href="/Register">
                    <strong>Zarejestruj się</strong>
                  </a>
                  <a className="button is-light" href="/SignUp">
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
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Register" element={<Register />} />
            {/* <Route path="/test-graphql" element={<ExchangeRates/>} /> */}
            <Route path="/ReminderPassword" element={<ReminderPassword />} />
          </Routes>
        </Router>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>PasteBin</strong>
            {' '}
            by
            <a href="https://github.com/Arshereq/Jokerski-git/"> Jokerski Team</a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
export default App;
