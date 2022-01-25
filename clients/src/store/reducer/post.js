import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (post = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...post, action.payload];

    default:
      return post;
  }
};
