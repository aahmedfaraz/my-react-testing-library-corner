import React from 'react';
import './App.css';
// Images
import NavbarTestsOutput from './assets/images/navbar_tests_output.png';
import FormTestsOutput from './assets/images/form_tests_output.png';
import MUITestsOutput from './assets/images/material_ui_form_tests_output.png';
// React Components
import Navbar from './components/layout/Navbar';
import Form from './components/layout/Form';
import MaterialUIForm from './components/material-ui/MaterialUIForm';

function App() {
  return (
    <div data-testid="app" className="app">
      {/* NAVBAR */}
      <Navbar text="Faraz's Experiments 🥽🔬&reg;" />
      <main>
        <h3>This is React-Testing practice on <span>React with Typescript</span> and <span>Material UI Components</span></h3>
        <p>👋 Hi there Champ, let me make things easy. You will be doing here entering ✔️inputs and checking either the components are working fine or not, that is what we say <strong>Manual Testing 🐢</strong>, Sure go on.
        <br />
        But the main focus🎯 of this project is implemented <strong>Automatic Testing ⚡</strong>. Throughout all this project I was exploring🧭 the library. So, any from my tech guys if wanna see those testing practices of mine. See the Code💻 and README Docs📖 in the Github Repo using GitHub Code Button up in the navbar.</p>
        <p>- Enjoy ☕ -</p>
        {/* Navbar Testing, Output */}
        <h4>Navbar Testing, Output</h4>
        <img className="output-image" src={NavbarTestsOutput} alt="Navbar Testing, Output" />
        {/* REACT COMPONENTS */}
        <h1>Testing React Elements <small>using '@testing-library/react'</small></h1>
        <Form />
        {/* React Components Testing, Ouput */}
        <h4>React Components Testing, Output</h4>
        <img className="output-image" src={FormTestsOutput} alt="React Components Testing, Output" />
        {/* MATERIAL UI COMPONENTS */}
        <h1>Testing Material UI Elements <small>using '@testing-library/react'</small></h1>
        <MaterialUIForm />
        {/* Material UI Components Testing, Output */}
        <h4>Material UI Components Testing, Output</h4>
        <img className="output-image" src={MUITestsOutput} alt="Material UI Components Testing, Output" />
      </main>
    </div>
  );
}

export default App;
