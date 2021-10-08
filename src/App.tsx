import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Form from './components/layout/Form';

function App() {
  return (
    <div data-testid="app" className="app">
      <Navbar text="Faraz's Experiments 🥽🔬&reg;" />
      <main>
        <p>👋 Hi there Champ, let me make things easy. You will be doing here entering inputs and checking either the components are working fine or not, that is what we say <strong>Manual Testing</strong>, Sure go on.
        <br />
        But the main focus of this project is implemented <strong>Automatic Testing</strong>. Throughout all this project I was exploring the library. So, all my tech guys if wanna see those testing practices of mine. See code in the Github Repo using GitHub Code Button up in the navbar.</p>
        <h1>Testing React Elements <small>using '@testing-library/react'</small></h1>
        <Form />
      </main>
    </div>
  );
}

export default App;
