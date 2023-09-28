
import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className='App'>
      <div className=" bg-gray-900 flex flex-col">



        <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
        <Routes>

          <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}></Route>
          <Route path='/login' element={<Login setisLoggedIn={setisLoggedIn} />}></Route>
          <Route path='/signup' element={<Signup setisLoggedIn={setisLoggedIn} />}></Route>
          <Route path='/dashboard' element={<PrivateRoute isLoggedIn={isLoggedIn} >
            <Dashboard />
          </PrivateRoute>
          }></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
