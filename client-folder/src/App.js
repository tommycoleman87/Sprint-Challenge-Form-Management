import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormikUserForm from './components/UserForm';
import RenderGet from './components/RenderGet'
class App extends React.Component {
  constructor(){
    super();
  }

  render() {
  return (
    <div className="App">
      <FormikUserForm />
      <RenderGet />
    </div>
  );
  }
}

export default App;
