import Login from './screens/Login';
import ProductDetail from './screens/ProductDetail';
import CartList from './screens/CartList';
import './App.css';
import ProductList from './screens/ProductList';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ServerManager from './lib/services/ServerManager';

function App() {
  const cart = useSelector((state:any) => state.CartReducer.cartCount)
  const user = useSelector((state:any) => state.UserReducer.userId);

  var dispatch=useDispatch();
  
useEffect(()=>{
  const fetchCarts= async () => {
    const res = await ServerManager.Carts.getCartCount(user);

    if (res.data) {
      dispatch({
        type:'CartCount',
        payload:res.data
      });
      
    }
  };

  fetchCarts();
  const userId=localStorage.getItem('userId');

  dispatch({
    type:'login',
    payload:userId
  });

},[]
);
  const logout=()=>{
    dispatch({
      type:'logout'
    });
    localStorage.setItem('userId',"");
  }

  return (
    <BrowserRouter> 
  <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MoveTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {
      (user>0)?     <Nav.Link href="/productlist">ProductList</Nav.Link>:null}
            {
      !(user>0)?  <Nav.Link href="/login">Login</Nav.Link>:
      <Nav.Link href="/login" onClick={logout}>Logout</Nav.Link>
      
     }
           
            
         { !(user>0)?null:  <Nav.Link href="/cart">
           Cart
            <Badge>
            {cart}
            </Badge>
           </Nav.Link>
            
    }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes >
      <Route path="" element={
     !(user>0)? <Navigate to="/login" />: <Navigate to="/productlist" />
     } />
        
      <Route path="productlist" element={<ProductList />} />
      <Route path="productdetail/:id" element={<ProductDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<CartList />} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;
