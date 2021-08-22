import React from 'react';
import me from '../../assets/Athens pic.jpeg'
import { Button, Form, FormGroup, Label, Input, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap';

const Contact = (props) => {
  return (
  <div>
    <header className="text-center mb-5">
      <h2 className="text-uppercase lined">Lets Connect!</h2>
    </header>
    <Card className="w-50 mx-auto">
      <CardBody className="align-center">
        <CardTitle tag="h5" className="text-center">Just fill out this form</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-center">I will get back to you as soon as I can.</CardSubtitle>
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="firstName" name="firstName" id="firstName" placeholder="Your First Name" />
        </FormGroup>

        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="lastName" name="lastName" id="lastName" placeholder="Your Last Name" />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Your@Email.com" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Button className="btn btn-info">Submit</Button>
      </Form>
      </CardBody>
      <CardImg className="image" width="50%" src={me} alt="Card image cap" />
    </Card>
  </div>
  );
}

export default Contact;