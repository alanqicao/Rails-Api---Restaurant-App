import React, {Component,} from 'react';
import './App.css';
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';
import {Container,} from "semantic-ui-react";
import axios from "axios";

class App extends Component {

  state ={ menus:[],};

  componentDidMount(){
    axios.get("/api/menus")
    .then( res =>{
      this.setState({menus: res.data,});
    })
    .catch( err => {
      console.log(err);
    })
  }

  addMenu=(name)=> {

  }


  updateMenu = (id) => {

  }

  deleteMenu =(id)=>{

  }




render(){
  return (
    <Container style={{ padding: "30px 0", }}>
        <MenuForm addItem={this.addItem} />
        <br />
        <br />
        <MenuList
          menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
      </Container>
  );
}
}

export default App;
