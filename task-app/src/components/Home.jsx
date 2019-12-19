import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FaSearch, FaBalanceScale } from "react-icons/fa";
// import { TiCancel } from "react-icons/ti";
import {
  GiMeat,
  GiMuscleFat,
  GiFireFlower
  // GiAlliedStar
} from "react-icons/gi"; //highprotein and lowfat icon

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";

import "holderjs";

import { recipes } from "../data/recipes";
import Dropdown from "react-bootstrap/Dropdown";
// import Modal from "react-bootstrap/Modal";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      allRecipes: [],
      index: 0,
      direction: null,
      next: <i className="fas fa-chevron-right"></i>,
      prev: <i className="fas fa-chevron-left"></i>,
      show: false,
      selected: null
    };
  }

  // handleClose = () => {
  //   this.setState({ setShow: false });
  // };

  // handleShow = () => {
  //   this.setState({ setShow: true });
  // };

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex, direction: e });
  };

  componentDidMount() {
    this.setState({ allRecipes: recipes });
  }

  render() {
    let { allRecipes, index, show } = this.state;
    let recipeIndex = recipes[index];
    let weeksRecipes = recipeIndex.recipes;

    // const [show, setShow] = React.useState(false)
    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)

    console.log(weeksRecipes);
    return (
      <>
        <Container className="carousel-container">
          <Carousel
            interval={0}
            touch
            direction={this.state.direction}
            onSelect={this.handleSelect}
            fade={true}
            nextIcon={this.state.next}
            prevIcon={this.state.prev}
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
          <Row noGutters>
            {weeksRecipes.map((recipe, index) => (
              <Col key={index} lg={6} className="recipe-container mb-3">
                <Row noGutters>
                  <Container fluid>
                    <Card>
                      <Row noGutters>
                        <Col md={6} xs={12} lg={6}>
                          <Image fluid src={recipe.image} />
                        </Col>
                        <Col md={6} xs={12} lg={6} className="card-right">
                          <Carousel
                            interval={0}
                            nextIcon={this.state.next}
                            prevIcon={this.state.prev}
                            touch
                            controls={false}
                          >
                            <Carousel.Item as={Card.Body}>
                              <Card.Title>
                                Total Time: {recipe.totalTime} minutes
                              </Card.Title>
                              <span className="recipe-ingredient-list">
                                <ul>
                                  <li>Prep: {recipe.prepTime} Minutes</li>
                                  <li>Cook: {recipe.cookTime} Minutes</li>
                                  <li>Clean Up: {recipe.cleanTime} Minutes</li>
                                </ul>
                                <p>{Math.floor(recipe.calories)} Calories</p>
                              </span>
                            </Carousel.Item>
                            <Carousel.Item
                              as={Card.Body}
                              className="carousel-2"
                            >
                              <Card.Title>Ingredients</Card.Title>
                              <Col lg={12}>
                                {recipe.ingredientLines.map(ingredient => (
                                  <li>{ingredient}</li>
                                ))}
                              </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                              <Button style={{ backgroundColor: '#6c87b9'}}
                                onClick={() => this.setState({ show: true })}
                              >
                                Click here to view recipe in a modal!
                              </Button>
                              {show && (
                                <div className="recipe-bg">
                                  <div className="recipe-modal">
                                    <iframe
                                      src={recipe.url}
                                      frameborder="0"
                                      height="100%"
                                      width="100%"
                                    ></iframe>
                                    <Button style={{ backgroundColor: '#6c87b9'}}
                                      onClick={() =>
                                        this.setState({ show: false })
                                      }
                                    >
                                      Close
                                    </Button>
                                  </div>
                                </div>
                              )}
                              {/* <Modal show={show} onHide={this.handleClose}>
                                <Modal.Header closeButton />
                                <Modal.Body>
                                  Hi
                                  <iframe
                                    src={recipe.url}
                                    frameborder="0"
                                  ></iframe>
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button variant="primary">Close</Button>
                                </Modal.Footer>
                              </Modal> */}
                            </Carousel.Item>
                          </Carousel>
                        </Col>
                      </Row>
                    </Card>
                  </Container>
                </Row>
                <Row noGutters className="recipe-card-bottom">
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
                    <Row noGutters className="justify-content-end">
                      <Col className="categories-container">
                        {recipe.dietLabels.map(label => {
                          switch (label) {
                            case "Balanced":
                              return (
                                <div className="category-container">
                                  <FaBalanceScale size="40px" />
                                  <h4>Balanced</h4>
                                </div>
                              );
                            case "High-Protein":
                              return (
                                <div className="category-container">
                                  <GiMeat size="40px" />
                                  <h4>High-Protein</h4>
                                </div>
                              );
                            case "Low-Carb":
                              return (
                                <div className="category-container">
                                  <GiFireFlower size="40px" />
                                  <h4>Low-Carb</h4>
                                </div>
                              );
                            case "Low-Fat":
                              return (
                                <div className="category-container">
                                  <GiMuscleFat size="40px" />
                                  <h4>Low-Fat</h4>
                                </div>
                              );
                            case "None":
                              return (
                                <div className="category-container">
                                  <h4>None</h4>
                                </div>
                              );
                          }
                        })}
                      </Col>
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
