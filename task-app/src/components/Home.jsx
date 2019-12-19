import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FaSearch, FaBalanceScale } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { FiArrowDownCircle } from "react-icons/fi";
import {
  GiMeat,
  GiMuscleFat,
  GiFireFlower,
  GiAlliedStar,
  GiFruitTree
} from "react-icons/gi"; //highprotein and lowfat icon

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";

import "holderjs";

import { recipes } from "../data/recipes";
import Dropdown from "react-bootstrap/Dropdown";



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
        <Container>
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
                  src="holder.js/3100x144?bg=ffffff&fg=ffffff"
                  alt="holder-carousel"
                  id="holder-carousel"
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
        </Container>

        <Container fluid>
          <Row className="justify-content-md-center">
            <Col
              xs={12}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 4, offset: 3 }}
              className="mt-3 mb-3"
            >
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FaSearch />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" className="search-btn">
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col xs={12} md className="mt-3 mb-3">
              <DropdownButton
                alignRight
                title="Filter Meals"
                variant="primary"
                id="filter-dropdown"
                key="Primary"
              >
                <Dropdown.Item eventKey="1">Hey</Dropdown.Item>
                <Dropdown.Item eventKey="2">Hey</Dropdown.Item>
                <Dropdown.Item eventKey="3">Hey</Dropdown.Item>
                <Dropdown.Item eventKey="4">Hey</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Container>

        <Container fluid className="recipes">
          <Row>
            {weeksRecipes.map((recipe, index) => (
              <Col key={index} lg={6} className="recipe-container p-1 mb-3">
                <Row noGutters>
                  <Container fluid>
                    <Card>
                      <Row>
                        <Col md={6} xs={12} lg={6}>
                          <Image fluid src={recipe.image} />
                        </Col>
                        <Col md={6} xs={12} lg={6}>
                          <Card.Body>
                            <Card.Title>
                              Total Time: {recipe.totalTime} minutes
                            </Card.Title>
                            <span>
                              <ul className="p-1">
                                <li>Prep Time: {recipe.prepTime} Minutes</li>
                                <li>Cook Time: {recipe.cookTime} Minutes</li>
                                <li>
                                  Clean Up Time: {recipe.cleanTime} Minutes
                                </li>
                              </ul>
                              <p>{Math.floor(recipe.calories)} Calories</p>
                            </span>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Container>
                </Row>
                <Row noGutters className="m-3 test">
                  <Col lg={7} className="justify-content-between">
                    <h2 className="food-name">{recipe.label}</h2>
                    <p>{recipe.description}</p>
                    <span className="serving">Servings:</span>{" "}
                    <Button size="sm" id="remove-button">
                      -
                    </Button>
                    <span className="serving-size justify-content-end">
                      {recipe.yield}
                    </span>{" "}
                    <Button size="sm" id="add-button">
                      +
                    </Button>
                  </Col>
                  <Col lg={5} className="justify-content-between">
                    <Row className="justify-content-end">
                    <div className="categories-container">
                      {recipe.dietLabels.map((label, index) => {
                        switch (label) {
                          case "Balanced":
                            return (
                              <div className="category-container">
                                <FaBalanceScale size='30px' color='gray' color='gray'/>
                                <h4>Balanced</h4>
                              </div>
                            );
                          case "High-Protein":
                            return (
                              <div className="category-container">
                                <GiMeat size='30px' color='gray'/>
                                <h4>High-Protein</h4>
                              </div>
                            );
                          case "Low-Carb":
                            return (
                              <div className='category-container'>
                                <GiFireFlower size='30px' color='gray'/>
                                <h4>Low-Carb</h4>
                              </div>
                            );
                          case "Low-Fat":
                            return (
                              <div className='category-container'>
                                <GiMuscleFat size='30px' color='gray'/>
                                <h4>Low-Fat</h4>
                              </div>
                            );
                            case "No Prep Meal":
                              return(
                                <div className='category-container'>
                                  <TiCancel size='30px' color='gray'/>
                                  <h4>No Prep Meal</h4>
                                </div>
                              );
                              case "Team Favorite":
                            return (
                              <div className="category-container">
                                <GiAlliedStar size='30px' color='gray'/>
                                <h4>Team Favorite</h4>
                              </div>
                            );
                            case "Vegetarian":
                            return (
                              <div className="category-container">
                                <GiFruitTree size='30px' color='gray'/>
                                <h4>Vegetarian</h4>
                              </div>
                            );
                            case "Low Calorie":
                            return (
                              <div className="category-container">
                                <FiArrowDownCircle size='30px' color='gray'/>
                                <h4>Low Calorie</h4>
                              </div>
                            );
                        }
                      })}

                    </div>
                    <Button id="add-cart">Add To Cart</Button>
                     

                    </Row>
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
