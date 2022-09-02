import './App.css';

import About from "./About";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <div className="home">
        <Navigation />
        <About/>
      </div>
    </div>
  );
}

export default App;
