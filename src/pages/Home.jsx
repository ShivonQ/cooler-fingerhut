import React from 'react'
import Header from '../components/Header'

const Home = () => {

  return (
  <div className="App">
  <Header />
  <div className="text-center mt-2 mb-2">
    <h2 className="d-inline mr-5"><a href="/PLP/1">SALE</a></h2>
    <h2 className="d-inline mr-5"><a href="/PLP/2">WOMEN</a></h2>
    <h2 className="d-inline mr-5"><a href="/PLP/3">MEN</a></h2>
    <h2 className="d-inline mr-5"><a href="/PLP/4">HOME</a></h2>
    <h2 className="d-inline mr-5"><a href="/PLP/5">ELECTRONICS</a></h2>
  </div>
    <div>
      <img class="d-block w-100" src="https://files.slack.com/files-pri/T0AEY0UDP-FUJGLBC9K/image.png" alt="Womens" />
    </div>
    <div>
      <img class="d-block w-100" src="https://files.slack.com/files-pri/T0AEY0UDP-FU86MDKS5/mens.png" alt="Mens" />
    </div>
    <div>
      <img class="d-block w-100" src="https://s7d4.scene7.com/is/image/roomandboard/hartley_948499_18e1_g?hei=725&$str_g$" alt="Second slide" />
    </div>
    <div>
      <img class="d-block w-100" src="https://files.slack.com/files-pri/T0AEY0UDP-FUJFX89PA/headphones.jpeg" alt="Third slide" />
    </div>
</div>
)

}

export default Home

