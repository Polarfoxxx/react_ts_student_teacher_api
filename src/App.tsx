import React from "react"
import "./App.css";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from './module/Container';
import { LoginPage } from './module/Log';
import { Context } from './module/Context';

function App(): JSX.Element {
  const loginPG = useNavigate()

  /* useLayautEffect nefunguje zostane clear screen */
  React.useEffect(() => {             
    localStorage.getItem("authenticationKey") === null ? loginPG("LoginPage") : loginPG("Context")
  }, [])

  return (
    <div className="App">
      <Container.Provider>
        <Routes>
          <Route path= "LoginPage" element={<LoginPage />} />
          <Route path= "Context/*" element={<Context />} />
        </Routes>
      </Container.Provider>
    </div>
  );
}

export default App;
