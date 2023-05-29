import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import  '../css/list.css';
import ServerManager from '../lib/services/ServerManager';
import swal from 'sweetalert';
import Cart from '../lib/components/Cart';

function CartList() {
    const [totalPrice, setTotalPrice] = useState(1);
    const [productList, setProductList] = useState([]);
    const cart = useSelector((state:any) => state.CartReducer.cartCount);
    const user = useSelector((state:any) => state.UserReducer.userId);
    var dispatch=useDispatch();
  
    useEffect(() => {  
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
        else{
          setTotalPrice(0);
        }
      };
    
      fetchTotalPrice();
      fetchProducts();
    },[cart]);

    const onPress = async (productId: number,type:number) => {
      if(type==1){
        const res = await ServerManager.Carts.addCart(productId,user);
        dispatch({
          type:'CartCount',
          payload:cart+1
        });
        swal("Başarıyla Eklendi");
      }
      else if(type==2){
      const res = await ServerManager.Carts.removeCart(productId,user);
      dispatch({
        type:'CartCount',
        payload:cart-1
      });
  
      swal("Başarıyla Silindi");
      }
    
    };
    
return(
<div>
<Container >
  {user!=null && user!=""? 
    <div className="container py-5">
    <div className="row">
    {productList.map((x:any)=>
   <Cart key={x.id} data={x} cardPress={onPress}/>
    )}
    </div>
  </div>
:<div>Giriş yapınız</div>
}
 </Container>
  
 
 </div>
);

}

export default CartList;


