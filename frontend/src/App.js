import "bulma/css/bulma.min.css";
import React, { useState, useEffect } from "react";
import Apprender from "./Apprender";

function toggleBurger() {
  const burgerIcon = document.querySelector("#burger");
  const navbarMenu = document.querySelector("#nav-links");

  burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
  });
}



function App() {
  const [tokenAuth, setTokenAuth] = useState(localStorage.getItem('token') || false);
  const isLogIn = (tok) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setTokenAuth(false);
      console.log(token);
    } else {
      setTokenAuth(true);
    }
  }
  console.log(tokenAuth);
  return(
    <Apprender tokenAuth={tokenAuth} toggleBurger={toggleBurger} isLogIn={isLogIn}/>
  )
}
export default App;
