
export default function ProductDetailComponent (props:any){

    return(
    <>
  <div className="">
    <div className="card">
      <h3>{props.name}</h3>
      <p>{props.price} TL</p>
      <p>{props.description}</p>
      <div className='row d-flex justify-content-center'>
     </div>
    </div>
   </div>
    </>
        
        )
    
}