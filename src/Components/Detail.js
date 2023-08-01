import { useEffect } from "react";
import { useParams } from "react-router-dom";


function Detail(props) {

  let {id} = useParams();
  let selectItem = props.goods.find(function(x){
    return x.id == id
  })
  // props.goods.find ( (x) => x.id == id) 와 동일

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + '/img/ItemIcon'+ id +'.png'} width={"70%"}/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{selectItem.title}</h4> 
          <p>{selectItem.content}</p>
          <p>{selectItem.price} SOL</p>
          <button className="btn btn-danger">Buy this Item</button> 
        </div>
      </div>
    </div> 
  )

}

export default Detail;