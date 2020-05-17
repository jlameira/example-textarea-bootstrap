import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ButtonMessage } from "./styles";
import { connect } from "react-redux";

function MyTextArea(props) {
  const [valueMessage, setValueMessage] = useState("");

  const addComment = () => {
    if (valueMessage !== "") {
      const { dispatch } = props;
      dispatch({
        type: "ADD_COMMENT",
        payload: valueMessage,
      });
      setValueMessage("");
    }
  };

  const handleChange = (value) => {
    setValueMessage(value);
  };

  return (
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <InputGroup>
        <Form.Control
          style={{ resize: "none" }}
          value={valueMessage}
          onChange={(event) => handleChange(event.target.value)}
          as="textarea"
          rows="3"
        />
        <ButtonMessage></ButtonMessage>
        <Button size="sm" onClick={() => addComment()}>
          Add
        </Button>
      </InputGroup>
    </Form.Group>
  );
}

export default connect()(MyTextArea);
