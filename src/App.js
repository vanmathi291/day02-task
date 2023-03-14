
import './App.css';

 function App() {
  const data=[
  {
    productImage:"https://fancyproductdesigner.com/wp-content/uploads/2014/07/shirt.jpg",
    productName:"Fancy product",
    price:"$40.00-$80.00",
    rating:3.5,
   },
     {
      productImage:"https://www.cloudways.com/blog/wp-content/uploads/image2-22.jpg",
      productName:"popular product",
      price:"$40.00",
      rating:4.2,
     },
     ];
     return(
      <div className="App">
        {data.map((prod.idx) => (
        <card key ={idx} style={{width:"18rem"}}/>
        <card.Img Variant="top" src={prod.productImage}/>
        <card.Body>
        <card.Title>{prod.productName}</card.Title>
        <card.Text>{prod.price}</card.Text>
        <card.Text>{prod.rating}</card.Text>
        <button varient="primary">view product</button>
        </card.Body>
        ))}
       </div> 
     
    
  );
}


