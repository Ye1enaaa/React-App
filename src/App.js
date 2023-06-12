//import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard/dashboard.jsx';
function App() {
  return (
    <Routes>
      <Route path="/dashboard" exact element={<Dashboard/>}></Route>
    </Routes>
  );
}

export default App;
