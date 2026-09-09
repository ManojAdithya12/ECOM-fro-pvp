
function Header() {
  return (
    <>
    <header style={{display:"flex",justifyContent:"space-evenly"}}>
    <img   height={50}  width={100}      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Lbz3_htIQWXsSV1Kse79UTopcNUfksh6lG_5EM16sQ&s=10" alt="" />
    <input placeholder="search products"   style={{maxWidth:'350px',borderRadius:'20px'}}   type="text" />
    <nav style={{display:'flex', gap:'30px',alignItems:'center'}}     >
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Products</a>
      <a href="">Pricing</a>
    </nav>
    </header>
    </>
  )
}

export default Header