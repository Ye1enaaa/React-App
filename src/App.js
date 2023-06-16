//import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard/dashboard.jsx';
import Register from './auth/register';
import Login from './auth/login';
import UserListPreview from './user_list/userlist';
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Register/>}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/dashboard" exact element={<Dashboard/>}>
        <Route path="users" exact element={<UserListPreview/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
