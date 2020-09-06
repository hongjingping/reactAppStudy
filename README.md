create-react-app
组件化开发
jsx
开发调试
虚拟dom
生命周期
react-transtion-group

## 使用antd实现todolist组件
  1. 官网: https://ant.design/docs/react/getting-started-cn
  2. ` yarn add antd`

## 创建redux中的store
  1. Store 的创建
  2. `yarn add redux`
  3. 创建store

## action和reducer的编写
  1. 

## 使用antd编写todolist页面布局
  1. 

## 拆分actionTypes

## 使用actionCreator统一创建action

## Redux设计和使用原则知识补充
  1. store必须是唯一的
  2. 只有store能改变自己的内容
  3. reducer可以接收state，但是不能改变state
  4. 纯函数指的是，给固定的输入，就一定会有固定的输出，而且不会有副作用
  5. Redux中核心的API
    1. createStore
      1. store.dispatch() 派发action，传递给store
      2. store.getState() 获取store中的所有数据内容
      3. store.subscribe() 订阅store中的改变，只要store发生改变，store的接收函数就会发生改变
## UI组件和容器组件的拆分

## 无状态组件(只有render函数的时候，如UI组件)

## redux发送ajax请求获取数据

## 使用redux-thunk中间件实现ajax数据请求
1. yarn add redux-thunk

## redux中间件(对dispatch方法的升级)

## redux-saga中间件的使用
1. yarn add redux-saga

## react-redux的使用
1. yarn add react-redux

## 项目搭建，styled-components与reset.css的结合使用
  1. create-react-app jianshu
  2. 