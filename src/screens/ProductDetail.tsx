import {useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import  '../css/list.css';
import ProductDetailComponent from '../lib/components/ProductDetail';

function ProductDetail() {
  const user = useSelector((state:any) => state.UserReducer.userId);
  const location = useLocation();
return(
<div>

{ user>0?
        <Container key={location.state.item.id}>
          <ProductDetailComponent data={location.state.item} />
      </Container>:<div>Giriş yapınız</div>        
    }

 
 </div>
);

}

export default ProductDetail;