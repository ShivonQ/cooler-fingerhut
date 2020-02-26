import products from '../mock-data/products.json'

const getProduct = (id) => {

  return products.filter(product => product.id == id)[0]

}

export default { getProduct }
