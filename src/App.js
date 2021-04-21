import Add from './components/Add';
import Click from './components/Click';
import Nav from './components/Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <main>
      <switch>
      <Route exact path="/" />
      <Route exact path="/services" />
      <Route exact path="/contact"/>
      </switch>
      <Add />
      <Click />
    </main>
    </Router>
  );
}

export default App;
