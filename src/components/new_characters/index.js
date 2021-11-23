import React, { Component  } from "react";
import { connect } from "react-redux";
import { ADD_ITEM_CHARACTER } from "../../constatns/todo_type";




class ListCharacters extends Component{
  addNewPerson = () =>{
    const new_el = this.props.new_card;
    this.props.dispatch({
        type: ADD_ITEM_CHARACTER,
        name: new_el.name,
        photo: new_el.url,
        email: new_el.email,
        gender: new_el.gender,
      });
  }
 componentDidMount =() =>{
     this.addNewPerson();
 } 
 
  render(){
    return (
      <div className="list">
      </div>
    );
  }  
  }
  function mapStateToProps(state) {
    return {
      characters: state.todo.new_characters,
    };
  };

export default connect(mapStateToProps)(ListCharacters);
