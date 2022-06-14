import React from "react";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

import { Container } from "./styles/App.styles";

const App = () => {

  // const [code, setCode] = useState('');

  // useEffect(() => {

  //   async function getToken() {
  //     const response = await fetch('/auth/token');
  //     const json = await response.json();
  //     setCode(json.access_token);
  //   }

  //   getToken();

  // }, []);

  const code = new URLSearchParams(window.location.search).get("code");
  
  return <Container>{code ? <Dashboard code={code} /> : <Login />}</Container>;
};

export default App;
