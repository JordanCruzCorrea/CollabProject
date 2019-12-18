import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TiCancel } from 'react-icons/ti'
import { GiAlliedStar } from 'react-icons/gi'
import "holderjs";

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
              <Image
                fluid
                src="holder.js/3100x144?bg=eeeeee&fg=eeeeee"
                alt=""
              />
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
              <Col key={index} lg={6} className='recipe-container'>
                {/* <div>{recipe.label}</div>
                <Image fluid src={recipe.image} alt="" /> */}
                <Row>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    background: "#f5efde",
                    width: "fit-content",
                    margin: "5px"
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={{ width: "45%" }}
                    src={recipe.image}
                  />
                  <Card.Body>
                    <Card.Title>Total Time: {recipe.totalTime} minutes</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Prep Time: {recipe.prepTime} Minutes</li>
                        <li>Cook Time: {recipe.cookTime} Minutes</li>
                        <li>Clean Up Time: {recipe.cleanTime} Minutes</li>
                      </ul>
                      <p>{Math.floor(recipe.calories)} Calories</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              
              </Row>
              <Row>
              <Col key={index} lg={6}>
              <div>
  <h2 className='food-name'>{recipe.label}</h2>
                <p>{recipe.description}</p>
                <span className='serving'>Servings:</span>             <Button size="sm" id='remove-button'>-</Button>
                <span className='serving-size'>{recipe.yield}</span>                <Button size="sm" id='add-button'>+</Button>
              </div>
              <div></div>
            </Col>
            <Col style={{margin:'5px'}}>
              <div className='category-container'>
            <div>
              <TiCancel color='gray'></TiCancel>
              <span className='category'>No Prep Meal</span>
            </div>
              
            <div>
              <GiAlliedStar color='gray'></GiAlliedStar>
              <span className='category'>Team Favorite</span>
            </div>
            </div>
              <Button id='add-cart'>Add To Cart</Button>
            </Col>
              </Row>
              </Col>
            ))}
          </Row>
          
        </Container>
      </>
    );
  }
}
