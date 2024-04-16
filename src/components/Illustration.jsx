import classes from "../styles/Illustration.module.css";
import signupImage from "../assets/images/signup.svg";
import loginImage from "../assets/images/login.svg";

import { useState, useEffect } from "react";

export default function Illustration() {
  let [Login, setLogin] = useState(true);

  useEffect(() => {
    let location = window.location.href;
    if (location.includes("signup.html")) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  },[]);

  // console.log(location);
  return (
    <>
      <div className={classes.illustration}>
        <img src={Login ? loginImage : signupImage} alt="Signup" />
      </div>
    </>
  );
}
