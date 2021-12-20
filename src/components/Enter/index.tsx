import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { nameState } from "atoms/nameState";

export default function Enter() {
  const [name, setName] = useRecoilState(nameState);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    name && navigate("/play");
  };

  return (
    <div id="enter">
      <h1>STRIVE TIC TAC</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control type="submit" disabled={!name} />
      </Form>
    </div>
  );
}
