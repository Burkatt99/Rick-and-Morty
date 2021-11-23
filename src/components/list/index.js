import React, { Component  } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../../actions/actions";
import Cards from "../cards";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class ListCharacters extends Component{
  state ={
    gender: '',
    status: '',
    import: false,
  }

  importData = () =>{
    if(this.state.import === false){
      this.props.getCharacters();
      this.setState({import: true});
    } 
  }
 componentDidMount =() =>{
   this.importData();
 } 
 changeGender = (event) => {
  this.setState({gender: event.target.value});
  console.log(this.state.gender);
};
changeStatus = (event) => {
  this.setState({status: event.target.value});
  console.log(this.state.status);
};
  render(){
    return (
      <div className="list_name">
       <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={this.state.gender}
          onChange={this.changeGender}
          label="Gender"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={`female`}>Female</MenuItem>
          <MenuItem value={`male`}>Male</MenuItem>
          <MenuItem value={`genderless`}>Genderless </MenuItem>
          <MenuItem value={`unknown`}>Unknown </MenuItem>
          
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={this.state.status}
          onChange={this.changeStatus}
          label="Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={`alive`}>Alive</MenuItem>
          <MenuItem value={`dead`}>Dead</MenuItem>
          <MenuItem value={`unknown`}>Unknown </MenuItem>
        </Select>
      </FormControl></div>
        <Cards gender={this.state.gender} status={this.state.status}/>
      </div>
    );
  }  
  }

export default connect(null, {getCharacters})(ListCharacters);
