import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact';
import ReferAndEarn from './Pages/ReferAndEarn/ReferAndEarn';
import About from './Pages/About/About'
import Login from './Pages/Auth/Login/Login'
import RegisterAsStudent from './Pages/Auth/Register/ResgisterStudent'
import ResgisterTeacher from './Pages/Auth/Register/RegisterTeacher';
import Error404 from './Pages/Error404/Error404';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/student-dashboard' exact component={StudentDashBoard}/>
          <Route path='/teacher-dashboard' exact  component={TeacherDashBoard}/>
          <Route path='/contact-us' exact component={Contact}/>
          <Route path='/invite' exact component={ReferAndEarn}/>
          <Route path='/signup-as-student'  component={RegisterAsStudent}/>
          <Route path='/signup-as-teacher'  component={ResgisterTeacher}/>
          <Route path='/signin'  component={Login}/>
          <Route path='/about'  component={About}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
