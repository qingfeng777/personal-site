module.exports = {
  // 输出根目录 
  rootpath: '/',
  // 入口公共路径
  // 全局cdn配置，数组内可引入多个cdn引用文件
  cdn: {
    js: [],
    css: []
  },
  // 多页面入口配置
  // -- entry 入口路径
  // -- title 输出页面title
  // -- filename 输出页面路径／文件名
  // -- cdn 页面cdn配置 (参考全局cdn配置格式)

  // 项目基础配置，项目部署config.js文件可以此为范本（不包括mock部分）
  // -- publicCloud 是否启用公有云模式
  // -- switcherList 项目菜单切换配置
  // -- api 项目远程数据源
  config: {
    publicCloud: true,
    // 远程数据接口
    api: {
      login: 'http://localhost:9010/api/v1',
      paas: 'http://localhost:9010/api/v1'
    },
    // 本地数据模拟配置
    // ！项目部署不包括此部分
    mock: false,
    mockApi: {
      login: '/mock/auth',
      console: '/mock/console',
      admin: '/mock/admin',
      paas: '/mock/paas'
    }
  }
}
