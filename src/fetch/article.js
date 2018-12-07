import { api, fetch } from './common'

// 获取列表
const _getList = function (limit, offset, searchKey) {
  return fetch(api.paas + '/article', 'get')
}
// 创建新
const _create = function (data) {
  return fetch(api.paas + '/article/', 'post', data)
}
// 修改信息
const _edit = function (data) {
  return fetch(api.paas + '/article/', 'put', data)
}
// 删除
const _delete = function (id) {
  return fetch(api.paas + '/article/', 'delete', id)
}
// 获取详情列表
const _getItem = function (id) {
  return fetch(api.paas + '/article/' + id, 'get')
}
// webhook url 有效性验证
const _webhookTest = function (data) {
  return fetch(data, 'post')
}
// 删除校验
const _articleCheck = function (id) {
  return fetch(api.paas + '/article_check', 'post', id)
}

// 输出业务请求方法，规范为vuex模块内引入
export default {
  _getList,
  _create,
  _edit,
  _delete,
  _getItem,
  _webhookTest,
  _articleCheck
}
