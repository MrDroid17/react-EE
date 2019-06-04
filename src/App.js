import React, { Component } from 'react';
import './App.css';
import { Button, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Sidebaritem from './components/Sidebaritem';
import Lead from './components/Lead';
import Details from './components/Details';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      list: ['Upcoming list', 'Lead list', 'Application List'],
      leadlist: [
        { id: 1, name: 'Sobhit', age: '25', profile: 'Android Developer' },
        { id: 2, name: 'Sachin', age: '25', profile: 'Web Developer' },
        { id: 3, name: 'Sauravh', age: '25', profile: 'React Developer' },
        { id: 4, name: 'Rohan', age: '25', profile: 'Angular Developer' },
      ],
      showSidebar: 'visible',
      showDetails: 'none'
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  detail = () =>{
    this.setState({
      showDetails: 'visible',
      showSidebar: 'none',
    })
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {

    return (
      <div className="App">
        <Navbar bg="light" expand="lg" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Navbar.Brand href="#home">ExtraEdge Admin</Navbar.Brand>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Form style={{ width: '40%' }} inline>
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Collapse id="basic-navbar-nav" style={{ paddingRight: '20px', width: '150px' }}>
            <NavDropdown title="Sobhit Kumar" id="basic-nav-dropdown">
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
        <div className="section" inline>
          <div className="sidebar" inline style={{display: this.state.showSidebar}}>
          <Sidebaritem  list={this.state.list} />
          </div>
          <div className="middle" inline onClick={this.detail.bind(this)}>
          <Lead ld={this.state}/>
          </div>
          <div className="last" inline style={{display: this.state.showDetails}} >
          <Details/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
