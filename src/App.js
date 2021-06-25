import './App.scss';
import Home from './Pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Discover from './Pages/Discover';
function App() {
  return (
    <div className="App">
    <Router>
    <Route exact path='/' component={Home}/>
    <Route path='/discover' component={Discover}/>
    </Router>
    </div>
  );
}

export default App;
