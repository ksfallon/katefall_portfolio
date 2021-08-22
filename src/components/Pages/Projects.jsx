import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';
import food from '../../assets/img/portfolio/medium_healthy-food.png'

const Projects = (props) => {
  return (
    <div className="d-flex h-100 align-items-center">
      <div className="container">
        <header className="text-center mb-5">
          <h2 className="text-uppercase lined"> Projects</h2>
        </header>
        <div>
          <Card inverse>
            <CardImg width="100%" src={food} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle tag="h5">Inspire Meals 4 U</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted"></small>
              </CardText>
              <Button color="info" href="https://github.com/ksfallon/Project-1" target="_blank">GitHub</Button>{' '}
              <Button color="info" href="https://ksfallon.github.io/Project-1/" target="_blank" >Website</Button>{' '}
              {/* <iframe src="https://ksfallon.github.io/Project-1/">iframe</iframe> */}
            </CardImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;