import React from 'react'
import categories from '../../mock-data/categories'
import './PLP.css'

const PLP = ({ match }) => {

  const { params } = match
  const { categoryId } = params

  const category = categories[categoryId]

  const { inspirations, name, subCategories } = category

  const inspirationDisplay = inspirations ? inspirations.map(inspiration => {
    const { image, inspirationName } = inspiration
    return (
      <div className="col-sm-4">
        <img className="plp-image-container" src={image} alt={inspirationName}/>
      </div>
    )
  }) : []

  const subCategoryDisplay = subCategories ? subCategories.map(subCategory => {
    const { name } = subCategory
    return (
      <div className="col-sm-3">
        <div className="card card-body border-dark justify-content-center">
          <h4>{name}</h4>
        </div>
      </div>
    )
  }) : []

  return (
    <div className="container plp">
      <h1 className="text-center mt-4 mb-3">{name}</h1>
      <div className="row mb-5">
        {subCategoryDisplay}
      </div>

      <div className="row mb-3">
        <div className="col-sm-4">
          <hr/>
        </div>
        <div className="col-sm-4">
          <h3 className="text-center">Inspirations</h3>
        </div>
        <div className="col-sm-4">
          <hr/>
        </div>
      </div>

      <div className="row mb-5">
        {inspirationDisplay}
      </div>

    </div>
  )

}

export default PLP

