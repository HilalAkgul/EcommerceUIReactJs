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
  const [cartCount,setCartCount]=useState(0);
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
      setCartCount(res.data);
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
        <Navbar.Brand href="#home">Hilal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {
      (localUserId!=null && localUserId!="")? 
      <NavLink className={"nav-link"}  to="/productlist">ProductList</NavLink>:null}
        { !(localUserId!=null&& localUserId!="")?null: 
         <NavLink className={"nav-link"}  to="/cart">
           Cart
            <Badge>
            {cartState!=null?cartState:cartCount}
            </Badge>
           </NavLink>
            
    }
               {
      (localUserId!=null&& localUserId!="")?   
      <NavLink className={"nav-link"}  to="/login" onClick={logout}>Logout</NavLink>:
       <NavLink className={"nav-link"} to="/login">Login</NavLink>
        
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

