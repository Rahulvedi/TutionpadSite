import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom'
import Home from './Pages/Home/Home'
// import About from './Pages/About/About'
import Login from './Pages/Auth/Login/Login'
import RegisterAsStudent from './Pages/Auth/Register/ResgisterStudent'
import ResgisterTeacher from './Pages/Auth/Register/RegisterTeacher';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signup-as-student'  component={RegisterAsStudent}/>
          <Route path='/signup-as-teacher'  component={ResgisterTeacher}/>
          <Route path='/signin'  component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
