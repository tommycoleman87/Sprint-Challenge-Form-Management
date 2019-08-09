import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormikUserForm from './components/UserForm';
import RenderGet from './components/RenderGet'
class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
  return (
    <div className="App">
      <FormikUserForm user={this.state} setUser={this.setState}/>
      <RenderGet />
    </div>
  );
  }
}

export default App;
