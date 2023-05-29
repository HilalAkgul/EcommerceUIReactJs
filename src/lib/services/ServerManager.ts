import axios from 'axios';




const User = {
    login: (username:string,password:string) =>
     axios.post('https://localhost:7132/api/User/login?username='+username+'&password='+password+'')
   
  };
  const Products = {
    getProducts: () => axios.get('https://localhost:7132/api/Product/ListProduct'),
    getProductCarts: (userId:any) => axios.get('https://localhost:7132/api/Product/ProductCartList?userId='+userId+'')
   
  };
  const Carts = {
    addCart: (productId:number,userId:any) =>
     axios.post('https://localhost:7132/api/Cart/AddCart?productId='+productId+'&userId='+userId+''
      ),
      removeCart: (productId:number,userId:any) =>
      axios.post('https://localhost:7132/api/Cart/RemoveCart?productId='+productId+'&userId='+userId+''
       ),
    getCartCount: (userId:any) => axios.get('https://localhost:7132/api/Cart/CartCount?userId='+userId+''),
    getCartTotalPrice: (userId:any) => axios.get('https://localhost:7132/api/Cart/CartTotalPrice?userId='+userId+'')
   
  };
  export default {
    User,
    Products,
    Carts
  };