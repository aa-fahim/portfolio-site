import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row
} from 'reactstrap'
import '../../../App.css';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleName = event => {
    setName(event.target.value)
  }

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handleMessage = event => {
    setMessage(event.target.value)
  }

  const handleSubmit = () => {
    console.log('hey')
  }

  return (
    <div className='contact'>
      <div className='container'>
        <p className='header'>Contact Me</p>
        <Form>
          <FormGroup col className='form-group'>
            <Label size="lg">Name</Label>
            <Row sm={10}>
              <Input
                type="text"
                className='form-box1'
                name="name"
                value={name}
                onChange={handleName}
                placeholder='Name'
                bsSize='lg'
              />
            </Row>
          </FormGroup>
          <FormGroup className='form-group'>
            <Label>Email</Label>
            <Input
              type="email"
              className='form-box1'
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder='Email'

            />
          </FormGroup>
          <FormGroup className='form-group'>
            <Label>Message</Label>
            <Input
              type="textarea"
              className='form-box2'
              name="type"
              value={message}
              onChange={handleMessage}
              placeholder='Message'
            />
          </FormGroup>
          <Button color='primary' onClick={() => handleSubmit()}>
            Add
          </Button>
        </Form>
      </div>
    </div >
  );
}
