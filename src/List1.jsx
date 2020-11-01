import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';




export default class List1 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    // this.fetchData();
  }

  fetchData = () => {
    const result = this.getAPI(`/articles/1`);
    const data = result ? result.data : {};
    console.log(result);
    this.setState(data);
  }

  getAPI = async (url) => {
    try {
      //ここでGETメソッドを使用してgithubのプロフィールを取得します。
      const result = await axios.get(
        `${url}`
      );
      return result;
    } catch (error) {
      //ここでリクエストに失敗した時の処理、メッセージを記述します。
      return 'error!!';
    }
  };
  
  render() {

    const data = this.state.data;
    
    const dataStr = JSON.stringify(data);

    return (
      <Container className="center">
        <button onClick={() => this.fetchData()}></button>
        {dataStr}
      </Container>
      
    );
  }
  
}