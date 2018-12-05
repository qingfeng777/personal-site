import { api, fetch } from './common'

// 定义业务请求接口方法
const _getList = function (searchKey) {
  return fetch(api.paas + '/alert_cluster', 'get')
}
const _create = function (data) {
  return fetch(api.paas + '/alert_condition/', 'post', data)
}
const _get = function (id) {
  return fetch(api.paas + '/alert_condition/' + id, 'get')
}
const _edit = function (data) {
  return fetch(api.paas + '/alert_condition/', 'put', data)
}
const _delete = function (id) {
  return fetch(api.paas + '/alert_condition/', 'delete', id)
}
const _getNodeList = function () {
  return fetch(api.paas + '/node', 'get')
}
// 启用
const _alertEnable = function (id) {
  return fetch(api.paas + '/alert_disable/', 'delete', id)
}
// 停用
const _alertDisable = function (id) {
  return fetch(api.paas + '/alert_disable/', 'put', id)
}
// 静默
const _alertSilence = function (id) {
  return fetch(api.paas + '/alert_silence/', 'post', id)
}
// 取消静默
const _alertCancleSilence = function (id) {
  return fetch(api.paas + '/alert_silence/', 'delete', id)
}
// 输出业务请求方法，规范为vuex模块内引入
export default {
  _getList,
  _create,
  _get,
  _edit,
  _delete,
  _getNodeList,
  _alertEnable,
  _alertDisable,
  _alertSilence,
  _alertCancleSilence
}
