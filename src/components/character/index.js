import React, { Component  } from "react";
import { connect } from "react-redux";
import "./style.css";
import axios from "axios";

 

class Character extends Component{
  state = {
    names: [],
    inf:''
  }

  getEpisods = async() =>{
    const idPerson = window.location.pathname.slice(1);
      const person = this.props.characters.find((el) => el.id === +(idPerson));
        const episods = person.episode;
        const name_res = [];
        await Promise.all(episods.map(el =>
            axios.get(`${el}`).then(res => {
              name_res.push(res.data.name);
            })
          ));
          this.setState({names: name_res,
                          inf: person});
        }

 componentDidMount =() =>{
   this.getEpisods();
 } 
  render(){
    const person = this.state.inf;
    return (
      <div className="block_inf">
        <div className="character">
                    <div className="avatar"><img alt="avatar" src={person.photo}></img></div>
                        <h2>{person.name} </h2>    
                        <p><b>Gender: </b>{person.gender}</p>
                        <p><b>Status: </b>{person.status}</p>
                        <p><b>Species: </b>{person.species}</p>
                </div>
                <div className="episode">
                  <h1>Episodes:</h1>
                  <div className="list_ep">
                {
                  this.state.names.map((el) =>{
                    return(
                      <div className="elem">{el}</div>
                    )
                  })
                }
                </div></div>
      </div>
    );
  }  
  }
  function mapStateToProps(state) {
    return {
      characters: state.todo.all_characters,
    };
  };
export default connect(mapStateToProps)(Character);

 