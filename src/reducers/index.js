import { combineReducers } from 'redux'
import articles from './articles'
import currentArticle from './currentArticle'

export default combineReducers({
    articles,
    currentArticle
})