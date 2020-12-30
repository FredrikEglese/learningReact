import React from 'react';
import ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';
import './index.css';
import './bootstrap.min.css';
  
function ListItem(props) {    
  return (
    <li className="list-group-item" key={props.key}>{props.text} <button className="btn btn-danger float-right" onClick={props.onClick}>X</button></li>
  );
}

class InputTextBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      text: props.text,
      onClick: props.onClick,
      onChange: props.onChange,
    }
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="New task content" value={this.state.text} onChange={this.onChange} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.state.onClick}>Add Task</button>
        </div>
      </div>
    )
  }
  
}
  
class List extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemList: [
        {key:uuid(),text:"Dishes"},
        {key:uuid(),text:"Take out the bins"},
        {key:uuid(),text:"Make dinner"},
      ],
      inputText: "TMP",
    }
  }

  deleteItem(key){
    const tmpItemList = this.state.itemList.slice().filter(obj => {return obj.key !== key;})
    this.setState({
      itemList: tmpItemList,
      inputText: this.state.inputText,
    });
  }

  addItem(){
    const tmpItemList = this.state.itemList.slice();
    this.setState({
      itemList: [...tmpItemList, {key: uuid(), text:this.state.inputText}],
      inputText: "next",
    });
  }  
  
  textBoxChange(event){
    const tmpItemList = this.state.itemList.slice();
    this.setState({tmpItemList, inputText:event.target.value})
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
              onClick={()=>this.addItem()}
              onChange={()=>this.textBoxUpdate()}
            />
          </div>
        </div>
      </div>
    );
  }
}

  
// ========================================

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
  