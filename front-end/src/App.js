import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

function App() {
  return (
    <div>
      <div className='input-bg'>
       <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
        </Routes>
       </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
