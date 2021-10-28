import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Investors from './components/investors/Investors';

function App() {
  return (
    <div className="app">
        <Header></Header>
        <Investors>
        </Investors>
    </div>
  );
}

export default App;
