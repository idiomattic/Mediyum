import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import yumErrorsReducer from './yum_errors_reducer'
import commentErrorsReducer from "./comment_errors_reducer";
import recipeErrorsReducer from "./recipe_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  yums: yumErrorsReducer,
  comments: commentErrorsReducer,
  recipes: recipeErrorsReducer
})