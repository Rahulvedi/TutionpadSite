import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact';
import ReferAndEarn from './Pages/ReferAndEarn/ReferAndEarn';
import Teacher from './Pages/Teacher/Teacher';
import About from './Pages/About/About';
import Login from './Pages/Auth/Login/Login';
import RegisterAsStudent from './Pages/Auth/Register/ResgisterStudent';
import ResgisterTeacher from './Pages/Auth/Register/RegisterTeacher';
import Error404 from "./Pages/Error404/Error404";
import StudentDashBoard from './Pages/DashBoard/StudentDashBoard/StudentDashBoard'
import TeacherDashBoard from './Pages/DashBoard/TeacherDashBoard/TeacherDashBoard'
import {ScrollToTop} from './Components/default'
import GlobalStyle from './GlobalStyles';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/student-dashboard' component={StudentDashBoard}/>
          <Route path='/teacher-dashboard'  component={TeacherDashBoard}/>
          <Route path='/contactus' exact component={Contact}/>
          <Route path='/invite' exact component={ReferAndEarn}/>
          <Route path='/teacher' exact component={Teacher}/>
          <Route path='/signup-as-student'  component={RegisterAsStudent}/>
          <Route path='/signup-as-teacher'  component={ResgisterTeacher}/>
          <Route path='/signin'  component={Login}/>
          <Route path='/aboutus'  component={About}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
