import { ADD_ITEM_CHARACTER, GET_ITEM_CHARACTERS } from "../constatns/todo_type";

const initialState = {
  all_characters: [],
  new_characters: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM_CHARACTERS:
      return {
        ...state,
        all_characters: [...state.all_characters, action.payload],
      };
      case ADD_ITEM_CHARACTER:
      return {
        ...state,
        new_characters: [...state.new_characters, {
          name: action.name,
          email: action.email,
          photo: action.photo,
          gender: action.gender
        } ],
      };
    default:
      return state;
  }
};
