import {combineReducers} from 'redux'
import NovelReducer from './NovelReducer'

const reducer = combineReducers({
  novel: NovelReducer
})

export default reducer
