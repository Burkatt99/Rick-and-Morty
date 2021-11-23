import React from "react";
import { connect } from "react-redux";




function NewCards(state) { 
  const new_person = state.characters;
  return (
    <div className="cards_block">
       { new_person.map((el) => {
            return (
                <div className="cards" key={el.id}>
                    <div className="avatar"><img alt="avatar" src={el.photo}></img></div>
                        <h3>{el.name} </h3>    
                        <p><b>Gender: </b>{el.gender}</p>
                        <p><b>Email: </b>{el.email}</p>
                </div>
            );
        })
        }
     </div>
  
  );
};

function mapStateToProps(state) {
    return {
      characters: state.todo.new_characters,
    };
  };
export default connect (mapStateToProps)(NewCards);
