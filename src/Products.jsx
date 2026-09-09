import products from "./products"
import Card from "./Card"
function Products() {
  return (
    <>
     <div style={{display:'flex',flexWrap:'wrap',gap:'30px'}}    >

      {
        products.map((n)=>{
          return <Card name={n.title} image={n.image} price={n.price}  />
        })
      }
     </div>

    </>
  )
}

export default Products