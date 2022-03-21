import React, { Component, Fragment } from 'react';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ["first li", "哦可"],
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>commit</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.listDeleteItem.bind(this)}>{item}</li>
            })
          }
        </ul>
      </Fragment>

    )
  }
  //绑定方法
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    // console.log(e.target.value);
  }
  handleBtnClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue,],
      inputValue: '',
    })
  }
  listDeleteItem(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }

}

export default TodoList;