import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from './module/Container';
import { LoginPage } from './module/Log';
import { Context } from './module/Context';


function App(): JSX.Element {
  const loginPG = useNavigate()

  useEffect(() => {
    localStorage.getItem("authenticationKey") === null ? loginPG("LoginPage") : loginPG("/")
  }, [])



  return (
    <div className="App">
      <Container.Provider>
        <Routes>
          <Route path='LoginPage' element={<LoginPage />} />
          <Route path='*' element={<Context />} />
        </Routes>
      </Container.Provider>
    </div>
  );
}

export default App;
