import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Projects = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src="assets/img/portfolio/medium_healthy-food.png" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Projects;