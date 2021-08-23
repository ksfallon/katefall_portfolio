import React from 'react';
import me from '../../assets/Athens pic.jpeg'
import { Button, Form, FormGroup, Label, Input, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap';
import './ContactForm.css';


const Contact = (props) => {
  return (
  <div>
    <div className="container">
      <header className="text-center m-5">
        <h2 className="titleContact text-uppercase lined" style={{fontFamily: 'Rampart One'}}>Lets Connect!</h2>
      </header>
      <Card className="cardContact w-50 mx-auto" style={{fontFamily: 'Fredoka One'}}>
        <CardBody className="cardContact align-center">
          <CardTitle tag="h5" className="intro text-center mb-4">Just fill out this form</CardTitle>
          <CardSubtitle tag="h6" className="introPlus mb-5 text-center">I will get back to you as soon as I can.</CardSubtitle>
        <Form className="m-3">
          <FormGroup className="m-3">
            <Label for="firstName">First Name</Label>
            <Input type="firstName" name="firstName" id="firstName" placeholder="Your First Name" />
          </FormGroup>

          <FormGroup className="m-3">
            <Label for="lastName">Last Name</Label>
            <Input type="lastName" name="lastName" id="lastName" placeholder="Your Last Name" />
          </FormGroup>

          <FormGroup className="m-3">
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Your@Email.com" />
          </FormGroup>

          <FormGroup className="m-3">
            <Label for="exampleText">Additional Info</Label>
            <Input type="textarea" name="text" id="exampleText" placeholder="Hi Katelin!, I am contacting you to ..." />
          </FormGroup>

          <Button className="btn btn-info">Submit</Button>
        </Form>
        </CardBody>
        {/* <CardImg className="image" width="50%" src={me} alt="Card image cap" /> */}
      </Card>
    </div>
  </div>
  );
}

export default Contact;