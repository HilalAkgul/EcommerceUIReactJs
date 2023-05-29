import Login from './screens/Login';
import ProductDetail from './screens/ProductDetail';
import CartList from './screens/CartList';
import './App.css';
import ProductList from './screens/ProductList';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ServerManager from './lib/services/ServerManager';

function App() {
  const cartState = useSelector((state:any) => state.CartReducer.cartCount)
  const [cart,setCart] = useState(localStorage.getItem('cartCount'));
  const user=useSelector((state:any) => state.UserReducer.userId);
  var localUserId=localStorage.getItem('userId');
  var dispatch=useDispatch();
 
useEffect(()=>{
  const fetchCarts= async () => {  
    dispatch({
      type:'login',
      payload:localUserId
    });
    const res = await ServerManager.Carts.getCartCount(localUserId);

    if (res.data) {
      localStorage.setItem('cartCount',res.data);
      dispatch({
        type:'CartCount',
        payload:res.data
      });
      
    }
   
  };

  fetchCarts();

 
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
      (localUserId!=null && localUserId!="")?     <Nav.Link href="/productlist">ProductList</Nav.Link>:null}
            {
      (localUserId!=null&& localUserId!="")?   <Nav.Link href="/login" onClick={logout}>Logout</Nav.Link>:
       <Nav.Link href="/login">Login</Nav.Link>
        
     }
                     
         { !(localUserId!=null&& localUserId!="")?null:  <Nav.Link href="/cart">
           Cart
            <Badge>
            {cartState!=null?cartState:cart}
            </Badge>
           </Nav.Link>
            
    }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes >
      <Route path="" element={
     !(user!=null && user!="")&&!(localUserId!=null&& localUserId!="")? <Navigate to="/login" />: <Navigate to="/productlist" />
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

