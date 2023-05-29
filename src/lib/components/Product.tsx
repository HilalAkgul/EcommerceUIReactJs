import { useDispatch, useSelector } from "react-redux";
import ServerManager from "../services/ServerManager";
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product (props:any){
  const user = useSelector((state:any) => state.UserReducer.userId);
  var dispatch=useDispatch();
  
  const addCart= async (e:any) => {
    const addProduct = await ServerManager.Carts.addCart(e,user);
  
    if (addProduct.data) {
      const res = await ServerManager.Carts.getCartCount(user);
      dispatch({
        type:'CartCount',
        payload:res.data
      });
      swal("Başarıyla Eklendi");
       
      
    }
  }

    return(
    <>
           <div className="col-md-4 col-sm-6 margin-top0">
             <div className="card mb-30">
              <a className="card-img-tiles" href="#" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img className="img-fluid"
                    
                    src={props.data.picture} alt={props.data.name} /></div>              
                </div></a>
               <div className="card-body text-center">
                 <h4 className="card-title">{props.data.name}</h4>
                 <p className="text-muted">{props.data.price} TL</p>
                 <a className="btn btn-outline-primary btn-sm" 
                 onClick={()=>addCart(props.data.id)}
                 data-abc="true">Sepete Ekle</a>
               </div>
             </div>
           </div>

    </>

        )
    
}