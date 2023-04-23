import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { Container } from './module/Container';

import { LoginPage } from './module/Log';
import { SignIn } from './module/Sign_In';
import { SignUp } from './module/Sign_Up';

import { Context } from './module/Context';
import { ContextMasterPg } from './module/ContextMasterPg';
import { CreateTeacher } from './module/CreateTeacher';


function App(): JSX.Element {
  return (
    <div className="App">
      <Container.Provider>
        <BrowserRouter>
          <LoginPage>
            <SignIn />
            <SignUp />
          </LoginPage>
          <Context >
            <ContextMasterPg>
              <Routes>
                <Route path="CreateTeacher" element={<CreateTeacher />} />
              </Routes>
            </ContextMasterPg>
          </Context>
        </BrowserRouter>
      </Container.Provider>
    </div>
  );
}

export default App;
