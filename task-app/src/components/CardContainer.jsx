import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TiCancel } from 'react-icons/ti'
import { GiAlliedStar } from 'react-icons/gi'

const CardContainer = () => {
  return (
    <>
      <Container style={{width:'50%', margin:'auto'}}>
        <Row>
            <Card style={{display:'flex', flexDirection:'row', background: '#f5efde', width:'fit-content', margin:'5px'}}>
              <Card.Img variant="top" style={{ width: '45%' }} src="https://www.afamilyfeast.com/wp-content/uploads/2018/01/chicken-parmesan-3.jpg" />
              <Card.Body>
                <Card.Title>Total Time: 15 Minutes</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Prep Time: 0 Minutes</li>
                    <li>Cook Time: 10 Minutes</li>
                    <li>Clean Up Time: 5 Minutes</li>
                  </ul>
                  <p>680 Calories</p>
                </Card.Text>
              </Card.Body>
            </Card>

        </Row>
        <Row>
        <Col xs={8}>
          <div>
            <h2 className='food-name'>Chicken Parmesan</h2>
            <p>With al dente penna pasta in a spicy marinara sauce topped with fresh basil</p>
            <span className='serving'>Servings:</span>                   <Button size="sm" id='remove-button'>-</Button>
            <span className='serving-size'>1</span>                <Button size="sm" id='add-button'>+</Button>
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

      </Container>

    </>
  )
}

export default CardContainer