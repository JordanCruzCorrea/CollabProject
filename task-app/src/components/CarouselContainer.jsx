import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      currentRecipes: [],
      selectedWeek: ""
    };
  }

  componentDidMount() {
    const { recipes } = this.props;
    
  }

  render() {
    // console.table(recipes[0].week);
    // recipes.map(recipe => {
    //   console.log(recipe.week)
    // })
    return (
      <>
        <Carousel interval={0}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1440x144"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Weeks of Monday, December 23rd</h3>
              <p>
                Meals starting at $6.99 per perving.{" "}
                <span style={{ color: "red" }}>4 days</span> left to order from
                this menu.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1440x144"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Week of Monday, December 30th</h3>
              <p>
                Meals starting at $6.99 per perving.{" "}
                <span style={{ color: "red" }}>4 days</span> left to order from
                this menu.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1440x144"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Week of Monday, January 6th</h3>
              <p>
                Meals starting at $6.99 per perving.{" "}
                <span style={{ color: "red" }}>4 days</span> left to order from
                this menu.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1440x144"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Week of Monday, January 13th</h3>
              <p>
                Meals starting at $6.99 per perving.{" "}
                <span style={{ color: "red" }}>4 days</span> left to order from
                this menu.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default CarouselContainer;
