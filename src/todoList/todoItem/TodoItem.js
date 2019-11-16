import React, { Component } from 'react'
import {  List } from 'antd';
import 'antd/dist/antd.css';
class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };
  render() {
    let { list, deleteTodoItem } =this.props;
    return (
      <List
          size="small"
          bordered
          dataSource={list}
          renderItem={(item,i) => <List.Item onClick={()=>{deleteTodoItem(i)}} >{item}</List.Item>}
      />
    )
  }
}
export default TodoItem;