import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })
  }
}

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})
export const getMoreList = (page) => {
  return (dispatch) => {
    console.log('click')
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1))
    })
  }
}