import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import food from '../../assets/img/portfolio/medium_healthy-food.png'
import calendar from '../../assets/img/portfolio/office.jpg'
import drops from '../../assets/img/portfolio/drops.jpg'
import './Projects.css'
import WebFont from 'webfontloader';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} />
const webEye = <FontAwesomeIcon icon={faBullseye} />

const Projects = (props) => {
  return (
    <div className="d-flex h-100 align-items-center">
      <div className="container">
        <header className="text-center m-5">
          <h1 className="titleProject text-uppercase lined" style={{fontFamily: 'Rampart One'}}> Projects</h1>
        </header>
        <div class="row justify-content-center pb-5">

          {/* 
          PROJECT 1
          */}
          <Card inverse className="cardProject expand col-md-6 col-lg-4 m-1 bg-dark">
            <CardImg id="image1" width="50%" src={food} alt="Card image cap" />
            <CardImgOverlay className="middle">
              <p className="divTitle">
                <CardTitle className='title text-lg-center bg-info' tag="h3" style={{fontFamily: 'Rampart One'}}>Inspired Meals 4 U</CardTitle>
              </p>
              <CardText className='textProject text-center' style={{fontFamily: 'Fredoka One'}}>Provides users a way to get personalized weekly meal plans based on each user’s: daily calorie goal, diet, and any foods to exclude. APIs: The spoonacular API Recipe – Food – Nutrition and Quotes Inspirational Quotes Motivational Quotes API.</CardText>
              {/* <CardText>
                <small className="text-muted">Languages Used: HTML5, CSS, JavaScript, Materialize, Foundation, jQuery, moment.js, Markdown</small>
              </CardText> */}
              <div className=" align-self-end text-center">
                <Button className="text-center" color="info" href="https://github.com/ksfallon/Project-1" target="_blank" style={{fontFamily: 'Fredoka One'}}>GitHub {github}</Button>{' '}
                <Button className="text-center" color="info" href="https://ksfallon.github.io/Project-1/" target="_blank" style={{fontFamily: 'Fredoka One'}}>Website {webEye}</Button>{' '}
              </div>
            </CardImgOverlay>
          </Card>

          {/* 
          Work Day Scheduler
          */}
          <Card inverse className="cardProject expand col-md-6 col-lg-4 m-1 bg-dark">
            <CardImg id="image2" width="50%" src={calendar} alt="Card image cap" />
            <CardImgOverlay className="middle">
              <p className="divTitle">
                <CardTitle className='title text-lg-center bg-info' tag="h3" style={{fontFamily: 'Rampart One'}}>Work Day Scheduler</CardTitle>
              </p>
              <CardText className='textProject text-center'style={{fontFamily: 'Fredoka One'}}>Provides input blocks for each hour of the workday, 9am - 5pm, to allow the users to save notes for work events during specific times.</CardText>
              {/* <CardText>
                <small className="text-muted">Languages Used: HTML5, CSS, JavaScript, Materialize, Foundation, jQuery, moment.js, Markdown</small>
              </CardText> */}
              <div className="text-center">
                <Button className="text-center" color="info" href="https://github.com/ksfallon/Work-Day-Scheduler" target="_blank" style={{fontFamily: 'Fredoka One'}}>GitHub {github}</Button>{' '}
                <Button className="text-center" color="info" href="https://ksfallon.github.io/Work-Day-Scheduler/" target="_blank" style={{fontFamily: 'Fredoka One'}}>Website {webEye}</Button>{' '}
                </div>
            </CardImgOverlay>
          </Card>

          {/* 
          Weather Dashboard
          */}
          <Card inverse className="cardProject expand col-md-6 col-lg-4 m-1 bg-dark">
            <CardImg id="image3" width="50%" src={drops} alt="Card image cap" />
            <CardImgOverlay className="middle">
              <p className="divTitle">
                <CardTitle className='title text-lg-center bg-info' tag="h3" style={{fontFamily: 'Rampart One'}}>Weather Dashboard</CardTitle>
              </p>
              <CardText className='textProject text-center'style={{fontFamily: 'Fredoka One'}}>Uses the Open Weather Map APIs and moment.js to provide information about the current and five-day forecast based on the city search input.</CardText>
              {/* <CardText>
                <small className="text-muted">Languages Used: HTML5, CSS, JavaScript, Materialize, Foundation, jQuery, moment.js, Markdown</small>
              </CardText> */}
              <div className="text-center">
                <Button className="text-center" color="info" href="https://github.com/ksfallon/Weather-Dashboard" target="_blank" style={{fontFamily: 'Fredoka One'}}>GitHub {github}</Button>{' '}
                <Button className="text-center" color="info" href="https://ksfallon.github.io/Weather-Dashboard/" target="_blank" style={{fontFamily: 'Fredoka One'}}>Website {webEye}</Button>{' '}
                </div>
            </CardImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;