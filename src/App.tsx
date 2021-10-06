import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div data-testid="app" className="app">
      <Navbar text="Ahmed's ReacTesting 🥽🧪🔬⚗️ &reg;" />
      <main>
        <h1>Hello Testing Library</h1>
      </main>
    </div>
  );
}

export default App;
