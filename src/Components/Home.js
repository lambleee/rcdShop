
function Home(props) {

  return (
    <>
      <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          {
            props.goods.map((a, i)=>{
              return(
                <Card key={i} goods={props.goods[i]} i={i}></Card>
              )
            })
          }  
        </div>
      </div>
    </>       
  )

}

function Card(props) {

  return (
    <div className="col-md-4">
      <a href={"/detail/"+(props.goods.itemcode)}>
        <img src={process.env.PUBLIC_URL + '/img/ItemIcon'+ props.goods.itemcode +'.png'} width="50%" height="50%"/>
      </a>
      <h2>{props.goods.title}</h2>
      <h6>{props.goods.content}</h6>
      <h5>{props.goods.price + ' Sol'}</h5>
    </div>
  )
  
}

export default Home;