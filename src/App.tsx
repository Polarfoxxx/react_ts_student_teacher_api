import React from "react"
import "./App.css";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from './module/Container';
import { LoginPage } from './module/Log';
import { Content } from "./module/Context";

function App(): JSX.Element {
  const loginPG = useNavigate()

  /* useLayautEffect nefunguje zostane clear screen */
  React.useEffect(() => {             
    localStorage.getItem("authenticationToken") === null ? loginPG("LoginPage") : loginPG("Content")
  }, [])

  return (
    <div className="App">
      <Container.Provider>
        <Routes>
          <Route path= "LoginPage" element={<LoginPage />} />
          <Route path= "Content/*" element={<Content />} />
        </Routes>
      </Container.Provider>
    </div>
  );
}

export default App;
