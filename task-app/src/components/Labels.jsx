import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FaBalanceScale } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { FiArrowDownCircle } from "react-icons/fi";
import {
  GiMeat,
  GiMuscleFat,
  GiFireFlower,
  GiAlliedStar
} from "react-icons/gi"; //highprotein and lowfat icon
import Vegetarian from "../data/vegetarian.png";

function Labels(props) {
  return (
    <Col lg={3}>
      <Row noGutters className="labels justify-content-center">
        {props.recipe.dietLabels.map((label, index) => {
          switch (label) {
            case "Balanced":
              return (
                <Col key={index} xs={6} lg={12} className="category-container">
                  <FaBalanceScale size="30px" color="gray" />
                  <h4>Balanced</h4>
                </Col>
              );
            case "High-Protein":
              return (
                <Col key={index} xs={6} lg={12} className="category-container">
                  <GiMeat size="30px" color="gray" />
                  <h4>High-Protein</h4>
                </Col>
              );
            case "Low-Carb":
              return (
                <Col key={index} xs={6} lg={12} className="category-container">
                  <GiFireFlower size="30px" color="gray" />
                  <h4>Low-Carb</h4>
                </Col>
              );
            case "Low-Fat":
              return (
                <Col key={index} xs={6} lg={12} className="category-container">
                  <GiMuscleFat size="30px" color="gray" />
                  <h4>Low-Fat</h4>
                </Col>
              );
            case "No Prep Meal":
              return (
                <Col key={index} xs={6} lg={12} className="category-container">
                  <TiCancel size="30px" color="gray" />
                  <h4>No Prep Meal</h4>
                </Col>
              );
            case "Team Favorite":
              return (
                <Col key={index} xs={6} lg={12} className="category-container">
                  <GiAlliedStar size="30px" color="gray" />
                  <h4>Team Favorite</h4>
                </Col>
              );
            case "Vegetarian":
              return (
                <Col key={index} xs={6} lg={12} className="category-container">
                  {/* <GiFruitTree size="30px" color="gray" /> */}
                  <Image src={Vegetarian} />
                  <h4>Vegetarian</h4>
                </Col>
              );
            case "Low Calorie":
              return (
                <Col key={index} xs={6} lg={12} className="category-container">
                  <FiArrowDownCircle size="30px" color="gray" />
                  <h4>Low Calorie</h4>
                </Col>
              );
          }
        })}
        <Button id="add-cart">Add To Cart</Button>
      </Row>
    </Col>
  );
}

export default Labels;
