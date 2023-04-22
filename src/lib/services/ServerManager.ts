import axios from 'axios';




const User = {
    login: (username:string,password:string) =>
     axios.post('https://localhost:7027/api/User/login?username='+username+'&password='+password+'')
   
  };
  const Products = {
    getProducts: () => axios.get('https://localhost:7027/api/Product/ListProduct'),
    getProductCarts: (userId:number) => axios.get('https://localhost:7027/api/Product/ProductCartList?userId='+userId+'')
   
  };
  const Carts = {
    addCart: (productId:number,userId:number) =>
     axios.post('https://localhost:7027/api/Cart/AddCart?productId='+productId+'&userId='+userId+''
      ),
      removeCart: (productId:number,userId:number) =>
      axios.post('https://localhost:7027/api/Cart/RemoveCart?productId='+productId+'&userId='+userId+''
       ),
    getCartCount: (userId:number) => axios.get('https://localhost:7027/api/Cart/CartCount?userId='+userId+''),
    getCartTotalPrice: (userId:number) => axios.get('https://localhost:7027/api/Cart/CartTotalPrice?userId='+userId+'')
   
  };
  export default {
    User,
    Products,
    Carts
  };