import { Routes, Route } from 'react-router-dom';
import './App.css';
import TopBar from './navigation';
import Login from './login';
import Signup from './Signup';
import Welcome from './Welcome'; // Import Welcome component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TopBar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/welcome' element={<Welcome />} /> {/* New Welcome route */}
      </Routes>
    </div>
  );
}

export default App;
