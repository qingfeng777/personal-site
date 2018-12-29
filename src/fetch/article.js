import { api, fetch } from './common'

// 获取列表
const _getList = function (limit, page) {
  return fetch(api.paas + '/article/' + limit + "/" + page, 'get')
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

const _getArticle = function (limit, page, searchKey) {
  return fetch(api.paas + '/article/search', 'get', {}, {
    'key': searchKey,
    'limit': limit,
    'page': page
  })
}

// 输出业务请求方法，规范为vuex模块内引入
export default {
  _getArticle,
  _getList,
  _create,
  _edit,
  _delete,
  _getItem
}
