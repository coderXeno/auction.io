import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import socketIO from "socket.io-client";
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
const socket = socketIO.connect('http://localhost:8000');

function App() {
  return (
    <Router>
      <div>
        <Nav socket = {socket} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/add' element={<AddProduct socket={socket} />} />
          <Route
            path='/products/bid/:name/:price'
            element={<AddProduct socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;