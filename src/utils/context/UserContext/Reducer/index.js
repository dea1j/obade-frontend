import { POPULATE_USER } from "../Types"

export const reducer = (state, action) => {
  switch (action.type) {
    case POPULATE_USER:
        return state = {
            ...state,
            user: action.payload
        }
  }
}