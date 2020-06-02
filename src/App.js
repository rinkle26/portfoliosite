import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={

      title: 'Rinkle\'s portfolio',
      headerLinks:[
        {title:'Home', path: '/'},
        {title:'About', path: '/about'},
        {title:'Contact', path: '/contact'}
      ],
      home:{
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference.',
        text: 'Checkout my projects below'
      },
      about:{
        title: 'About Me',
      },
      contact:{
        title: 'Let\'s chat'
      }


    }

  }
  render(){
   
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Rinkle Seth</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
    
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </Container>
       
        <Container className="p-0" fluid={true}>
          <Route path="/" exact render={()=> <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/> }/>
          <Route path="/about" render={()=> <AboutPage title={this.state.about.title}/>}/>
          <Route path="/contact" render={()=> <ContactPage title={this.state.contact.title}/>}/>
          <Footer/>
        </Container>
   
   
      </Router>
    );


  }
  
}

export default App;
