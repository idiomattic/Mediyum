import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import StoriesReducer from "./stories_reducer";
import CommentsReducer from './comments_reducer'
import FollowsReducer from "./follows_reducer";
import YumsReducer from "./yums_reducer";

export default combineReducers({
  users: UsersReducer,
  stories: StoriesReducer,
  comments: CommentsReducer,
  follows: FollowsReducer,
  yums: YumsReducer
})