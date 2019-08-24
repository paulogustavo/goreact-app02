import React, { Component } from 'react';
import moment from 'moment';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';
import api from '../../services/api';

import logo from '../../assets/logo.png';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container>
        <img src={logo} alt="Github compare" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            // eslint-disable-next-line react/destructuring-assignment
            value={this.state.repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
