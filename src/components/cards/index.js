import React, { useState } from "react";
import { connect } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";


function Cards(state) { 
  const firsPage = state.characters.filter((el) => el.id <= 12);
  const secondPage = state.characters.filter((el) => el.id > 12);
  const [number, setNum] = useState(state.characters.filter((el) => el.id <= 12));
 
  return (
    <div>
    <div className="but_next">
          <button onClick={() => setNum(firsPage) }>Back</button>
          <button onClick={() => setNum(secondPage)}>Next</button>
        </div>
    <div className="cards_block">
        { number.map((el) => {
            return (
                <div className="cards" key={el.id}>
                    <div className="avatar"><Link to={`/${el.id}`}><img alt="avatar" src={el.photo}></img></Link></div>
                        <h3>{el.name} </h3>    
                        <p><b>Gender: </b>{el.gender}</p>
                        <p><b>Status: </b>{el.status}</p>
                        <p><b>Stecies: </b>{el.species}</p>
                </div>
            );
        })
        }
     </div></div>
  
  );
};

function mapStateToProps(state) {
    return {
      characters: state.todo.all_characters,
    };
  };
export default connect (mapStateToProps)(Cards);
