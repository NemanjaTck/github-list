import { USER_CLICKED_ON } from '../types';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_CLICKED_ON:
      return action.user;
    default:
      return state;
  }
}
