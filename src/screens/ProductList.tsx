import { useDispatch, useSelector } from 'react-redux';
import  '../css/list.css';
import Product from '../lib/components/Product';
import ServerManager from '../lib/services/ServerManager';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  
  const [productList, setProductList] = useState([]);
  let navigate = useNavigate();
    const cart = useSelector((state:any) => state.CartReducer.cartCount)
    var user =localStorage.getItem('userId');
    var dispatch=useDispatch();
   
    useEffect(() => { 
   
      const fetchProducts= async () => {
        const productListRes = await ServerManager.Products.getProducts();

        if (productListRes.data) {
        
          setProductList(productListRes.data);
       
        }
      };
  
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
     // alert("Removed");
    }
     
      
      
    };
    
return(

<div>
    { user!=null && user !=""?
        
<section style={{backgroundColor:"#eee"}}>
  <div className="container py-5">
    <div className="row">
    {productList.map((x:any)=>
<Product key={x.id} data={x}/>
    )}
    </div>
  </div>
</section>

        :<div>Giriş Yapınız</div>
    }

 
 </div>
);

}

export default ProductList;