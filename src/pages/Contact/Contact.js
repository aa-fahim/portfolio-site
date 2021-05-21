import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "../../App.css";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    fetch(
      "https://maker.ifttt.com/trigger/portfolio-email-request/with/key/f1KC19_yeU71S6zupZfzvUHnETMs1RgzZ2AEhHTwJrP",
      {
        // headers: {
        //   Accept: "application/json",
        //   "Content-Type": "application/json",
        // },
        method: "post",
        mode: "no-cors",
        body: JSON.stringify({
          "value1": name,
          "value2": email,
          "value3": message,
        }),
      }
    ).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="contact">
      <Form className="form-container">
        <p className="header">Contact Me</p>
        <FormGroup className="form-group">
          <Label className="form-label">Name</Label>
          <Input
            type="text"
            className="form-box1"
            value={name}
            onChange={handleName}
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label className="form-label">Email</Label>
          <Input
            type="email"
            className="form-box1"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label className="form-label">Message</Label>
          <Input
            type="textarea"
            className="form-box2"
            value={message}
            onChange={handleMessage}
            placeholder="Message"
          />
        </FormGroup>
        <div className="btn-div">
          <Button className="form-button" onClick={handleSubmit}>
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}
