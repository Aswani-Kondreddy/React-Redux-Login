import Login from './Components/LoginPage/loginPage';
import EmployeeList from './Components/EmployeeList/employeeList';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/Store/index';

const Routing = () => {
  return <Switch>
    <Route path="/" exact>
      <Login />
    </Route>
    <Route path="/home">
      <EmployeeList />
    </Route>
  </Switch>
}


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
