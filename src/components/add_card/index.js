import React, { useState } from "react";
import { connect } from "react-redux";
import "./style.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListCharacters from '../new_characters';
import NewCards from '../new_list';


function AddCharacter(state) { 
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setUrl] = useState('');
    const [person, setPerson] = useState();
    const [count, setCount] = useState(0);

    const changeGender = (event) => {
      setGender(event.target.value);
    };
    const changeName = (event) => {
        setName(event.target.value);
        console.log(name);
      };
    const changeEmail = (event) => {
        setEmail(event.target.value);
      };
    const changePhoto = (event) => {
        setUrl(event.target.value);
      };

    const addNewPerson = () =>{
        setCount(count+1);
        setPerson({
            name: name,
            gender: gender,
            email: email,
            url: photo,
          });
          setName('');
          setEmail('');
          setUrl('');
          setGender('');
    }

  return (
    <div className="form">
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Name" variant="filled"  onChange={changeName} value={name}/>
      <TextField id="filled-basic" label="Email" variant="filled" onChange={changeEmail} value={email}/>
      <TextField id="filled-basic" label="URL" variant="filled" onChange={changePhoto} value={photo}/>
    </Box>
    <FormControl variant="standard" sx={{ m: 1, width: '15ch' }} id="select">
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={gender}
          onChange={changeGender}
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
      <button onClick={addNewPerson}>Add</button>
      {[...Array(count)].map(() => <ListCharacters new_card ={person} />)}
      <NewCards/>
      </div>
  );
};

function mapStateToProps(state) {
    return {
      characters: state.todo.new_characters,
    };
  };
export default connect (mapStateToProps)(AddCharacter);
