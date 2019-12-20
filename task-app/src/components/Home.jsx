import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import Labels from "./Labels";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

import "holderjs";

import { recipes } from "../data/recipes";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      allRecipes: [],
      index: 0,
      direction: null,
      show: false,
      selected: null,
      weeksRecipes: [1, 1, 1, 1]
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex, direction: e });
  };

  componentDidMount() {
    recipes.map(recipe => {
      return this.setState(state => {
        state.allRecipes.push({ recipe: recipe, serving: 1 });
        return state;
      });
    });
  }

  render() {
    let { allRecipes, index, show, direction } = this.state;
    let recipeIndex = recipes[index];
    let weeksRecipes = recipeIndex.recipes;

    return (
      <>
        <Container className="carousel-container">
          <Carousel
            interval={0}
            touch
            direction={direction}
            onSelect={this.handleSelect}
            indicators={false}
            fade={true}
            nextIcon={<i className="fas fa-chevron-right"></i>}
            prevIcon={<i className="fas fa-chevron-left"></i>}
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
                  <h3>Week of {recipe.recipe.week}</h3>
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
                <Dropdown.Item eventKey="2">This</Dropdown.Item>
                <Dropdown.Item eventKey="3">Is</Dropdown.Item>
                <Dropdown.Item eventKey="4">Filtering</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Container>

        <Container fluid className="recipes">
          <Row noGutters>
            {weeksRecipes.map((recipe, index) => (
              <Col key={index} lg={6} className="recipe-container mb-3">
                <Row noGutters className="recipe-card-top">
                  <Container fluid>
                    <Card>
                      <Row noGutters>
                        <Col md={6} xs={12} lg={6}>
                          <Image fluid src={recipe.image} />
                        </Col>
                        <Col md={6} xs={12} lg={6} className="card-right">
                          <Carousel
                            className="recipe-carousel"
                            interval={0}
                            touch
                            fade={true}
                            controls={false}
                            nextIcon={<i className="fas fa-chevron-right"></i>}
                            prevIcon={<i className="fas fa-chevron-left"></i>}
                          >
                            <Carousel.Item
                              as={Card.Body}
                              className="carousel-1"
                            >
                              <Card.Title>
                                Total Time: {recipe.totalTime} minutes
                              </Card.Title>
                              <span className="recipe-times">
                                <ul>
                                  <li>Prep: {recipe.prepTime} Minutes</li>
                                  <li>Cook: {recipe.cookTime} Minutes</li>
                                  <li>Clean Up: {recipe.cleanTime} Minutes</li>
                                </ul>
                                <p>
                                  {Math.floor(recipe.calories / recipe.yield) *
                                    `${this.state.weeksRecipes[index]}`}{" "}
                                  Calories
                                </p>
                              </span>
                            </Carousel.Item>
                            <Carousel.Item
                              as={Card.Body}
                              className="carousel-2"
                            >
                              <Card.Title>Ingredients</Card.Title>
                              <Col lg={12}>
                                {recipe.ingredientLines.map(
                                  (ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                  )
                                )}
                              </Col>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-3">
                              <Button
                                style={{ backgroundColor: "#6c87b9" }}
                                className="open-recipe-btn"
                                onClick={() => this.setState({ show: true })}
                              >
                                Click here to view recipe in a modal!
                              </Button>
                              {show && (
                                <div className="recipe-bg">
                                  <div className="recipe-modal">
                                    <Button
                                      style={{ backgroundColor: "#6c87b9" }}
                                      onClick={() =>
                                        this.setState({ show: false })
                                      }
                                    >
                                      Close
                                    </Button>
                                    <iframe
                                      src={recipe.url}
                                      frameBorder="0"
                                      height="100%"
                                      width="100%"
                                      title="Recipe Link"
                                    ></iframe>
                                  </div>
                                </div>
                              )}
                              OR
                              <Button
                                style={{ backgroundColor: "#6c87b9" }}
                                className="open-recipe-btn"
                              >
                                Click{" "}
                                <a
                                  href={recipe.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  here
                                </a>{" "}
                                to view recipe in a new tab!
                              </Button>
                            </Carousel.Item>
                          </Carousel>
                        </Col>
                      </Row>
                    </Card>
                  </Container>
                </Row>

                <Row noGutters className="recipe-card-bottom">
                  <Col lg={9}>
                    <h2 className="food-name">{recipe.label}</h2>
                    <p>{recipe.description}</p>
                    <span className="serving">Servings:</span>{" "}
                    <Button
                      size="sm"
                      id="remove-button"
                      onClick={() => {
                        this.setState(state => {
                          state.weeksRecipes[index] =
                            state.weeksRecipes[index] - 1;
                          return state;
                        });
                      }}
                    >
                      <AiOutlineMinusCircle size="30px" />
                    </Button>
                    <span className="serving-size justify-content-end">
                      {this.state.weeksRecipes[index]}
                    </span>{" "}
                    <Button
                      size="sm"
                      id="add-button"
                      onClick={() => {
                        this.setState(state => {
                          state.weeksRecipes[index] =
                            state.weeksRecipes[index] + 1;
                          return state;
                        });
                      }}
                    >
                      <AiOutlinePlusCircle size="30px" />
                    </Button>
                  </Col>
                  <Labels recipe={recipe} />
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
