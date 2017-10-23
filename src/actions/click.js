import { USER_CLICKED_ON } from "../types";
import api from "../api";

export const userClickedOn = (user) => ({
  type: USER_CLICKED_ON,
  user
})

/* click constant equals function that takes GitHub login and it returns
another function inside which we make API request. */
export const click = login => (dispatch) =>
  api.user.click(login).then(user => {
    dispatch(userClickedOn(user));
  });
