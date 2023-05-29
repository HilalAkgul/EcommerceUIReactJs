import { useDispatch, useSelector } from "react-redux";
import ServerManager from "../services/ServerManager";
import swal from 'sweetalert';

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
       
        <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">{props.data.name}</p>
           
          </div>
          <img src={props.data.picture}
            className="card-img-top" alt="Gaming Laptop" />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small">{props.data.CurrentPrice}<a href="#!" className="text-muted"></a></p>
              <p className="small text-danger"><s>{props.data.price}</s></p>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0"></h5>
              <h5 className="text-dark mb-0"></h5>
            </div>

          <div>
          <button className="btn btn-success" onClick={(x)=>addCart(props.data.id)}>
          <i className="fa fa-id-badge"></i>
            Sepete Ekle</button>
          </div>
          </div>
        </div>
      </div>
        )
    
}