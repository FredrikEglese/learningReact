import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
  
class ListItem extends React.Component {    
  render() {
    return (
      <li key={this.props.key}>{this.props.text} <a onClick={this.props.onClick}>X</a></li>
    );
  }
}
  
class List extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemList: [
        {key:1,text:"Dishes"},
        {key:2,text:"Take out the bins"},
        {key:3,text:"Make dinner"},
      ],
    }
  }

  deleteItem(key){
    const tmpItemList = this.state.itemList.slice().filter(obj => {return obj.key !== key;})
    this.setState({
      itemList: tmpItemList,
    });
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
      <ul>
        {itemsList}
      </ul>
    );
  }
}

  
// ========================================

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
  