import { USER_CLICKED_ON } from '../types';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_CLICKED_ON:
    console.log(`action user is ${  action.user}`);
      return action.user;
    default:
    console.log(`Entered default${  action.type}`);
      return state;
  }
}
