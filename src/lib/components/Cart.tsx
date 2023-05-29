import {useState } from 'react';
import pict from '../../img/cart_empty.png';

export default function Cart (props:any){
  const [totalPrice, setTotalPrice] = useState(1);

    return(
    <>{totalPrice>0?<div className="col-md-6 col-lg-4 mb-4 mb-md-0">
      <div className="card">
        <div className="d-flex justify-content-between p-3">
          <p className="lead mb-0">{props.data.name}</p>
         
        </div>
        {props.data.Carts.Count()}
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
        <button  className='col-3 btn btn-warning'  onClick={()=>props.cardPress(props.data.id,2)}>-</button>
   
   <button className='col-3 btn btn-success' onClick={()=>props.cardPress(props.data.id,1)}>+</button>
        </div>
        </div>
      </div>
    </div>:<img src={pict}/>
    }</> 
        
        )
    
}