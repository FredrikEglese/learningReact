import React from 'react';
import ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';
import './index.css';
import './bootstrap.min.css';
 
class ToDoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemList: [
        {key:uuid(),text:"Dishes"},
        {key:uuid(),text:"Take out the bins"},
        {key:uuid(),text:"Make dinner"},
      ],
      inputText: '',
    }

    this.textBoxChange = this.textBoxChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(key){
    this.setState({
      itemList: this.state.itemList.slice().filter(obj => {return obj.key !== key;})
    });
  }

  addItem(){
    if (this.state.inputText === '') return;
    const tmpItemList = this.state.itemList.slice();
    this.setState({
      itemList: [...tmpItemList, {key: uuid(), text:this.state.inputText}],
      inputText: ''
    });
  }  
  
  textBoxChange(event){
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    const itemsList = this.state.itemList.map((item)=>
      <ListItem 
        key={item.key}
        text={item.text}
        onClick={()=>this.deleteItem(item.key)}
      />
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-group">
              {itemsList}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <InputTextBox
              text={this.state.inputText}
              onClick={this.addItem}
              onChange={this.textBoxChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

class InputTextBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      onClick: props.onClick,
      onChange: props.onChange,
    }
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="New task content" value={this.props.text} onChange={this.state.onChange} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.state.onClick}>Add Task</button>
        </div>
      </div>
    )
  }
  
}

function ListItem(props) {    
  return (
    <li className="list-group-item">{props.text} <button className="btn btn-danger float-right" onClick={props.onClick}>X</button></li>
  );
}

// ========================================

ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);
  