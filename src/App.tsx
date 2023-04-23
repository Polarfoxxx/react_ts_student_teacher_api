import './App.css';

import { Container } from './module/Container';

import { LoginPage } from './module/LogPage';
import { SignIn } from './module/Sign_In';
import { SignUp } from './module/Sign_Up';

function App(): JSX.Element {
  return (
    <div className="App">
          <Container.Provider>
            <LoginPage>
                <SignIn/>
                <SignUp/>
            </LoginPage>

            
          </Container.Provider>
    </div>
  );
}

export default App;
