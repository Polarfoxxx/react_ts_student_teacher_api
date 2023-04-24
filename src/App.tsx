import './App.css';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import { Container } from './module/Container';
import { LoginPage } from './module/Log';
import { Context } from './module/Context';
import { ContextMasterPg } from './module/ContextMasterPg';


function App(): JSX.Element {

  if (localStorage.getItem("authenticationKey") === null) {
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
      <h1>fcf</h1>
      <Container.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/LoginPage.tsx" element={<LoginPage />} />
            <Route
              path="./module/Context/Component/Context.tsx"
              element={
                <Context children={<ContextMasterPg />} />}
            />
          </Routes>
        </BrowserRouter>
      </Container.Provider>
    </div>
  );
}

export default App;
