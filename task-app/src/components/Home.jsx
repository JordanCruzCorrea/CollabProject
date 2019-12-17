import React, { Component } from 'react'
import CarouselContainer from './CarouselContainer'
import CardsContainer from './CardsContainer'

import { recipes } from '../data/recipes'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    this.setState({ recipes })
  }
  
  
  render() {
    const { recipes } = this.state

    return (
      <>
        <CarouselContainer recipes={recipes}/>
        <CardsContainer recipes={recipes}/>
      </>
    )
  }
}
