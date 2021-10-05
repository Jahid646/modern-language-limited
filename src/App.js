
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AllCourses from './components/AllCourses/AllCourses';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
     <Router>
       <Header></Header>
       <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route path="/home">
              <Home></Home>
          </Route>

          <Route path="/courses">
              <AllCourses></AllCourses>
          </Route>

          <Route path="/about">
              <AboutUs></AboutUs>
          </Route>

          <Route path="/contact">
              <ContactUs></ContactUs>
          </Route>

          <Route path="*">
              <NotFound></NotFound>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     
    </div>
  );
}

export default App;
