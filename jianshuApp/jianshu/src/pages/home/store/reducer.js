import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "社会热点1",
    url: "https://upload.jianshu.io/users/upload_avatars/12708103/c2b9934e-e106-4923-b892-18aacf16eb41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  },{
    id: 2,
    title: "社会热点2",
    url: "https://upload.jianshu.io/users/upload_avatars/12708103/c2b9934e-e106-4923-b892-18aacf16eb41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  },{
    id: 3,
    title: "社会热点3",
    url: "https://upload.jianshu.io/users/upload_avatars/12708103/c2b9934e-e106-4923-b892-18aacf16eb41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  },{
    id: 4,
    title: "社会热点4",
    url: "https://upload.jianshu.io/users/upload_avatars/12708103/c2b9934e-e106-4923-b892-18aacf16eb41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}