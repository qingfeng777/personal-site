<template>

  <div class="index">

      <div class="user-select">
      <header class="header">
              <nav class="navbar navbar-default" id="navbar">
              <div class="container">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar" aria-expanded="false"> <span class="sr-only"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                  <h1 class="logo hvr-bounce-in"><a href="#" title="木庄网络博客"><img src="../../assets/images/201610171329086541.png" alt="木庄网络博客"></a></h1>
                </div>
                <div class="collapse navbar-collapse" id="header-navbar">
                  <form class="navbar-form visible-xs" action="/Search" method="post">
                    <div class="input-group">
                      <input type="text" name="keyword" class="form-control" placeholder="请输入关键字" maxlength="20" autocomplete="off">
                      <span class="input-group-btn">
                      <button class="btn btn-default btn-search" name="search" type="submit">搜索</button>
                      </span> </div>
                  </form>
                  <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link to="/manager/home">
                            博客管理首页
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/manager/edit">
                          添加
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/manager/tag">
                          标签
                        </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              </nav>
              </header>

              <router-view />

              <footer class="footer">
              <div class="container">
              <p>2000年来 人类的天生能力已经停止了进化 ！
                <a href="http://www.cssmoban.com/" target="_blank" title="传承">使科技文明进步的</a>
                是不断的探索
                <a href="" title="和传承" target="_blank">传承</a></p>
                <br/>惊不惊喜，意不意外！
              </div>
              <div id="gotop"><a class="gotop"></a></div>
              </footer>

          </div>


</div>

</template>

<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.ias.js"></script>
<script src="js/scripts.js"></script>
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/nprogress.js"></script>
<script src="js/jquery.lazyload.min.js"></script>


<script>
//<link rel="apple-touch-icon-precomposed" href="../../assets/images/icon.png">
//<link rel="shortcut icon" href="../../assets/images/favicon.ico">
</script>


<style>


@import "../../assets/css/nprogress.css";
@import "../../assets/css/font-awesome.min.css";

@import "../../assets/nav_files/mycolor.css";
@import "../../assets/plugins/bootstrap/css/bootstrap.min.css";
@import "../../assets/plugins/font-awesome/css/font-awesome.css";
@import "../../assets/css/styles.css";

</style>



