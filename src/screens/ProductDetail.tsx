import {useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import  '../css/list.css';

function ProductDetail() {
  const user = useSelector((state:any) => state.UserReducer.userId);
    const location = useLocation();
return(
<div>

{ user>0?
        <Container key={location.state.item.id}>
<div className="">
    <div className="card">
      <h3>{location.state.item.name}</h3>
      <p>{location.state.item.price} TL</p>
      <p>{location.state.item.description}</p>
      <div className='row d-flex justify-content-center'>
     </div>
    </div>
  </div></Container>:<div>Giriş yapınız</div>
        
    }

 
 </div>
);

}

export default ProductDetail;