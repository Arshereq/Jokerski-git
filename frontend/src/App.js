import 'bulma/css/bulma.min.css';
import logo from './logo.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./views/Home";
import Create from "./views/Create";
import Popular from "./views/Popular";
import About from "./views/About";
import SignUp from "./views/SignUp";
import Register from "./views/Register";
import ExchangeRates from "./views/ExchangeRates";
import ReminderPassword from './views/ReminderPassword';


function App() {
  return (
    <div>
      <div>
        <nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://emplocity.com/pl/">
              <img src={logo} width="112" height="28" />
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

              <a class="navbar-item" href="/test-graphql">
              TEST-GRAPHQL
              </a> 


            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary" href="/Register">
                    <strong>Zarejestruj się</strong>
                  </a>
                  <a class="button is-light" href="/SignUp">
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
            <Route path="/test-graphql" element={<ExchangeRates/>} />
            <Route path="/ReminderPassword" element={<ReminderPassword/>}/>
          </Routes>
        </Router>
      </div>
      <section class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>PasteBin</strong> by <a href="https://github.com/Arshereq/Jokerski-git/">Jokerski Team</a>.
          </p>
        </div>
      </section>
    </div>
  )
}
export default App;