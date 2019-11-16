import React, { Component, Fragment } from 'react';
import { Input, message } from 'antd';
// import Input from 'antd/es/Input';
// import message from 'antd/es/message';
import TodoItem from './todoItem/TodoItem'
// import 'antd/dist/antd.less';
import './../theme/theme.css'
import './Todolist.css';
message.config({
  top: 30,
  duration: 1,
  maxCount: 2,
});
class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue:''
    }
  }
  addTodolist=(value) => {
    let { list } = this.state;
    if(value === '') {
      message.error('亲，不可以为空的哦！');
      return;
    }else if(list.some((item)=>{
      return item === value;
    })) {
      message.error('亲，不可以重复提交哦！')
    }else {
      this.setState(()=>({
        list:[...list,value],
        inputValue:''
      }),()=>{
        message.success(`添加成功！`)
      })
    }
  }
  deleteTodoItem=(i) => {
    let list = [...this.state.list];
    list.splice(i,1)
    this.setState({
      list
    },() => {
      message.success('删除成功')
    })
  }
  changeInputvalue=(e) => {
    const inputValue = e.target.value
    this.setState(()=>({
      inputValue
    }),()=>{
      console.log(this.state.inputValue)
    })
  }
  render() {
      const { Search } = Input;
      let { list,inputValue } = this.state;
      return (
        <Fragment>
          <Search 
             placeholder="input todolist"
             enterButton="添加"
             size="large"
             onSearch={value => this.addTodolist(value)} 
             onChange={this.changeInputvalue}
             value={inputValue}
          />
          <TodoItem list={list} deleteTodoItem={this.deleteTodoItem}/>
        </Fragment>
      )
  }
}
export default Todolist;