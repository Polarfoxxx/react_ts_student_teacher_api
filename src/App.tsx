import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Container } from './module/Container';
import { LoginPage } from './module/Log';
import { Context } from './module/Context';


function App(): JSX.Element {

  if (localStorage.getItem("authenticationKey") !== null) {
    return (
      <div className="App">
        <Container.Provider>
          <LoginPage />
        </Container.Provider>
      </div>
    )
  }

  return (
    <div className="App">
      <Container.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/LoginPage.tsx" element={<LoginPage />} />
          </Routes>
          <Context />
        </BrowserRouter>
      </Container.Provider>
    </div>
  );
}

export default App;
