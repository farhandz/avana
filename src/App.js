import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './page/Home/HomePage';
import Sidebar from './components/Sidebar';
import Hq from './page/Hq/Hq';

function App() {
  return (
    <>
    <Router>
        <Switch >
            <Route path="/" exact={true} >
              <HomePage />
            </Route>
            <Route path="/hq" >
              <Hq />
            </Route>

        </Switch>
    </Router>
    </>
    
  );
}

export default App;
