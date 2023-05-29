import {useState } from 'react';
import pict from '../../img/cart_empty.png';

export default function Cart (props:any){
  const [totalPrice, setTotalPrice] = useState(1);

    return(
      <>
       <div className="col-md-4 col-sm-6">
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
                 onClick={()=>props.cardPress(props.data.id,2)}
                 data-abc="true">- </a>
                  {" "+props.data?.carts?.length+" "}
                   <a className="btn btn-outline-primary btn-sm" 
                 onClick={()=>props.cardPress(props.data.id,1)}
                 data-abc="true"> +</a>
               </div>
             </div>
           </div>
      </>
   
        
        )
    
}