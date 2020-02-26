import React from 'react'
import Header from '../components/Header'

const Home = () => {

  return (
  <div className="App">
  <div className="text-center mt-2 mb-2 d-none d-md-none d-lg-block">
    <h2 className="d-inline mr-5"><a href="/PLP/1">SALE</a></h2>
    <h2 className="d-inline mr-5"><a href="/PLP/2">WOMEN</a></h2>
    <h2 className="d-inline mr-5"><a href="/PLP/3">MEN</a></h2>
    <h2 className="d-inline mr-5"><a href="/PLP/4">HOME</a></h2>
    <h2 className="d-inline mr-5"><a href="/PLP/5">ELECTRONICS</a></h2>
  </div>
    <div>
      <img class="d-block w-100" src="/images/womens.png" alt="Womens" />
    </div>
    <div>
      <img class="d-block w-100" src="/images/Mens.png" alt="Mens" />
    </div>
    <div>
      <img class="d-block w-100" src="https://s7d4.scene7.com/is/image/roomandboard/hartley_948499_18e1_g?hei=725&$str_g$" alt="Second slide" />
    </div>
    <div>
      <img class="d-block w-100" src="/images/Headphones.jpeg" alt="Third slide" />
    </div>
</div>
)

}

export default Home

