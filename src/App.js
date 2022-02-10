import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import useGlobal from './hooks/useGlobal';
import './App.css';
function ProtectedRoutes(props) {
  const { token } = useGlobal();

  return (
    <Route
      render={() => (token ? props.children : <Redirect to="/" />)}
    />
  );
}
function App() {
  return (
    <Router>
      <Switch>
        <GlobalProvider>
          <Route path={['/', '/login']} exact component={Login} />
          <Route path='/cadastro' exact component={Cadastro} />
          <ProtectedRoutes>
            <Route path='/home' exact component={Home} />
          </ProtectedRoutes>

        </GlobalProvider>
      </Switch>
    </Router>
  );
}

export default App;
