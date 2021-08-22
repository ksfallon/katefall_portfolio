import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import food from '../../assets/img/portfolio/medium_healthy-food.png'
import './Projects.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} />
const webEye = <FontAwesomeIcon icon={faBullseye} />

const Projects = (props) => {
  return (
    <div className="d-flex h-100 align-items-center">
      <div className="container">
        <header className="text-center mb-5">
          <h2 className="text-uppercase lined"> Projects</h2>
        </header>
        <div class="row justify-content-center pb-5">
          <Card inverse className="container expand col-md-6 col-lg-4 mb-5">
            <CardImg className="image" width="50%" src={food} alt="Card image cap" />
            <CardImgOverlay className="middle">
              <p className="divTitle">
                <CardTitle className='title text-lg-center bg-info' tag="h3">Inspired Meals 4 U</CardTitle>
              </p>
              <CardText className='text text-center'>Provides users a way to get personalized weekly meal plans based on each user’s: daily calorie goal, diet, and any foods to exclude. APIs: The spoonacular API Recipe – Food – Nutrition and Quotes Inspirational Quotes Motivational Quotes API.</CardText>
              {/* <CardText>
                <small className="text-muted">Languages Used: HTML5, CSS, JavaScript, Materialize, Foundation, jQuery, moment.js, Markdown</small>
              </CardText> */}
              <div className="text-center">
                <Button className="text-center" color="info" href="https://github.com/ksfallon/Project-1" target="_blank" >GitHub {github}</Button>{' '}
                <Button className="text-center" color="info" href="https://ksfallon.github.io/Project-1/" target="_blank" >Website {webEye}</Button>{' '}
                {/* <iframe src="https://ksfallon.github.io/Project-1/">iframe</iframe> */}
                
              </div>
            </CardImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;