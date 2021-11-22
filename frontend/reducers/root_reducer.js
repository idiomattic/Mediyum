import { combineReducers } from "redux"

import ErrorsReducer from "./errors_reducer"
import SessionReducer from "./session_reducer"
import UIReducer from "./ui_reducer"

const rootReducer = combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
  ui: UIReducer
})

export default rootReducer