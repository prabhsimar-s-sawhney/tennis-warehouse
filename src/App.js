import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route exact path="/products" >
          <Layout/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App;
