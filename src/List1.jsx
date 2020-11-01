import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

function hh(str) {
  fetch('/articles/1', {method: 'GET'})
    .then(res => res.json()).then(console.log)
}


export default class List1 extends Component {
  render() {
    return (
      <Container className="center">Hello Login app list1</Container>

    );
  }
}
