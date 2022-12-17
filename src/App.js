import React from "react";
import { hot } from "react-hot-loader";
import axios from "axios";

const App = () => {
  const [msg, setMsg] = React.useState(null);
  React.useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => setMsg(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1 className="App">Welcome Home!</h1>
      {msg ? <h2>{msg}</h2> : null}
    </>
  );
};

export default hot(module)(App);
