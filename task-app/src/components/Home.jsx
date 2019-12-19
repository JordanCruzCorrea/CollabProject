import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// import { TiCancel } from "react-icons/ti";
// import { GiAlliedStar } from "react-icons/gi";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";

import "holderjs";

import { recipes } from "../data/recipes";
import Dropdown from "react-bootstrap/Dropdown";

import { FaBalanceScale } from "react-icons/fa"; //balanced icon
import { GiMeat, GiMuscleFat, GiFireFlower } from "react-icons/gi"; //highprotein and lowfat icon

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

        <Container fluid>
          <Row>
            <Col
              xs={12}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 4, offset: 3 }}
              className="mt-3 mb-3"
            >
              <InputGroup>
                <FormControl
                  // placeholder="Search"
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

        <Container>
          <Row>
            {weeksRecipes.map((recipe, index) => (
              <Col key={index} lg={6} className="recipe-container">
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
                    <Image
                      variant="top"
                      style={{ width: "45%" }}
                      src={recipe.image}
                    />
                    <Card.Body>
                      <Card.Title>Total Time:</Card.Title>
                      <Card.Subtitle>{recipe.totalTime} minutes</Card.Subtitle>
                      <Card.Text>
                        <ul className="p-1">
                          <li>Prep Time: {recipe.prepTime} Minutes</li>
                          <li>Cook Time: {recipe.cookTime} Minutes</li>
                          <li>Clean Up Time: {recipe.cleanTime} Minutes</li>
                        </ul>
                        <p>{Math.floor(recipe.calories)} Calories</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="bottom-row">
                  <Col key={index} lg={6}>
                    <div>
                      <h2 className="food-name">{recipe.label}</h2>
                      <p>{recipe.description}</p>
                      <span className="serving">Servings:</span>{" "}
                      <Button size="sm" id="remove-button">
                        -
                      </Button>
                      <span className="serving-size">{recipe.yield}</span>{" "}
                      <Button size="sm" id="add-button">
                        +
                      </Button>
                    </div>
                    <div></div>
                  </Col>
                  <Col style={{ margin: "5px" }}>
                    <div className="categories-container">
                      {recipe.dietLabels.map((label, index) => {
                        switch (label) {
                          case "Balanced":
                            return (
                              <div className="category-container">
                                <FaBalanceScale size='40px'/>
                                <h4>Balanced</h4>
                              </div>
                            );
                          case "High-Protein":
                            return (
                              <div className="category-container">
                                <GiMeat size='40px'/>
                                <h4>High-Protein</h4>
                              </div>
                            );
                          case "Low-Carb":
                            return (
                              <div className='category-container'>
                                <GiFireFlower size='40px'/>
                                <h4>Low-Carb</h4>
                              </div>
                            );
                          case "Low-Fat":
                            return (
                              <div className='category-container'>
                                <GiMuscleFat size='40px'/>
                                <h4>Low-Fat</h4>
                              </div>
                            );
                            case "None":
                              return(
                                <div className='category-container'>
                                  <h4>None</h4>
                                </div>
                              )
                        }
                      })}

                      {/* <div>
                        <TiCancel color="gray"></TiCancel>
                        <span className="category">No Prep Meal</span>
                      </div>

                      <div>
                        <GiAlliedStar color="gray"></GiAlliedStar>
                        <span className="category">Team Favorite</span>
                      </div> */}
                    </div>
                    <Button id="add-cart">Add To Cart</Button>
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
