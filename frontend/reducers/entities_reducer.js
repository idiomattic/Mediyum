import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import StoriesReducer from "./stories_reducer";

export default combineReducers({
  users: UsersReducer,
  stories: StoriesReducer
})