import React from 'react'
import './home.css'

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
  <div className="row ml-1 mr-1 mb-4">
    <div class="col-md-3 p-0">
      <img class="image-container" src="https://files.slack.com/files-pri/T0AEY0UDP-FUJGLBC9K/image.png" alt="Womens" />
    </div>
    <div class="col-md-3 p-0">
      <img class="image-container" src="https://files.slack.com/files-pri/T0AEY0UDP-FU86MDKS5/mens.png" alt="Mens" />
    </div>
    <div class="col-md-3 p-0">
      <img class="image-container" src="https://s7d4.scene7.com/is/image/roomandboard/hartley_948499_18e1_g?hei=725&$str_g$" alt="Second slide" />
    </div>
    <div class="col-md-3 p-0 mb-2">
      <img class="image-container" src="https://files.slack.com/files-pri/T0AEY0UDP-FUJFX89PA/headphones.jpeg" alt="Third slide" />
    </div>
  </div>
</div>
)

}

export default Home

