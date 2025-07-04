import {data} from '../../assets/index'

const initialState = {
  news: data, // Carga los datos directamente
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}