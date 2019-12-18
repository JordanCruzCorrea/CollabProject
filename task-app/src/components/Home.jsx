import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// import "holderjs";

import { recipes } from "../data/recipes";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      allRecipes: [],
      index: 0,
      direction: null
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex, direction: e });
  };

  componentDidMount() {
    this.setState({ allRecipes: recipes });
  }

  render() {
    let { allRecipes, index } = this.state;
    let recipeIndex = recipes[index];
    let weeksRecipes = recipeIndex.recipes;

    console.log(weeksRecipes);
    return (
      <>
        <Carousel
          interval={0}
          indicators={false}
          direction={this.state.direction}
          onSelect={this.handleSelect}
          fade={true}
        >
          {allRecipes.map((recipe, index) => (
            <Carousel.Item key={index}>
              <Image fluid src="holder.js/3100x144?bg=eeeeee&fg=eeeeee" alt="" />
              <Carousel.Caption>
                <h3>Week of {recipe.week}</h3>
                <p>
                  <span style={{ color: "red" }}>4 days</span> left to order
                  from this menu.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <Container>
          <Row>
            {weeksRecipes.map((recipe, index) => (
              <Col key={index} lg={6}>
                <div>{recipe.label}</div>
                <Image fluid src={recipe.image} alt="" />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
