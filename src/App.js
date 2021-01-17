import Navigation from './components/Navigation';
import Home from './components/home/Home';
import About from './components/about_us/About';
import Events from './components/events/Events';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className="gtco-loader" />
      <div id="page">   
        <Router>
        <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
        <Footer />
        </Router>
      </div>
      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="icon-arrow-up" /></a>
      </div>
    </div>
  );
}

export default App;
