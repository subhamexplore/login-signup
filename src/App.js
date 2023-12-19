import './App.css';
import LoginSignup from './LoginSignup';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<LoginSignup/>}/>
    </Routes>
    </div>
  );
}

export default App;
