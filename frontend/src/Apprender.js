
import React from 'react'
import "bulma/css/bulma.min.css";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./view/Home";
import Create from "./view/Create";
import Popular from "./view/Popular";
import About from "./view/About";
import SignUp from "./view/SignUp";
import Register from "./view/Register";
import ReminderPassword from "./view/ReminderPassword";

export default function Apprender({tokenAuth,toggleBurger,isLogIn}) {

    console.log(localStorage.getItem('token'));
   
    if (!tokenAuth) {
        return (
          <div>
            <div>
              <nav class="navbar has-background-light">
                <div class="navbar-brand">
                  <a class="navbar-item" href="https://emplocity.com/pl/">
                    <img src={logo} width="112" height="28" />
                  </a>
                  <a class="navbar-burger" id="burger" onClick={toggleBurger}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
                <div class="navbar-menu" id="nav-links">
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
    
                    <a class="navbar-item" href="http://localhost:8000/admin/users/user/">
                      Zarządzanie użytkownikami
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
                  <Route path="/SignUp" element={<SignUp setToken={isLogIn}/>} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/ReminderPassword" element={<ReminderPassword />} />
                </Routes>
              </Router>
            </div>
            <section class="footer">
              <div class="content has-text-centered">
                <p>
                  <strong>PasteBin</strong> by{" "}
                  <a href="https://github.com/Arshereq/Jokerski-git/">
                    Jokerski Team
                  </a>
                </p>
              </div>
            </section>
          </div>
        );
      }
      return (
        <div>
          <div>
            <nav class="navbar has-background-light">
              <div class="navbar-brand">
                <a class="navbar-item" href="https://emplocity.com/pl/">
                  <img src={logo} width="112" height="28" />
                </a>
                <a class="navbar-burger" id="burger" onClick={toggleBurger}>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div class="navbar-menu" id="nav-links">
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
    
                  <a class="navbar-item" href="http://localhost:8000/admin/users/user/">
                    Zarzadzanie użytkownikami
                  </a>
                </div>
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-primary" onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload();
                      }}>
                        <strong>Wyloguj</strong>
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
                <Route path="/SignUp" element={<SignUp setToken={isLogIn}/>} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ReminderPassword" element={<ReminderPassword />} />
              </Routes>
            </Router>
          </div>
          <section class="footer">
            <div class="content has-text-centered">
              <p>
                <strong>PasteBin</strong> by{" "}
                <a href="https://github.com/Arshereq/Jokerski-git/">
                  Jokerski Team
                </a>
              </p>
            </div>
          </section>
        </div>
      );
}
