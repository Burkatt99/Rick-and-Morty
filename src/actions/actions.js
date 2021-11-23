import { GET_ITEM_CHARACTERS } from "../constatns/todo_type";
import axios from "axios";

export const getCharacters = () => async (dispatch) => {
    const res = await axios.get(
    `https://rickandmortyapi.com/api/character`
  );
  const character = res.data.results;
  console.log(character);
  character.forEach((el) => {
    dispatch({
      type: GET_ITEM_CHARACTERS,
      payload: {
        id: el.id,
        name: el.name,
        status: el.status,
        species: el.species,
        gender: el.gender,
        photo: el.image,
        episode: el.episode,
      },
    });
  });
};






