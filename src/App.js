import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
