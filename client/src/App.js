import React, { useEffect, useState } from "react";
import classes from "./App.module.scss";
import axios from "axios";
import NavBar from "./components/navbar";
import HomeScreen from "./components/HomeScreen";

// Sadly we use polling mechanism, will use socket.io next time

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      axios
        .get("/latest-message")
        .then(response => setMessage(response.data.message))
        .catch(error => console.log(error));
    }, 5000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className={classes["main-content"]}>
      <NavBar />
      <HomeScreen message={message} />
    </div>
  );
}

export default App;
