import React from 'react'
import { object, func, arrayOf} from 'prop-types'

import categories from '../../mock-data/categories'
import './PLP.css'
import Products from './Products'

class PLP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: '',
    }
    this.myDivToFocus = React.createRef()
  }

  scrollTo = (event) => {
    if(this.myDivToFocus.current){
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  handleOnClick = (event, name) => {
    this.setState({ selectedCategory: name }, () => this.scrollTo(event))
  }

  render() {
    const { match } = this.props
    const { selectedCategory } = this.state
    const { addToCart } = this.props
    const { cart } = this.props
    const { params } = match
    const { categoryId } = params


    const category = categories[categoryId]

    const { inspirations, inspirationText, subCategories, title } = category

    const inspirationDisplay = inspirations ? inspirations.map(inspiration => {
      const { image, inspirationTitle, name } = inspiration
      return (
        <div key={name} className="col-md-4 pb-3" onClick={(e) => this.handleOnClick(e, name)}>
          <img className="plp-image-container" src={image} alt={inspirationTitle}/>
        </div>
      )
    }) : []

    const subCategoryDisplay = subCategories ? subCategories.map(subCategory => {
      const { name, title } = subCategory
      const selectedClass = name === selectedCategory ? 'selected' : ''
      return (
        <div key={name} className="col-6 col-lg-3 pb-3" onClick={(e) => this.handleOnClick(e, name)}>
          <div className={`card card-body sub-category-card border-dark justify-content-center ${selectedClass}`}>
            <h4 className="m-0">{title}</h4>
          </div>
        </div>
      )
    }) : []

    return (
      <div className="container plp">
        <h1 className="text-center mt-4 mb-3">{title}</h1>
        <div className="row mb-5">
          {subCategoryDisplay}
        </div>

        <div className="row mb-3">
          <div className="col-sm-4">
            <hr/>
          </div>
          <div className="col-sm-4">
            <h3 className="text-center">{inspirationText}</h3>
          </div>
          <div className="col-sm-4">
            <hr/>
          </div>
        </div>

        <div className="row mb-5">
          {inspirationDisplay}
        </div>

        <div ref={this.myDivToFocus} className="products-container">
          <Products selectedCategory={selectedCategory} cart={cart} addToCart={addToCart}/>
        </div>

      </div>
    )
  }
}

PLP.propTypes = {
  match: object.isRequired,
  addToCart: func.isRequired,
  cart: arrayOf(object),

}

export default PLP

