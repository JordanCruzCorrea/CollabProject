import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselContainer = () => {
  return (
    <div classname="Carousel">
      {/* <Carousel>
          <Carousel.Caption>
            <h1>Weeks of Monday, December 23rd</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <Carousel.Caption>
            <h1>Week of Monday, December 30th</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          <Carousel.Caption>
            <h1>Week of Monday, January 6th</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        
      </Carousel> */}

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.desktopwallpaperhd.net/wallpapers/11/8/wallpapers-filter-random-backgrounds-iamfreeman-fabric-room-black-high-113528.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Weeks of Monday, December 23rd</h3>
      <p>Meals starting at $6.99 per perving. <span style={{color: 'red'}}>4 days</span> left to order from this menu.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.desktopwallpaperhd.net/wallpapers/11/8/wallpapers-filter-random-backgrounds-iamfreeman-fabric-room-black-high-113528.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Week of Monday, December 30th</h3>
      <p>Meals starting at $6.99 per perving. <span style={{color: 'red'}}>4 days</span> left to order from this menu.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.desktopwallpaperhd.net/wallpapers/11/8/wallpapers-filter-random-backgrounds-iamfreeman-fabric-room-black-high-113528.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Week of Monday, January 6th</h3>
      <p>Meals starting at $6.99 per perving. <span style={{color: 'red'}}>4 days</span> left to order from this menu.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.desktopwallpaperhd.net/wallpapers/11/8/wallpapers-filter-random-backgrounds-iamfreeman-fabric-room-black-high-113528.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Week of Monday, January 13th</h3>
      <p>Meals starting at $6.99 per perving. <span style={{color: 'red'}}>4 days</span> left to order from this menu.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default CarouselContainer;
