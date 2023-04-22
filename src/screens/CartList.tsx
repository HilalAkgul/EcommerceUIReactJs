import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import internal from 'stream';
import { addSyntheticTrailingComment } from 'typescript';
import  '../css/list.css';
import ServerManager from '../lib/services/ServerManager';


function CartList() {
  const [totalPrice, setTotalPrice] = useState(0);
    const [productList, setProductList] = useState([]);
    const cart = useSelector((state:any) => state.CartReducer.cartCount)

    const user = useSelector((state:any) => state.UserReducer.userId);
    var dispatch=useDispatch();
    const fetchProducts= async () => {
        const productListRes = await ServerManager.Products.getProductCarts(user);

        if (productListRes.data) {
        
          setProductList(productListRes.data);
       
        }
      };
      const fetchTotalPrice= async () => {
        const res= await ServerManager.Carts.getCartTotalPrice(user);

        if (res.data) {
        
         setTotalPrice(res.data);
       
        }
      };
    useEffect(() => {
      
      fetchTotalPrice();
      fetchProducts();
    },[]);
    const onPress = async (productId: number,type:number) => {
      if(type==1){
        const res = await ServerManager.Carts.addCart(productId,user);
        dispatch({
          type:'CartCount',
          payload:cart+1
        });
        alert("Added");
      }
    else if(cart>0){
      const res = await ServerManager.Carts.removeCart(productId,user);
      dispatch({
        type:'CartCount',
        payload:cart-1
      });
      alert("Removed");
    }
    fetchProducts();
    fetchTotalPrice();
      
    };
    
return(
<div>
<Container >
  {user>0?
<div className="row" >
    {user>0?
        productList.map((x:any)=>
       
<div className="column mx-auto col-6"  key={x.id}>
    <div className="card">
      <h3>{x.name}</h3>
      <p>{x.description}</p>
      <div className='row d-flex justify-content-center'>
      <button  className='col-3 btn btn-warning'  onClick={()=>onPress(x.id,2)}>-</button>
     
     <button className='col-3 btn btn-success' onClick={()=>onPress(x.id,1)}>+</button>
    
     </div>
    </div>
   

    </div>
 
        ):<div>Giriş yapınız</div>
    }
   <div className="col-12">
   <h3>Total Price {totalPrice} TL</h3>
   </div>

  </div>:<div>Giriş yapınız</div>
}
 </Container>
  
 
 </div>
);

}

export default CartList;