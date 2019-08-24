import React from 'react';
import { Container, Form } from './styles';

import logo from '../../assets/logo.png';

const Main = () => (
  <Container>
    <img src={logo} alt="Github compare" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">Ok</button>
    </Form>
  </Container>
);

export default Main;
