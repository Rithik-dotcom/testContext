//parent
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Section from './components/SectionThree/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home />
      <About /> */}
      <Section/>
    </div>
  );
}

export default App;
