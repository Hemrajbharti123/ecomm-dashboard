import './App.css'
import {} from 'react-bootstrap'
import Header from './header';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import React from 'react';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>Project</h1>
      <Routes>
      <Route path="/login"element={<Login/>}></Route>
      </Routes>
      <Routes>
      <Route path="/register"element={<Register/>}></Route>
      </Routes>
      <Routes>
      <Route path="/add"element={<AddProduct/>}></Route>
      </Routes>
      <Routes>
      <Route path="/update"element={<UpdateProduct/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
