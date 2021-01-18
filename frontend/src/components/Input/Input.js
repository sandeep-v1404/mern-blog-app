import React from "react";
import { Form } from "react-bootstrap";
import "./Input.css";

function Input({ label, placeholder, type }) {
  return (
    <Form.Group controlId={label}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={!type ? "text" : "password"}
        className="input"
        placeholder={placeholder}
        required
      />
    </Form.Group>
  );
}

export default Input;
