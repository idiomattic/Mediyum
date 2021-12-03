import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import RecipesReducer from "./recipes_reducer";
import CommentsReducer from './comments_reducer'
import FollowsReducer from "./follows_reducer";
import YumsReducer from "./yums_reducer";

export default combineReducers({
  users: UsersReducer,
  recipes: RecipesReducer,
  comments: CommentsReducer,
  follows: FollowsReducer,
  yums: YumsReducer
})