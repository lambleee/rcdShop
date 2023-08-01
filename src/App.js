import { useState } from 'react';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Detail from './Components/Detail';
import About from './Components/About'
import Member from './Components/Member';
import Home from './Components/Home'

function App() {

  let [goods, setGoods] = useState(data)
  let navigate = useNavigate();

  return (

    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home goods={goods}/>}/>
        <Route path='/detail/:id' element={<Detail goods={goods}/>}/>
        <Route path='/about' element={<About/>}>
          <Route path="member" element={<Member/>}/>
        </Route>
        <Route path='*' element={<div className='nopage'><div className='nopageline'>404</div></div>}/>
      </Routes>
      
    </div>

  );
}

export default App;
